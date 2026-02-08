// Core Configuration
const CONFIG = {
    totalImages: 28,
    debugMode: false,
    languages: ['en', 'hi', 'te'],
    defaultLang: 'en'
};

// Localization Dictionary
const I18N = {
    en: {
        loading: ["CONNECTING...", "SUMMONING...", "DO NOT LOOK BEHIND YOU", "THEY ARE HERE"],
        warning: "WARNING: EXTREME HORROR CONTENT",
        start: "ENTER IF YOU DARE",
        cam: "CAM 04: ARTIFACT ROOM",
        spiritBox: ["I see you...", "Turn around...", "Let me in...", "Run...", "Hide..."],
        jumpscare: "FOUND YOU"
    },
    hi: {
        loading: ["कनेक्ट हो रहा है...", "आवाहन...", "पीछे मत देखो", "वे यहाँ हैं"],
        warning: "चेतावनी: अत्यधिक डरावनी सामग्री",
        start: "हिम्मत है तो प्रवेश करें",
        cam: "कैमरा ०४: आर्टिफैक्ट रूम",
        spiritBox: ["मैं तुम्हें देख रहा हूँ...", "पीछे मुड़ो...", "मुझे अंदर आने दो...", "भागो...", "छुपा लो..."],
        jumpscare: "तुम्हें ढूँढ लिया"
    },
    te: {
        loading: ["కనెక్ట్ అవుతోంది...", "పిలుస్తోంది...", "వెనక్కి చూడకు", "వాళ్ళు ఇక్కడే ఉన్నారు"],
        warning: "హెచ్చరిక: అత్యంత భయానక కంటెంట్",
        start: "ధైర్యం ఉంటే ప్రవేశించండి",
        cam: "యామ్ 04: ఆర్టిఫాక్ట్ రూమ్",
        spiritBox: ["నేను నిన్ను చూస్తున్నాను...", "వెనక్కి తిరుగు...", "నన్ను లోపలికి రానివ్వండి...", "పరుగెత్తు...", "దాక్కో..."],
        jumpscare: "నిన్ను కనుగొన్నాను"
    }
};

// Text-to-Speech Engine
class VoiceEngine {
    constructor() {
        this.synth = window.speechSynthesis;
        this.voices = [];
        this.currentUtterance = null; // Prevent GC
        this.loadVoices();
        if (this.synth.onvoiceschanged !== undefined) {
            this.synth.onvoiceschanged = () => this.loadVoices();
        }
    }

    loadVoices() {
        this.voices = this.synth.getVoices();
    }

    speak(text, lang, type = 'demon', params = {}, onEnd = null) {
        if (this.synth.speaking) this.synth.cancel();

        const utter = new SpeechSynthesisUtterance(text);

        // Apply voice characteristics based on type
        if (type === 'demon') {
            utter.pitch = 0.1;
            utter.rate = 0.8;
            utter.volume = 1.0;
        } else if (type === 'child') {
            utter.pitch = 2.2; // Higher base pitch to sound younger
            utter.rate = 1.2;
            utter.volume = 0.8;
        } else if (type === 'whisper') {
            utter.pitch = 0.5;
            utter.rate = 1.5;
            utter.volume = 0.3;
        } else if (type === 'mother') {
            utter.pitch = 1.2;
            utter.rate = 1.1; // Nervous
            utter.volume = 0.9;
        } else if (type === 'father') {
            utter.pitch = 0.6;
            utter.rate = 0.9; // Soft/Calm
            utter.volume = 0.9;
        } else if (type === 'ghost') {
            utter.pitch = 1.5;
            utter.rate = 1.5; // Fast whisper
            utter.volume = 0.4;
        }

        // Apply Manual Overrides for Emotion
        if (params.pitch) utter.pitch = params.pitch;
        if (params.rate) utter.rate = params.rate;
        if (params.volume) utter.volume = params.volume;

        // Apply Jitter (Unstable Voice)
        if (params.jitter) {
            utter.pitch += (Math.random() * params.jitter) - (params.jitter / 2);
            utter.rate += (Math.random() * params.jitter) - (params.jitter / 2);
            // Cap limits
            utter.pitch = Math.max(0.1, Math.min(2, utter.pitch));
            utter.rate = Math.max(0.1, Math.min(2, utter.rate));
        }

        // Select Voice (try to find appropriate gender)
        const voices = window.speechSynthesis.getVoices();
        let voice = null;

        // Helper to find voice
        const findVoice = (keywords) => {
            return voices.find(v => keywords.some(k => v.name.toLowerCase().includes(k.toLowerCase())));
        };

        if (type === 'child' || type === 'mother' || type === 'ghost') {
            // Female voices - aggressive search
            // Microsoft Zira, Google US English, Samantha, any "Female"
            voice = findVoice(['Zira', 'Eva', 'Sara', 'Female', 'Google US English', 'Samantha']);
        } else {
            // Male voices
            voice = findVoice(['David', 'Mark', 'Male', 'Google UK English Male']);
        }

        // Fallback to first available if strict match fails, but try to respect the intended "gender" pool if possible
        if (!voice && voices.length > 0) {
            if (type === 'child' || type === 'mother' || type === 'ghost') {
                // Try to find ANY voice with 'female' or 'woman' in name, otherwise just pick a higher pitched one if we could detect it (we can't easily), so default to first.
                voice = voices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('woman'));
            } else {
                voice = voices.find(v => v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('man'));
            }
        }

        if (voice) utter.voice = voice;

        // CRITICAL FIX: Keep reference to prevent Garbage Collection
        this.currentUtterance = utter;

        // Safety Timeout (in case onend never fires)
        const estimatedDuration = (text.length / 5) * 1000; // Rough estimate
        const safetyTimer = setTimeout(() => {
            if (this.currentUtterance === utter) {
                console.warn("VoiceEngine: Safety Timeout Triggered");
                if (onEnd) onEnd();
                this.currentUtterance = null;
            }
        }, estimatedDuration + 5000); // 5s buffer

        utter.onend = () => {
            clearTimeout(safetyTimer);
            if (onEnd) onEnd();
            this.currentUtterance = null;
        };

        utter.onerror = (e) => {
            console.error("VoiceEngine Error:", e);
            clearTimeout(safetyTimer);
            if (onEnd) onEnd();
            this.currentUtterance = null;
        };

        this.synth.speak(utter);
    }

    speakSequence(lines, onComplete) {
        let index = 0;
        const next = () => {
            if (index >= lines.length) {
                if (onComplete) onComplete();
                return;
            }
            const line = lines[index];
            index++;

            // Trigger visual callback if provided
            if (line.onStart) line.onStart();

            // Speak (pass 'line' as params to capture manual pitch/rate overrides)
            const jitter = (line.type === 'demon' || line.type === 'ghost') ? 0.1 : 0;
            const params = { ...line, jitter };

            this.speak(line.text, 'en', line.type, params, () => {
                if (line.onEnd) line.onEnd();
                setTimeout(next, line.pause || 500);
            });
        };
        next();
    }
}

class TapeDeck {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.masterGain = this.ctx.createGain();
        this.masterGain.connect(this.ctx.destination);
        this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
        this.activeNodes = [];
    }

    resume() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
    }

    stopAll() {
        this.activeNodes.forEach(node => {
            try { node.stop(); } catch (e) { }
            try { node.disconnect(); } catch (e) { }
        });
        this.activeNodes = [];
    }

    // Helper: Create Noise Buffer
    createNoise(duration) {
        const bufferSize = this.ctx.sampleRate * duration;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        return buffer;
    }

    // SCENARIO 1: Haunted House Arrival
    playHauntedHouse() {
        // Wind (Pink Noise)
        const noise = this.ctx.createBufferSource();
        noise.buffer = this.createNoise(10);
        noise.loop = true;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 400;
        filter.Q.value = 1;

        // Moan (Detuned Sawtooth)
        const osc = this.ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.value = 60;
        osc.detune.value = -1200; // Octave down
        const oscGain = this.ctx.createGain();
        oscGain.gain.value = 0.1;

        noise.connect(filter);
        filter.connect(this.masterGain);
        osc.connect(oscGain);
        oscGain.connect(this.masterGain);

        noise.start();
        osc.start();
        this.activeNodes.push(noise, osc);
    }

    // SCENARIO 3: 3:07 AM Wake-up (Clock + Shepard Shepard)
    play307AM() {
        // Ticking Clock
        const tick = () => {
            const osc = this.ctx.createOscillator();
            osc.type = 'square';
            osc.frequency.value = 800;
            const gain = this.ctx.createGain();
            gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
            osc.connect(gain);
            gain.connect(this.masterGain);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.1);
        };
        const clockInt = setInterval(tick, 1000); // 1 sec tick

        // Setup cleanup for interval
        // (Simplified for this snippet, in full app we'd track intervals too)

        // Shepard Tone (Rising Sine Array)
        // Creating just one rising tone for tension
        const osc = this.ctx.createOscillator();
        osc.frequency.setValueAtTime(100, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(800, this.ctx.currentTime + 10);
        const gain = this.ctx.createGain();
        gain.gain.value = 0.05;

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start();
        this.activeNodes.push(osc);
    }

    // SCENARIO 5: Demon Manifestation (Screech)
    playDemonReveal() {
        const t = this.ctx.currentTime;

        // Metallic Screech (FM Synthesis)
        const carrier = this.ctx.createOscillator();
        carrier.type = 'sawtooth';
        carrier.frequency.setValueAtTime(800, t);
        carrier.frequency.exponentialRampToValueAtTime(20, t + 1.5); // Pitch drop

        const mod = this.ctx.createOscillator();
        mod.type = 'square';
        mod.frequency.value = 50;
        const modGain = this.ctx.createGain();
        modGain.gain.value = 1000;

        mod.connect(modGain);
        modGain.connect(carrier.frequency);

        const masterGain = this.ctx.createGain();
        masterGain.gain.setValueAtTime(1.0, t);
        masterGain.gain.exponentialRampToValueAtTime(0.01, t + 2);

        carrier.connect(masterGain);
        masterGain.connect(this.masterGain);

        carrier.start();
        mod.start();
        carrier.stop(t + 2);
        mod.stop(t + 2);
    }

    // SCENARIO 8: Something Behind You (Binaural Whisper Hook)
    playBehindYou() {
        // Placeholder simple pan execution
        // Real HRTF requires more setup, using StereoPanner for now
        const panner = this.ctx.createStereoPanner();
        panner.pan.value = 1; // Right Ear

        // Whisper Noise
        const noise = this.ctx.createBufferSource();
        noise.buffer = this.createNoise(1);
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 2000;

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.4, this.ctx.currentTime + 0.5);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.0);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(panner);
        panner.connect(this.masterGain);

        noise.start();
    }

    suspend() {
        if (this.ctx.state === 'running') this.ctx.suspend();
    }

    resume() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
    }

    // Dispatcher
    playScenario(id) {
        console.log(`Playing Scenario: ${id}`);
        this.resume();
        switch (id) {
            case 1: this.playHauntedHouse(); break;
            case 2: this.playClapping(); break;
            case 3: this.play307AM(); break;
            case 4: this.playFootsteps(); break;
            case 5: this.playDemonReveal(); break;
            case 6: this.playPossession(); break; // Placeholder
            case 7: this.playExorcism(); break;   // Placeholder
            case 8: this.playBehindYou(); break;
            case 9: this.playPresence(); break;
            case 10: this.playJumpscare(); break;
            default: console.warn("Unknown Scenario:", id);
        }
    }

    // 2. Clapping
    playClapping() {
        const claps = [0, 1.5, 3];
        claps.forEach(delay => {
            setTimeout(() => {
                const noise = this.ctx.createBufferSource();
                noise.buffer = this.createNoise(0.1);
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'highpass';
                filter.frequency.value = 800;

                const gain = this.ctx.createGain();
                gain.gain.setValueAtTime(0.8, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);

                const panner = this.ctx.createStereoPanner();
                panner.pan.value = (Math.random() * 2 - 1);

                noise.connect(filter);
                filter.connect(gain);
                gain.connect(panner);
                panner.connect(this.masterGain);
                noise.start();
            }, delay * 1000);
        });
    }

    // 4. Footsteps
    playFootsteps() {
        let step = 0;
        const walk = setInterval(() => {
            if (step > 6) { clearInterval(walk); return; }
            if (this.ctx.state === 'closed') return;

            const noise = this.ctx.createBufferSource();
            noise.buffer = this.createNoise(0.2);
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 200;

            const pan = this.ctx.createStereoPanner();
            pan.pan.value = -1 + (step * 0.3);

            const g = this.ctx.createGain();
            g.gain.setValueAtTime(0.4, this.ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);

            noise.connect(filter);
            filter.connect(g);
            g.connect(pan);
            pan.connect(this.masterGain);
            noise.start();
            step++;
        }, 1200);
    }

    // 9. Presence (Cold Wind + Hum)
    playPresence() {
        // Low wind
        const noise = this.ctx.createBufferSource();
        noise.buffer = this.createNoise(5);
        noise.loop = true; // CRITICAL: Loop the background drone
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(100, this.ctx.currentTime);
        filter.frequency.linearRampToValueAtTime(50, this.ctx.currentTime + 5);

        const g = this.ctx.createGain();
        g.gain.value = 0.5;

        noise.connect(filter);
        filter.connect(g);
        g.connect(this.masterGain);
        noise.start();
    }

    // 10. Jumpscare (Orchestral Hit)
    playJumpscare() {
        const t = this.ctx.currentTime;
        // 1. Sub Bass
        const osc = this.ctx.createOscillator();
        osc.frequency.setValueAtTime(60, t);
        osc.frequency.exponentialRampToValueAtTime(10, t + 0.5);
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(1, t);
        g.gain.exponentialRampToValueAtTime(0.01, t + 1);
        osc.connect(g);
        g.connect(this.masterGain);
        osc.start();
        osc.stop(t + 1);

        // 2. High Screen
        const osc2 = this.ctx.createOscillator();
        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(800, t);
        osc2.detune.linearRampToValueAtTime(2000, t + 0.2);
        const g2 = this.ctx.createGain();
        g2.gain.setValueAtTime(0.5, t);
        g2.gain.exponentialRampToValueAtTime(0.01, t + 0.5);
        osc2.connect(g2);
        g2.connect(this.masterGain);
        osc2.start();
        osc2.stop(t + 0.5);
    }

    // 11. Floor Creak
    playCreak() {
        const osc = this.ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, this.ctx.currentTime + 1.5);

        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.1, this.ctx.currentTime);
        g.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.5);

        osc.connect(g);
        g.connect(this.masterGain);
        osc.start();
        osc.stop(this.ctx.currentTime + 1.5);
    }

    // 12. Door Slam
    playDoorSlam() {
        const t = this.ctx.currentTime;
        // Impact
        const noise = this.ctx.createBufferSource();
        noise.buffer = this.createNoise(0.5);
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 150;

        const g = this.ctx.createGain();
        g.gain.setValueAtTime(1, t);
        g.gain.exponentialRampToValueAtTime(0.01, t + 0.4);

        noise.connect(filter);
        filter.connect(g);
        g.connect(this.masterGain);
        noise.start();

        // Rumble/Decay
        const osc = this.ctx.createOscillator();
        osc.frequency.value = 40;
        const g2 = this.ctx.createGain();
        g2.gain.setValueAtTime(0.5, t);
        g2.gain.exponentialRampToValueAtTime(0.01, t + 1.0);

        osc.connect(g2);
        g2.connect(this.masterGain);
        osc.start();
        osc.stop(t + 1.0);
    }

    // Placeholders
    playPossession() { }
    playExorcism() { }
}


class HybridEngine {
    constructor() {
        this.video = document.getElementById('mainVideo');
        this.canvas = document.getElementById('scareCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.uiLayer = document.getElementById('ui-layer');
        this.currentLang = CONFIG.defaultLang;

        this.tapeDeck = new TapeDeck();
        this.voiceEngine = new VoiceEngine();

        this.scareImages = [];
        this.loadedImagesCount = 0;
        this.timeOffset = 0; // For seeking
        this.preloadImages();

        this.initUI();
    }

    preloadImages() {
        for (let i = 1; i <= CONFIG.totalImages; i++) {
            const img = new Image();
            img.src = `assets/scare_${i}.png`;
            img.onload = () => {
                this.loadedImagesCount++;
                if (CONFIG.debugMode) console.log(`Loaded scare_${i}.png`);
            };
            this.scareImages.push(img);
        }
    }

    initUI() {
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        // Debug & Controls
        document.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 's') this.triggerScare();
            if (e.key === 'ArrowRight') this.seek(5);
            if (e.key === 'ArrowLeft') this.seek(-5);
        });

        // Eyes Follow
        document.addEventListener('mousemove', (e) => {
            const eyes = document.querySelector('.eyes-container');
            if (eyes) {
                eyes.style.left = e.clientX + 'px';
                eyes.style.top = e.clientY + 'px';
            }
        });
    }

    seek(seconds) {
        // Update Time Offset
        this.timeOffset += (seconds * 1000);

        // Visual Feedback
        const consoleEl = document.querySelector('.console-text');
        if (consoleEl) {
            const action = seconds > 0 ? "FFWD >>" : "<< RWD";
            const originalText = consoleEl.getAttribute('data-text') || consoleEl.innerText;
            if (!consoleEl.getAttribute('data-text')) consoleEl.setAttribute('data-text', originalText);

            consoleEl.innerText = `${action} ${Math.abs(seconds)}S`;
            consoleEl.classList.add('glitch');

            // Audio Feedback
            this.tapeDeck.playNoise('white', 0.2, 0.5); // Static burst

            clearTimeout(this.seekTimeout);
            this.seekTimeout = setTimeout(() => {
                consoleEl.innerText = originalText;
                consoleEl.classList.remove('glitch');
            }, 800);
        }
    }

    startSequence() {
        document.getElementById('landing-page').classList.add('hidden');
        document.getElementById('loading-screen').classList.remove('hidden');

        // Play Intro Audio
        this.tapeDeck.playScenario(1); // Haunted House

        // Simulate Loading
        setTimeout(() => {
            document.getElementById('loading-screen').classList.add('hidden');
            this.startMonitoring();
        }, 3000);
    }

    startMonitoring() {
        this.uiLayer.classList.remove('hidden');

        // Show CCTV Feed
        this.canvas.classList.add('visible');
        this.isVideoActive = true;
        this.renderFeed();

        // 3:07 AM Loop
        this.tapeDeck.playScenario(3); // 3:07 AM

        // Spirit Box Loop
        setInterval(() => {
            if (Math.random() > 0.8) {
                this.triggerSpiritMessage();
            }
        }, 5000);

        // Random Conversation (leading to Jumpscare)
        setTimeout(() => {
            this.triggerConversation();
        }, 15000 + Math.random() * 5000); // Delayed slightly to let paranormal events happen first

        // Start Paranormal Loop
        setTimeout(() => this.triggerParanormalEvent(), 3000);
    }

    renderFeed() {
        if (!this.isVideoActive) return;

        // Throttle to ~12 FPS for CCTV Feel
        const now = Date.now();
        if (!this.lastFrameTime || now - this.lastFrameTime > 80) {
            this.lastFrameTime = now;

            // Clear
            this.ctx.fillStyle = '#050505';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Draw Current Frame (Adjusted by Seek Time)
            if (this.scareImages.length > 0) {
                const adjustedTime = now + this.timeOffset;
                const frameIndex = Math.floor(adjustedTime / 100) % this.scareImages.length;
                const img = this.scareImages[frameIndex];

                if (img && img.complete) {
                    // Draw with "contain" aspect ratio
                    const scale = Math.max(this.canvas.width / img.width, this.canvas.height / img.height);
                    const x = (this.canvas.width / 2) - (img.width / 2) * scale;
                    const y = (this.canvas.height / 2) - (img.height / 2) * scale;

                    this.ctx.globalCompositeOperation = 'source-over';

                    // Apply breathing scale if no specific animation is running
                    // Note: CSS animation on canvas handles this better than per-frame scaling
                    // So we just ensure the class is present on the canvas element
                    if (!this.canvas.classList.contains('breathing') && !this.scareActive) {
                        this.canvas.classList.add('breathing');
                    }

                    this.ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

                    // Draw Ghost Box (Face Detection)
                    if (this.drawGhostBox) {
                        this.ctx.strokeStyle = '#00ff00';
                        this.ctx.lineWidth = 2;
                        const boxX = x + (img.width * scale * 0.4) + (Math.random() * 10);
                        const boxY = y + (img.height * scale * 0.2) + (Math.random() * 10);
                        this.ctx.strokeRect(boxX, boxY, 100, 100);

                        this.ctx.fillStyle = '#00ff00';
                        this.ctx.font = '12px Courier New';
                        this.ctx.fillText("UNKNOWN ENTITY [98%]", boxX, boxY - 5);
                    }
                }
            }
        }

        requestAnimationFrame(() => this.renderFeed());
    }

    triggerSpiritMessage() {
        const msgs = I18N[this.currentLang].spiritBox;
        const msg = msgs[Math.floor(Math.random() * msgs.length)];

        // VISUAL: Spirit Box Display
        const disp = document.getElementById('spirit-box-display');
        if (disp) {
            disp.innerText = msg;
            disp.classList.add('active');
            setTimeout(() => disp.classList.remove('active'), 4000);
        }

        // AUDIO: Voice + Presence
        this.voiceEngine.speak(msg, this.currentLang, 'whisper');
        // Play Scenario 9 (Presence) as background
        this.tapeDeck.playScenario(9);
    }

    setLang(lang) {
        if (!CONFIG.languages.includes(lang)) return;
        this.currentLang = lang;
        console.log(`Language set to: ${lang}`);

        // Update UI Text immediately
        // (Simplified for now, in a full app we'd bind all text elements)

        // Start if on landing page
        const landing = document.getElementById('landing-page');
        if (!landing.classList.contains('hidden')) {
            this.tapeDeck.resume();

            // Inject Cinematic Effects
            const grain = document.createElement('div');
            grain.className = 'film-grain';
            document.body.appendChild(grain);

            const vignette = document.createElement('div');
            vignette.className = 'vignette';
            document.body.appendChild(vignette);

            this.startSequence();
        }
    }

    triggerConversation() {
        // Stop random events but KEEP background noise
        this.isVideoActive = false;
        this.tapeDeck.resume(); // Ensure audio engine is running
        this.tapeDeck.playScenario(9); // Ensure Presence drone is active

        // UI Elements
        const canvas = this.canvas;
        const subUI = document.getElementById('subtitles');
        const camText = document.querySelector('.cam-name');

        // Helper to set scene
        const setScene = (text, cls = '', bgClass = '') => {
            if (camText) camText.innerText = text;
            canvas.className = 'ken-burns'; // Default animation
            if (cls) canvas.classList.add(cls);

            // Apply background to body or container since canvas might be transparent
            document.body.className = bgClass;
        };

        const script = [
            // SCENE: THE HOUSE THAT BREATHES
            {
                text: "This place smells like... dust. And something rotten.", type: 'mother',
                pitch: 1.2, rate: 0.8, // Slow, sniffing, disgusted
                pause: 2000,
                onStart: () => {
                    setScene("⚠ EXT. FARMHOUSE - DUSK ⚠", 'farmhouse-filter', 'bg-farmhouse');
                    this.tapeDeck.resume();
                    this.tapeDeck.playPresence();
                    if (subUI) { subUI.innerText = "Mother: This place smells like... dust. And something rotten."; subUI.classList.add('visible'); subUI.style.color = '#ffccaa'; }
                },
                onEnd: () => { if (subUI) subUI.classList.remove('visible'); }
            },
            {
                text: "It’s been empty for years. That’s all it is.", type: 'father',
                pitch: 0.6, rate: 1.1, // Trying to be reassuring but rushed
                pause: 1500,
                onStart: () => {
                    if (subUI) { subUI.innerText = "Father: It’s been empty for years. That’s all it is."; subUI.classList.add('visible'); subUI.style.color = '#aaaaff'; }
                },
                onEnd: () => { if (subUI) subUI.classList.remove('visible'); }
            },
            {
                text: "Daddy? Why is it so cold in here?", type: 'child',
                pitch: 1.9, rate: 1.2, volume: 1.0, // High pitch (fear), fast (shivering)
                pause: 1500,
                onStart: () => {
                    // Transition to Interior
                    setScene("⚠ INT. HALLWAY - NIGHT ⚠", 'farmhouse-filter', 'bg-hallway');
                    canvas.classList.add('shake-slow');
                    if (subUI) { subUI.innerText = "Child: Daddy? Why is it so cold in here?"; subUI.classList.add('visible'); subUI.style.color = '#ffff00'; }
                },
                onEnd: () => {
                    if (subUI) subUI.classList.remove('visible');
                    this.triggerParanormalEvent(); // Random scare
                }
            },
            {
                text: "There’s no windows open… I checked them.", type: 'mother',
                pitch: 1.4, rate: 1.3, volume: 0.9, // Higher, faster (Panic setting in)
                pause: 1000,
                onStart: () => {
                    if (subUI) { subUI.innerText = "Mother: There’s no windows open… I checked them."; subUI.classList.add('visible'); subUI.style.color = '#ffccaa'; }
                },
                onEnd: () => {
                    if (subUI) subUI.classList.remove('visible');
                    this.tapeDeck.playCreak();
                }
            },
            {
                text: "Did the house just move?!", type: 'child',
                pitch: 2.0, rate: 1.5, volume: 1.0, // Very high, very fast (Terror)
                pause: 1500,
                onStart: () => {
                    canvas.classList.add('shake-slow');
                    this.tapeDeck.playScenario(4); // Footsteps
                    if (subUI) { subUI.innerText = "Child: Did the house just move?!"; subUI.classList.add('visible'); subUI.style.color = '#ffff00'; }
                },
                onEnd: () => {
                    if (subUI) subUI.classList.remove('visible');
                    this.triggerParanormalEvent(); // Trigger random event
                }
            },
            {
                text: "It's just... old wood settling. Calm down.", type: 'father',
                pitch: 0.7, rate: 0.9, // Forcing calm, deep (hiding fear)
                pause: 2000,
                onStart: () => {
                    this.tapeDeck.playCreak(); // Wood settling sound
                    if (subUI) { subUI.innerText = "Father: It's just... old wood settling. Calm down."; subUI.classList.add('visible'); subUI.style.color = '#aaaaff'; }
                },
                onEnd: () => { if (subUI) subUI.classList.remove('visible'); }
            },
            {
                text: "Goooo...", type: 'ghost',
                pitch: 0.01, rate: 0.2, volume: 1.0, // Demonic Slow
                pause: 1000,
                onStart: () => {
                    setScene("⚠ UNKNOWN FREQUENCY ⚠", 'invert', 'bg-hallway');
                    this.tapeDeck.playScenario(8); // Whisper "Behind You"
                    this.tapeDeck.playScenario(9); // Presence drone
                    if (subUI) { subUI.innerText = "Unknown: Goooo..."; subUI.classList.add('visible'); subUI.style.color = '#888888'; subUI.style.fontSize = '2rem'; }
                },
                onEnd: () => {
                    // Keep the invert for a bit longer to be scary
                    setTimeout(() => canvas.classList.remove('invert'), 500);
                    if (subUI) { subUI.classList.remove('visible'); subUI.style.fontSize = ''; }
                }
            },
            {
                text: "Did you hear that voice?! Who said that?!", type: 'mother',
                pitch: 1.6, rate: 1.6, volume: 1.0, // Very High, Very Fast (Hysteria)
                pause: 1000,
                onStart: () => {
                    this.tapeDeck.playScenario(2); // Clapping/Sharp noise to startle
                    if (subUI) { subUI.innerText = "Mother: Did you hear that voice?! Who said that?!"; subUI.classList.add('visible'); subUI.style.color = '#ffccaa'; }
                },
                onEnd: () => { if (subUI) subUI.classList.remove('visible'); }
            },
            {
                text: "I... I didn’t hear anything. Stay close to me.", type: 'father',
                pitch: 0.8, rate: 1.3, // Voice cracking/breaking (Lying)
                pause: 2000,
                onStart: () => {
                    canvas.classList.add('glitch'); // Visual glitch indicating a lie/reality break
                    if (subUI) { subUI.innerText = "Father: I... I didn’t hear anything. Stay close to me."; subUI.classList.add('visible'); subUI.style.color = '#aaaaff'; }
                },
                onEnd: () => {
                    canvas.classList.remove('glitch');
                    if (subUI) subUI.classList.remove('visible');
                }
            },
            {
                text: "You don’t belong...", type: 'ghost',
                pitch: 0.01, rate: 0.4,
                pause: 500,
                onStart: () => {
                    setScene("⚠ SIGNAL INTRUSION ⚠", 'glitch-heavy', 'bg-hallway');
                    this.tapeDeck.playScenario(5); // Demon Reveal Audio
                    if (subUI) { subUI.innerText = "Unknown: You don’t belong..."; subUI.classList.add('visible'); subUI.style.color = '#888888'; }
                },
                onEnd: () => {
                    canvas.classList.remove('glitch-heavy');
                    if (subUI) subUI.classList.remove('visible');
                    this.tapeDeck.playDoorSlam();
                }
            },
            {
                text: "It wants us to leave! PLEASE!", type: 'child',
                pitch: 2.0, rate: 1.6, volume: 1.0, // Screaming/Sobbing
                pause: 1500,
                onStart: () => {
                    if (subUI) { subUI.innerText = "Child: It wants us to leave! PLEASE!"; subUI.classList.add('visible'); subUI.style.color = '#ffff00'; }
                },
                onEnd: () => { if (subUI) subUI.classList.remove('visible'); }
            },
            {
                text: "SOMEONE IS INSIDE THIS HOUSE!!", type: 'mother',
                pitch: 1.7, rate: 1.5, volume: 1.0, // Full Scream
                pause: 1000,
                onStart: () => {
                    if (subUI) { subUI.innerText = "Mother: SOMEONE IS INSIDE THIS HOUSE!!"; subUI.classList.add('visible'); subUI.style.color = '#ffccaa'; }
                },
                onEnd: () => {
                    if (subUI) subUI.classList.remove('visible');
                    // Reset body bg
                    document.body.className = '';
                    this.triggerJumpscare();
                }
            }
        ];

        console.log("Starting Episode 1...");
        this.voiceEngine.speakSequence(script, () => {
            console.log("Episode Ended.");
        });
    }

    triggerJumpscare() {
        // Stop normal feed
        this.isVideoActive = false;

        // VISUALS
        this.canvas.classList.add('visible');
        this.scareActive = true;

        // AUDIO (Demon Reveal + Screech)
        this.tapeDeck.playDemonReveal();
        this.voiceEngine.speak(I18N[this.currentLang].jumpscare, this.currentLang, 'demon');

        // VIDEO BLENDING LOOP (Code-Driven Hallucination)
        let frame = 0;
        const loop = () => {
            if (!this.scareActive) return;

            // 1. Harsh Clearing (Trailing effect)
            this.ctx.fillStyle = `rgba(${Math.random() * 20},0,0,0.2)`;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // 2. GLITCH ALGORITHM
            const img = this.scareImages[frame % this.scareImages.length];
            if (img && img.complete) {
                // Randomize Layout
                const scale = Math.max(this.canvas.width / img.width, this.canvas.height / img.height) * (1 + Math.random() * 0.2);
                const x = (this.canvas.width / 2) - (img.width / 2) * scale + (Math.random() - 0.5) * 100;
                const y = (this.canvas.height / 2) - (img.height / 2) * scale + (Math.random() - 0.5) * 100;

                // Blend Modes (The "Hallucination")
                const blends = ['source-over', 'difference', 'exclusion', 'hard-light', 'luminosity'];
                this.ctx.globalCompositeOperation = blends[Math.floor(Math.random() * blends.length)];

                // Color Channel Split (Red/Blue offset)
                if (Math.random() > 0.5) {
                    this.ctx.drawImage(img, x + 10, y, img.width * scale, img.height * scale);
                    this.ctx.globalCompositeOperation = 'source-over';
                    this.ctx.globalAlpha = 0.5;
                }

                this.ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
                this.ctx.globalAlpha = 1.0;
                this.ctx.globalCompositeOperation = 'source-over';

                // 3. Digital Noise overlay
                if (Math.random() > 0.8) {
                    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
                    // Simple noise injection would be too slow here, rely on CSS 'film-grain' instead
                    this.canvas.style.filter = `invert(${Math.random()}) contrast(${1 + Math.random()})`;
                } else {
                    this.canvas.style.filter = 'none';
                }
            }

            frame = (frame + 1 + Math.floor(Math.random() * 3)); // Rapid cycling

            requestAnimationFrame(loop);
        };
        loop();

        // End Scare
        setTimeout(() => {
            this.scareActive = false;
            this.canvas.classList.remove('glitch');
            this.canvas.style.filter = 'none';
            // Resume normal feed
            this.isVideoActive = true;
            this.renderFeed();
        }, 3000); // Extended scare duration
    }

    triggerParanormalEvent() {
        if (this.scareActive || !this.isVideoActive) return;

        const type = Math.floor(Math.random() * 5);
        console.log(`Paranormal Event: ${type}`);

        switch (type) {
            case 0: // Quick Invert (Subliminal)
                this.canvas.classList.add('invert');
                this.tapeDeck.playNoise('white', 0.1, 0.1);
                setTimeout(() => this.canvas.classList.remove('invert'), 100);
                break;

            case 1: // Ghost Box Detection
                this.drawGhostBox = true;
                this.tapeDeck.playNoise('pink', 0.5, 0.05); // Radar beep
                setTimeout(() => { this.drawGhostBox = false; }, 2000);
                break;

            case 2: // Bloody Flash
                this.canvas.classList.add('bloody');
                this.tapeDeck.playScenario(6); // Possession sound snippet (wet)
                setTimeout(() => this.canvas.classList.remove('bloody'), 500);
                break;

            case 3: // Heavy Glitch
                this.canvas.classList.add('glitch-heavy');
                this.tapeDeck.playScenario(2); // Clapping/Sharp noise
                setTimeout(() => this.canvas.classList.remove('glitch-heavy'), 300);
                break;

            case 4: // Audio Sting Only
                if (Math.random() > 0.5) this.tapeDeck.playScenario(4); // Footsteps
                else this.tapeDeck.playScenario(8); // Whisper
                break;
        }

        // Schedule next event (random 4-8 seconds)
        setTimeout(() => this.triggerParanormalEvent(), 4000 + Math.random() * 4000);
    }
}

// Boot
window.addEventListener('DOMContentLoaded', () => {
    window.engine = new HybridEngine();
});
