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
        landingTitle: "WARREN OCCULT MUSEUM",
        landingWarning: "WARNING: Viewer discretion is advised.",
        landingSubwarning: "Live feed contains paranormal activity.",
        loading: ["CONNECTING...", "SUMMONING...", "DO NOT LOOK BEHIND YOU", "THEY ARE HERE"],
        warning: "WARNING: EXTREME HORROR CONTENT",
        start: "ENTER IF YOU DARE",
        cam: "CAM 04: ARTIFACT ROOM",
        spiritBox: ["I see you...", "Turn around...", "Let me in...", "Run...", "Hide..."],
        jumpscare: "FOUND YOU",
        episodeTitle: "EPISODE 1",
        episodeSubtitle: "THE HOUSE THAT BREATHES",
        finalMessage: "THE NIGHTMARE HAS ONLY BEGUN...",
        finalSubmessage: "PRAY FOR THE DAWN.",
        script: [
            { text: "This place smells like... dust. And something rotten.", type: 'mother', pitch: 1.2, rate: 0.8, pause: 2000, color: '#ffccaa', prefix: "Mother: " },
            { text: "It’s been empty for years. That’s all it is.", type: 'father', pitch: 0.6, rate: 1.1, pause: 1500, color: '#aaaaff', prefix: "Father: " },
            { text: "Daddy? Why is it so cold in here?", type: 'child', pitch: 1.9, rate: 1.2, volume: 1.0, pause: 1500, color: '#ffff00', prefix: "Child: " },
            { text: "There’s no windows open… I checked them.", type: 'mother', pitch: 1.4, rate: 1.3, volume: 0.9, pause: 1000, color: '#ffccaa', prefix: "Mother: " },
            { text: "Did the house just move?!", type: 'child', pitch: 2.0, rate: 1.5, volume: 1.0, pause: 1500, color: '#ffff00', prefix: "Child: " },
            { text: "It's just... old wood settling. Calm down.", type: 'father', pitch: 0.7, rate: 0.9, pause: 2000, color: '#aaaaff', prefix: "Father: " },
            { text: "Goooo...", type: 'ghost', pitch: 0.01, rate: 0.2, volume: 1.0, pause: 1000, color: '#888888', prefix: "Unknown: " },
            { text: "Did you hear that voice?! Who said that?!", type: 'mother', pitch: 1.6, rate: 1.6, volume: 1.0, pause: 1000, color: '#ffccaa', prefix: "Mother: " },
            { text: "I... I didn’t hear anything. Stay close to me.", type: 'father', pitch: 0.8, rate: 1.3, pause: 2000, color: '#aaaaff', prefix: "Father: " },
            { text: "You don’t belong...", type: 'ghost', pitch: 0.01, rate: 0.4, pause: 500, color: '#888888', prefix: "Unknown: " },
            { text: "It wants us to leave! PLEASE!", type: 'child', pitch: 2.0, rate: 1.6, volume: 1.0, pause: 1500, color: '#ffff00', prefix: "Child: " },
            { text: "SOMEONE IS INSIDE THIS HOUSE!!", type: 'mother', pitch: 1.7, rate: 1.5, volume: 1.0, pause: 1000, color: '#ffccaa', prefix: "Mother: " }
        ]
    },
    hi: {
        landingTitle: "वारेन ओकल्ट म्यूजियम",
        landingWarning: "चेतावनी: दर्शक विवेक की सलाह दी जाती है।",
        landingSubwarning: "लाइव फीड में असाधारण गतिविधि शामिल है।",
        loading: ["कनेक्ट हो रहा है...", "आवाहन...", "पीछे मत देखो", "वे यहाँ हैं"],
        warning: "चेतावनी: अत्यधिक डरावनी सामग्री",
        start: "हिम्मत है तो प्रवेश करें",
        cam: "कैमरा ०४: आर्टिफैक्ट रूम",
        spiritBox: ["मैं तुम्हें देख रहा हूँ...", "पीछे मुड़ो...", "मुझे अंदर आने दो...", "भागो...", "छुपा लो..."],
        jumpscare: "तुम्हें ढूँढ लिया",
        episodeTitle: "एपिसोड १",
        episodeSubtitle: "वो घर जो सांस लेता है",
        finalMessage: "बुरा सपना अभी शुरू हुआ है...",
        finalSubmessage: "सुबह के लिए प्रार्थना करें।",
        script: [
            { text: "यहाँ धूल की गंध आ रही है... और कुछ सड़ा हुआ।", type: 'mother', pitch: 1.1, rate: 0.7, pause: 2500, color: '#ffccaa', prefix: "माँ: " },
            { text: "यह सालों से खाली है। बस इतना ही है।", type: 'father', pitch: 0.6, rate: 0.8, pause: 2000, color: '#aaaaff', prefix: "पिता: " },
            { text: "पापा? यहाँ इतनी ठंड क्यों है?", type: 'child', pitch: 1.8, rate: 0.9, volume: 1.0, pause: 2000, color: '#ffff00', prefix: "बच्चा: " },
            { text: "कोई खिड़की नहीं खुली है... मैंने चेक किया था।", type: 'mother', pitch: 1.3, rate: 0.8, volume: 0.9, pause: 1500, color: '#ffccaa', prefix: "माँ: " },
            { text: "क्या घर अभी हिला?!", type: 'child', pitch: 1.9, rate: 1.0, volume: 1.0, pause: 2000, color: '#ffff00', prefix: "बच्चा: " },
            { text: "यह बस... पुरानी लकड़ी है। शांत हो जाओ।", type: 'father', pitch: 0.7, rate: 0.7, pause: 2500, color: '#aaaaff', prefix: "पिता: " },
            { text: "जाओ...", type: 'ghost', pitch: 0.01, rate: 0.2, volume: 1.0, pause: 1500, color: '#888888', prefix: "अज्ञात: " },
            { text: "क्या तुमने वह आवाज़ सुनी?! किसने कहा?!", type: 'mother', pitch: 1.5, rate: 0.9, volume: 1.0, pause: 1500, color: '#ffccaa', prefix: "माँ: " },
            { text: "मैंने... मैंने कुछ नहीं सुना। मेरे पास रहो।", type: 'father', pitch: 0.8, rate: 0.8, pause: 2500, color: '#aaaaff', prefix: "पिता: " },
            { text: "तुम यहाँ के नहीं हो...", type: 'ghost', pitch: 0.01, rate: 0.3, pause: 1000, color: '#888888', prefix: "अज्ञात: " },
            { text: "वह चाहता है कि हम चले जाएँ! कृपया!", type: 'child', pitch: 1.9, rate: 1.0, volume: 1.0, pause: 2000, color: '#ffff00', prefix: "बच्चा: " },
            { text: "इस घर में कोई है!!", type: 'mother', pitch: 1.6, rate: 1.0, volume: 1.0, pause: 1500, color: '#ffccaa', prefix: "माँ: " }
        ]
    },
    te: {
        landingTitle: "వారెన్ క్షుద్ర మ్యూజియం",
        landingWarning: "హెచ్చరిక: వీక్షకుల విచక్షణ సూచించబడింది.",
        landingSubwarning: "లైవ్ ఫీడ్‌లో పారానార్మల్ యాక్టివిటీ ఉంది.",
        loading: ["కనెక్ట్ అవుతోంది...", "పిలుస్తోంది...", "వెనక్కి చూడకు", "వాళ్ళు ఇక్కడే ఉన్నారు"],
        warning: "హెచ్చరిక: అత్యంత భయానక కంటెంట్",
        start: "ధైర్యం ఉంటే ప్రవేశించండి",
        cam: "యామ్ 04: ఆర్టిఫాక్ట్ రూమ్",
        spiritBox: ["నేను నిన్ను చూస్తున్నాను...", "వెనక్కి తిరుగు...", "నన్ను లోపలికి రానివ్వండి...", "పరుగెత్తు...", "దాక్కో..."],
        jumpscare: "నిన్ను కనుగొన్నాను",
        episodeTitle: "ఎపిసోడ్ 1",
        episodeSubtitle: "ఊపిరి పీల్చుకునే ఇల్లు",
        finalMessage: "పీడకల ఇప్పుడే మొదలైంది...",
        finalSubmessage: "ఉదయం కోసం ప్రార్థించండి.",
        script: [
            { text: "ఈ ప్రదేశం దుమ్ము వాసన వస్తోంది... మరియు ఏదో కుళ్ళిన వాసన.", type: 'mother', pitch: 1.1, rate: 0.7, pause: 2500, color: '#ffccaa', prefix: "తల్లి: " },
            { text: "ఇది ఏళ్లుగా ఖాళీగా ఉంది. అంతే.", type: 'father', pitch: 0.6, rate: 0.8, pause: 2000, color: '#aaaaff', prefix: "తండ్రి: " },
            { text: "నాన్నా? ఇక్కడ ఎందుకు ఇంత చల్లగా ఉంది?", type: 'child', pitch: 1.8, rate: 0.9, volume: 1.0, pause: 2000, color: '#ffff00', prefix: "పిల్లవాడు: " },
            { text: "కిటికీలు ఏవీ తెరవలేదు... నేను చూశాను.", type: 'mother', pitch: 1.3, rate: 0.8, volume: 0.9, pause: 1500, color: '#ffccaa', prefix: "తల్లి: " },
            { text: "ఇల్లు కదిలిందా?!", type: 'child', pitch: 1.9, rate: 1.0, volume: 1.0, pause: 2000, color: '#ffff00', prefix: "పిల్లవాడు: " },
            { text: "ఇది కేవలం... పాత చెక్క. శాంతించు.", type: 'father', pitch: 0.7, rate: 0.7, pause: 2500, color: '#aaaaff', prefix: "తండ్రి: " },
            { text: "వెళ్ళండి...", type: 'ghost', pitch: 0.01, rate: 0.2, volume: 1.0, pause: 1500, color: '#888888', prefix: "తెలియదు: " },
            { text: "ఆ స్వరం విన్నారా?! ఎవరు చెప్పారు?!", type: 'mother', pitch: 1.5, rate: 0.9, volume: 1.0, pause: 1500, color: '#ffccaa', prefix: "తల్లి: " },
            { text: "నేను... నాకేమీ వినిపించలేదు. నా దగ్గరే ఉండు.", type: 'father', pitch: 0.8, rate: 0.8, pause: 2500, color: '#aaaaff', prefix: "తండ్రి: " },
            { text: "మీరు ఇక్కడికి సంబంధించిన వారు కాదు...", type: 'ghost', pitch: 0.01, rate: 0.3, pause: 1000, color: '#888888', prefix: "తెలియదు: " },
            { text: "మనం వెళ్లిపోవాలని ఆశిస్తోంది! దయచేసి!", type: 'child', pitch: 1.9, rate: 1.0, volume: 1.0, pause: 2000, color: '#ffff00', prefix: "పిల్లవాడు: " },
            { text: "ఈ ఇంట్లో ఎవరో ఉన్నారు!!", type: 'mother', pitch: 1.6, rate: 1.0, volume: 1.0, pause: 1500, color: '#ffccaa', prefix: "తల్లి: " }
        ]
    }
};

// Text-to-Speech Engine
class VoiceEngine {
    constructor() {
        try {
            this.synth = window.speechSynthesis;
            if (!this.synth) throw new Error("SpeechSynthesis not supported");
        } catch (e) {
            console.warn("VoiceEngine: Speech Synthesis unavailable. Using Mock.", e);
            this.synth = {
                getVoices: () => [],
                speak: () => { },
                cancel: () => { },
                speaking: false,
                onvoiceschanged: null
            };
        }

        this.voices = [];
        this.currentUtterance = null; // Prevent GC
        this.voicesLoaded = false;

        // Try loading immediately
        this.loadVoices();

        // Fallback/Listener
        if (this.synth.onvoiceschanged !== undefined) {
            this.synth.onvoiceschanged = () => this.loadVoices();
        }
    }

    loadVoices() {
        const voices = this.synth.getVoices();
        if (voices.length > 0) {
            this.voices = voices;
            this.voicesLoaded = true;
            console.log(`VoiceEngine: Loaded ${voices.length} voices.`);
        }
    }

    waitForVoices() {
        return new Promise((resolve) => {
            if (this.voicesLoaded) {
                resolve();
            } else {
                // Check if they are already there but event didn't fire
                this.loadVoices();
                if (this.voicesLoaded) {
                    resolve();
                    return;
                }

                console.log("VoiceEngine: Waiting for voices...");
                const checkInterval = setInterval(() => {
                    this.loadVoices();
                    if (this.voicesLoaded) {
                        clearInterval(checkInterval);
                        resolve();
                    }
                }, 50);

                // ULTRA FAST FALLBACK (100ms) - Don't block UI for audio
                setTimeout(() => {
                    clearInterval(checkInterval);
                    console.warn("VoiceEngine: Proceeding without waiting for full voice list.");
                    resolve();
                }, 100);
            }
        });
    }

    unlock() {
        if (!window.SpeechSynthesisUtterance) return;
        if (this.synth.speaking) this.synth.cancel();
        // Play a silent utterance to unlock the engine (iOS/Chrome requirement)
        const utter = new SpeechSynthesisUtterance(" ");
        utter.volume = 0;
        utter.rate = 2.0;
        this.synth.speak(utter);
        console.log("[VoiceEngine] Unlocking speech synthesis...");
    }

    speak(text, lang, type = 'demon', params = {}, onEnd = null) {
        if (!window.SpeechSynthesisUtterance) {
            if (onEnd) onEnd();
            return;
        }

        if (this.synth.speaking) this.synth.cancel();

        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = lang; // Set the language

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

        // GLOBAL RATE REDUCTION FOR NON-ENGLISH
        if (lang !== 'en') {
            utter.rate = utter.rate * 0.8; // Slow down everything by 20% for local languages
        }

        // Select Voice
        const voices = window.speechSynthesis.getVoices();
        let voice = null;
        const langCode = lang.split('-')[0];
        const langVoices = voices.filter(v => v.lang.toLowerCase().startsWith(langCode));
        const pool = langVoices.length > 0 ? langVoices : voices;

        const findVoice = (keywords) => {
            return pool.find(v => keywords.some(k => v.name.toLowerCase().includes(k.toLowerCase())));
        };

        if (type === 'child' || type === 'mother' || type === 'ghost') {
            voice = findVoice(['Zira', 'Eva', 'Sara', 'Female', 'Google US English', 'Samantha', 'Hindi Female', 'Telugu Female']);
        } else {
            voice = findVoice(['David', 'Mark', 'Male', 'Google UK English Male', 'Hindi Male', 'Telugu Male']);
        }

        if (!voice && pool.length > 0) voice = pool[0];
        if (!voice && voices.length > 0) voice = voices[0];
        if (voice) utter.voice = voice;

        this.currentUtterance = utter;

        // --- SMART RACE TIMING (Best of both worlds) ---
        // 1. Calculate MINIMUM duration (to prevent instant skipping)
        // 2. Calculate MAXIMUM duration (to prevent hanging)
        // 3. Listen for natural 'onend' but enforce constraints

        let baseCharTime = 100; // Faster base for improved flow
        if (lang === 'hi' || lang === 'te') baseCharTime = 180;

        const speedFactor = (1 / (utter.rate || 1));
        const minDuration = Math.max(1000, (text.length * 50 * speedFactor)); // Minimum 50ms per char
        const maxDuration = Math.max(2000, (text.length * baseCharTime * speedFactor) + 2000); // Failsafe

        console.log(`[VoiceEngine] Speaking "${text.substring(0, 15)}...". Min: ${minDuration}ms, Max: ${maxDuration}ms`);

        // Duck Audio
        if (window.engine && window.engine.tapeDeck) window.engine.tapeDeck.duck(true);

        let completed = false;
        const startTime = Date.now();

        const complete = () => {
            if (completed) return;
            completed = true;

            // Restore Audio
            if (window.engine && window.engine.tapeDeck) window.engine.tapeDeck.duck(false);

            this.currentUtterance = null;
            if (onEnd) onEnd();
        };

        // 1. Natural End Trigger
        utter.onend = () => {
            const elapsed = Date.now() - startTime;
            if (elapsed < minDuration) {
                // Too fast! Wait out the remainder of minDuration
                setTimeout(complete, minDuration - elapsed);
            } else {
                complete();
            }
        };

        utter.onerror = (e) => {
            console.warn("TTS Error, forcing complete");
            complete();
        };

        // 2. Failsafe Timeout (Max Duration)
        setTimeout(() => {
            if (!completed) {
                console.warn("TTS Timed out (Failsafe triggered)");
                this.synth.cancel(); // Force stop
                complete();
            }
        }, maxDuration);

        // Delay speech slightly to ensure playback
        setTimeout(() => {
            try {
                this.synth.speak(utter);
            } catch (e) {
                console.error("Speech Interrupted", e);
                complete();
            }
        }, 50);
    }

    speakSequence(lines, lang = 'en', onComplete) {
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

            this.speak(line.text, lang, line.type, params, () => {
                if (line.onEnd) line.onEnd();
                setTimeout(next, line.pause || 500);
            });
        };
        next();
    }
}

class TapeDeck {
    constructor() {
        this.ctx = null; // Lazy load
        this.masterGain = null;
        this.activeNodes = [];
        this.unlocked = false;
    }

    init() {
        if (this.ctx) return;

        // Helper for Mock AudioParam (Used in both Polyfill & Full Mock)
        const getMockParam = () => ({
            value: 0,
            setValueAtTime: () => { },
            linearRampToValueAtTime: () => { },
            exponentialRampToValueAtTime: () => { },
            cancelScheduledValues: () => { },
            setTargetAtTime: () => { }
        });

        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) throw new Error("AudioContext not supported");
            this.ctx = new AudioCtx();
            this.masterGain = this.ctx.createGain();
            this.masterGain.connect(this.ctx.destination);

            // POLYFILL: createStereoPanner for older browsers
            if (!this.ctx.createStereoPanner) {
                console.warn("TapeDeck: Polyfilling createStereoPanner");
                this.ctx.createStereoPanner = () => {
                    const panner = this.ctx.createGain(); // Fallback to gain (mono)
                    panner.pan = getMockParam(); // Add fake pan param
                    return panner;
                };
            }

            // LOWER DEFAULT VOLUME FOR BETTER BALANCE
            this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        } catch (e) {
            console.warn("TapeDeck: AudioContext init failed. Using Mock.", e);

            // Complete Mock Context
            this.ctx = {
                state: 'suspended',
                resume: () => Promise.resolve(),
                createGain: () => ({ gain: getMockParam(), connect: () => { } }),
                createBuffer: () => ({ getChannelData: () => [] }),
                createBufferSource: () => ({
                    connect: () => { }, start: () => { }, stop: () => { }, disconnect: () => { },
                    buffer: null, loop: false, playbackRate: getMockParam()
                }),
                createBiquadFilter: () => ({
                    connect: () => { }, frequency: getMockParam(), Q: getMockParam(), type: 'lowpass'
                }),
                createOscillator: () => ({
                    connect: () => { }, start: () => { }, stop: () => { },
                    frequency: getMockParam(), detune: getMockParam(), type: 'sine'
                }),
                createStereoPanner: () => ({ connect: () => { }, pan: getMockParam() }),
                destination: {},
                currentTime: 0,
                sampleRate: 44100
            };
            this.masterGain = this.ctx.createGain();
        }
    }

    resume() {
        this.init(); // Ensure context exists

        if (this.ctx.state === 'suspended') {
            this.ctx.resume().then(() => {
                console.log("AudioContext resumed successfully.");
            });
        }

        // Force unlock for mobile/strict browsers
        if (!this.unlocked) {
            // Play silent buffer
            const buffer = this.ctx.createBuffer(1, 1, 22050);
            const source = this.ctx.createBufferSource();
            source.buffer = buffer;
            source.connect(this.ctx.destination);
            source.start(0);
            console.log("AudioContext forced unlock (silent buffer played).");
            this.unlocked = true;
        }
    }

    // DUCK AUDIO (Lower volume when speaking)
    duck(active) {
        if (!this.ctx || !this.masterGain) return;

        const now = this.ctx.currentTime;
        const target = active ? 0.1 : 0.3; // Drop to 0.1 during speech, return to 0.3

        this.masterGain.gain.cancelScheduledValues(now);
        this.masterGain.gain.setTargetAtTime(target, now, 0.5); // Smooth transition
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

    // 9. Presence (Cold Wind + Dissonant Hum)
    playPresence() {
        // Layer 1: Low Wind (Pink Noise)
        const noise = this.ctx.createBufferSource();
        noise.buffer = this.createNoise(10); // Longer buffer for less repetition
        noise.loop = true;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(100, this.ctx.currentTime);
        filter.frequency.linearRampToValueAtTime(60, this.ctx.currentTime + 10); // Slow movement

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.value = 0.4;

        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(this.masterGain);
        noise.start();

        // Layer 2: The "Ghost" Drone (Dissonant Cluster)
        const createDrone = (freq, detune) => {
            const osc = this.ctx.createOscillator();
            osc.type = 'triangle';
            osc.frequency.value = freq;
            osc.detune.value = detune; // Detuned for uneasiness
            const g = this.ctx.createGain();
            g.gain.value = 0.05; // Very subtle

            // LFO for volume pulsing
            const lfo = this.ctx.createOscillator();
            lfo.type = 'sine';
            lfo.frequency.value = 0.1 + Math.random() * 0.2; // Slow pulse
            const lfoGain = this.ctx.createGain();
            lfoGain.gain.value = 0.02;

            osc.connect(g);
            lfo.connect(g.gain);
            g.connect(this.masterGain);
            osc.start();
            lfo.start();
            this.activeNodes.push(osc, lfo, g);
        };

        // Tritone Cluster (Scary interval)
        createDrone(55, 0);   // A1
        createDrone(77.78, 10); // D#2 (Tritone) -> The "Devil's Interval"
        createDrone(55, 1200); // A2 (Octave)

        this.activeNodes.push(noise, noiseGain);
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

    // 11. Banshee Scream (Sudden, High Pitch, Traumatizing)
    playBansheeScream() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const t = this.ctx.currentTime;

        // Ensure volume is UP
        const master = this.masterGain.gain.value;
        this.masterGain.gain.setValueAtTime(1.0, t); // FORCE LOUD

        // 3 Layers of Screams
        for (let i = 0; i < 3; i++) {
            const osc = this.ctx.createOscillator();
            osc.type = i % 2 === 0 ? 'sawtooth' : 'square';
            // High pitch random start
            osc.frequency.setValueAtTime(800 + Math.random() * 500, t);
            // Slide UP rapidly (scream) then slightly down
            osc.frequency.exponentialRampToValueAtTime(1500 + Math.random() * 1000, t + 0.1);
            osc.frequency.exponentialRampToValueAtTime(1000, t + 1.5); // Sustain

            osc.detune.value = (Math.random() - 0.5) * 1000; // Heavy dissonance

            const g = this.ctx.createGain();
            g.gain.setValueAtTime(0, t);
            g.gain.linearRampToValueAtTime(0.8, t + 0.05); // Attack fast
            g.gain.exponentialRampToValueAtTime(0.01, t + 1.5); // Decay

            // Add LFO for "Tremolo" (Shaking voice)
            const lfo = this.ctx.createOscillator();
            lfo.type = 'sine';
            lfo.frequency.value = 15 + Math.random() * 10;
            const lfoGain = this.ctx.createGain();
            lfoGain.gain.value = 500; // Frequency modulation depth
            lfo.connect(lfoGain);
            lfoGain.connect(osc.frequency);

            osc.connect(g);
            g.connect(this.masterGain);

            osc.start(t);
            lfo.start(t);
            osc.stop(t + 1.5);
            lfo.stop(t + 1.5);
        }

        // Restore master volume after scream
        setTimeout(() => {
            this.masterGain.gain.linearRampToValueAtTime(master, this.ctx.currentTime + 1);
        }, 1500);
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
    playPossession() {
        // Deep, distorted throat singing simulation (Enhanced)
        const t = this.ctx.currentTime;

        // 1. Throat Drone (Sawtooth with Low Pass)
        const osc = this.ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(60, t);
        osc.frequency.linearRampToValueAtTime(40, t + 2);
        osc.frequency.setValueAtTime(55, t); // A1
        osc.frequency.linearRampToValueAtTime(45, t + 3); // Slow drop

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, t);
        filter.Q.value = 10;
        filter.frequency.setValueAtTime(300, t);
        filter.Q.value = 5;

        // LFO for "Throat" texture (Guttural movement)
        const lfo = this.ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = 8; // 8Hz flutter
        const lfoGain = this.ctx.createGain();
        lfoGain.gain.value = 100; // Filter modulation depth

        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.4, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 2.5);
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.6, t + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 4.0);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start(t);
        osc.stop(t + 2.5);
        lfo.start(t);
        osc.stop(t + 4.0);
        lfo.stop(t + 4.0);

        // 2. Sub-Bass Rumble
        const sub = this.ctx.createOscillator();
        sub.type = 'sine';
        sub.frequency.setValueAtTime(30, t);
        const subGain = this.ctx.createGain();
        subGain.gain.setValueAtTime(0.4, t);
        subGain.gain.linearRampToValueAtTime(0, t + 4.0);

        sub.connect(subGain);
        subGain.connect(this.masterGain);
        sub.start(t);
        sub.stop(t + 4.0);
    }

    playExorcism() {
        // High pitched screetch (Latin chanting simulation)
        // "Choir of the Damned" - Multiple dissonant screeches
        const t = this.ctx.currentTime;
        const count = 3;

        // Ring Mod (Conceptual - simpler implementation for stability)
        // multiple layers

        for (let i = 0; i < count; i++) {
            const osc = this.ctx.createOscillator();
            osc.type = i % 2 === 0 ? 'sawtooth' : 'square';
            const startFreq = 800 + (Math.random() * 500);
            osc.frequency.setValueAtTime(startFreq, t);

            // Erratic pitch movement
            osc.frequency.exponentialRampToValueAtTime(startFreq + 200, t + 0.1);
            osc.frequency.exponentialRampToValueAtTime(startFreq - 100, t + 0.3);
            osc.frequency.linearRampToValueAtTime(startFreq + 300 * (i + 1), t + 1.5);

            const gain = this.ctx.createGain();
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.3 / count, t + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.01, t + 1.5);

            // Pan spread
            const panner = this.ctx.createStereoPanner();
            panner.pan.value = (Math.random() * 2) - 1;

            osc.connect(gain);
            gain.connect(panner);
            panner.connect(this.masterGain);

            osc.start(t);
            osc.stop(t + 1.5);
        }
    }
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



    startMonitoring() {
        this.uiLayer.classList.remove('hidden');
        document.querySelector('.monitor-overlay').style.display = 'flex'; // Show HUD explicitly

        // GLOBAL AUDIO UNLOCK (Catch-all for mobile)
        const unlockAudio = () => {
            if (this.tapeDeck) this.tapeDeck.resume();
            if (this.voiceEngine) this.voiceEngine.unlock();
            document.body.removeEventListener('touchstart', unlockAudio);
            document.body.removeEventListener('click', unlockAudio);
            document.body.removeEventListener('keydown', unlockAudio);
        };
        document.body.addEventListener('touchstart', unlockAudio, { once: true });
        document.body.addEventListener('click', unlockAudio, { once: true });
        document.body.addEventListener('keydown', unlockAudio, { once: true });

        // Show CCTV Feed
        this.canvas.classList.add('visible');
        this.isVideoActive = true;
        this.renderFeed();

        // SUDDEN SCREAM AT START (Trauma Init)
        setTimeout(() => {
            if (this.tapeDeck) this.tapeDeck.playBansheeScream();
            // Flash red for impact
            document.body.style.backgroundColor = '#500';
            setTimeout(() => document.body.style.backgroundColor = '', 100);
        }, 1500); // 1.5s delay to catch them off guard

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
                // Apply "Cursed Portrait" Styles (Random per frame for glitch)
                const rand = Math.random();
                if (rand > 0.98) {
                    this.ctx.filter = 'contrast(2.0) saturate(0) invert(1)'; // Deep Fried
                } else if (rand > 0.95) {
                    this.ctx.filter = 'sepia(0.8) contrast(1.2) brightness(0.8)'; // Old Photo
                } else if (rand > 0.92) {
                    this.ctx.filter = 'blur(2px) opacity(0.8)'; // Ghostly
                } else {
                    this.ctx.filter = 'contrast(1.1) brightness(0.9)'; // Standard Grim
                }

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
                    this.ctx.filter = 'none'; // Reset to prevent bleeding into next frame

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
        console.log(`[Flow] setLang called with: ${lang}`);
        if (!CONFIG.languages.includes(lang)) return;

        // CRITICAL: Unlock Audio Context & TTS on User Gesture
        try {
            this.tapeDeck.resume();
            this.voiceEngine.unlock();
        } catch (e) {
            console.warn("Audio unlock failed (proceeding anyway):", e);
        }

        this.currentLang = lang;
        console.log(`[Flow] Language confirmed: ${lang}`);

        // 1. UPDATE UI IMMEDIATELY (Visuals First)
        const texts = I18N[this.currentLang];
        if (!texts) {
            console.error("[Critical] Missing Translation Texts!");
            return;
        }

        // Landing Page
        const landingTitle = document.getElementById('landing-title');
        const landingWarning = document.getElementById('landing-warning');
        const landingSub = document.getElementById('landing-subwarning');

        if (landingTitle) landingTitle.innerText = texts.landingTitle;
        if (landingWarning) landingWarning.innerText = texts.landingWarning;
        if (landingSub) landingSub.innerText = texts.landingSubwarning;

        // Cinematic Title Updates (Force update)
        const epTitle = document.querySelector('#episode-title h1');
        const epSubTitle = document.querySelector('#episode-title h2');
        if (epTitle) {
            epTitle.innerText = texts.episodeTitle;
            epTitle.setAttribute('data-text', texts.episodeTitle);
        }
        if (epSubTitle) epSubTitle.innerText = texts.episodeSubtitle;

        // Final Message Updates (Force update)
        const finMsg = document.querySelector('#final-message h1');
        const finSub = document.querySelector('#final-message p');
        if (finMsg) {
            finMsg.innerText = texts.finalMessage;
            finMsg.setAttribute('data-text', texts.finalMessage);
        }
        if (finSub) finSub.innerText = texts.finalSubmessage;

        // Loading Screen Update - Random Selection
        const loadingText = document.getElementById('loading-text');
        if (loadingText && texts.loading) {
            const randomLoading = texts.loading[Math.floor(Math.random() * texts.loading.length)];
            loadingText.innerText = randomLoading;
        }

        // 2. TRIGGER START SEQUENCE IMMEDIATELY
        const landing = document.getElementById('landing-page');

        // RELAXED CHECK: If landing page exists, we start. 
        // We assume if the user clicked the button, it was visible.
        if (landing) {
            console.log("[Flow] User started from landing page. Initiating sequence.");

            // Inject Cinematic Effects
            if (!document.querySelector('.film-grain')) {
                const grain = document.createElement('div');
                grain.className = 'film-grain';
                document.body.appendChild(grain);
            }
            if (!document.querySelector('.vignette')) {
                const vignette = document.createElement('div');
                vignette.className = 'vignette';
                document.body.appendChild(vignette);
            }

            // Audio Resume
            try { this.tapeDeck.resume(); } catch (e) { }

            // Start Sequence directly
            this.startSequence();
        }

        // 3. LOAD AUDIO ASYNC (Best Effort)
        this.voiceEngine.waitForVoices().then(() => {
            console.log(`[Flow] Audio engine ready for ${lang}`);
        });
    }

    startSequence() {
        document.getElementById('landing-page').classList.add('hidden');

        // 1. Show Episode Title (Cinematic)
        const title = document.getElementById('episode-title');
        title.classList.remove('hidden'); // Fix strict CSS override
        title.classList.add('visible');
        title.style.display = 'flex'; // Ensure flex

        // Play Intro Audio
        this.tapeDeck.playScenario(1); // Haunted House

        // SAFETY TIMEOUT: Ensure we never get stuck on loading screen
        setTimeout(() => {
            if (!this.isVideoActive) {
                console.warn("Script: Force starting monitoring (Safety Timeout)");
                document.getElementById('loading-screen').classList.add('hidden');
                this.startMonitoring();
            }
        }, 8000);

        // 2. Transition to Loading Screen after title
        setTimeout(() => {
            title.classList.remove('visible');
            setTimeout(() => title.style.display = 'none', 2000); // Hide after fade out

            document.getElementById('loading-screen').classList.remove('hidden');

            // 3. Simulate Loading -> Start Feed
            setTimeout(() => {
                document.getElementById('loading-screen').classList.add('hidden');
                this.startMonitoring();
            }, 3000);
        }, 4000); // 4 seconds of title display
    }

    triggerConversation() {
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

        const rawScript = I18N[this.currentLang].script;

        // Map raw script to execution script with callbacks
        const script = rawScript.map((line, index) => {
            const item = { ...line };

            // Assign specific callbacks based on index/context (Re-mapping logic)
            // This preserves the original "Director" logic while using translated text

            if (index === 0) { // Mother: Smells like dust
                item.onStart = () => {
                    setScene("⚠ EXT. FARMHOUSE - DUSK ⚠", 'farmhouse-filter', 'bg-farmhouse');
                    this.tapeDeck.resume();
                    this.tapeDeck.playPresence();
                    if (subUI) { subUI.innerText = line.prefix + line.text; subUI.classList.add('visible'); subUI.style.color = line.color; }
                };
                item.onEnd = () => { if (subUI) subUI.classList.remove('visible'); };
            }
            else if (index === 1) { // Father: Empty for years
                item.onStart = () => {
                    if (subUI) { subUI.innerText = line.prefix + line.text; subUI.classList.add('visible'); subUI.style.color = line.color; }
                };
                item.onEnd = () => { if (subUI) subUI.classList.remove('visible'); };
            }
            else if (index === 2) { // Child: Cold
                item.onStart = () => {
                    setScene("⚠ INT. HALLWAY - NIGHT ⚠", 'farmhouse-filter', 'bg-hallway');
                    canvas.classList.add('shake-slow');
                    if (subUI) { subUI.innerText = line.prefix + line.text; subUI.classList.add('visible'); subUI.style.color = line.color; }
                };
                item.onEnd = () => { if (subUI) subUI.classList.remove('visible'); this.triggerParanormalEvent(); };
            }
            else if (index === 3) { // Mother: No windows open
                item.onStart = () => {
                    if (subUI) { subUI.innerText = line.prefix + line.text; subUI.classList.add('visible'); subUI.style.color = line.color; }
                };
                item.onEnd = () => { if (subUI) subUI.classList.remove('visible'); this.tapeDeck.playCreak(); };
            }
            else if (index === 4) { // Child: House move
                item.onStart = () => {
                    canvas.classList.add('shake-slow');
                    this.tapeDeck.playScenario(4); // Footsteps
                    if (subUI) { subUI.innerText = line.prefix + line.text; subUI.classList.add('visible'); subUI.style.color = line.color; }
                };
                item.onEnd = () => { if (subUI) subUI.classList.remove('visible'); this.triggerParanormalEvent(); };
            }
            else if (index === 5) { // Father: Wood settling
                item.onStart = () => {
                    this.tapeDeck.playCreak();
                    if (subUI) { subUI.innerText = line.prefix + line.text; subUI.classList.add('visible'); subUI.style.color = line.color; }
                };
                item.onEnd = () => { if (subUI) subUI.classList.remove('visible'); };
            }
            else if (index === 6) { // Ghost: Goooo...
                item.onStart = () => {
                    setScene("⚠ UNKNOWN FREQUENCY ⚠", 'invert', 'bg-hallway');
                    this.tapeDeck.playScenario(8); // Whisper
                    this.tapeDeck.playScenario(9); // Presence
                    if (subUI) { subUI.innerText = line.prefix + line.text; subUI.classList.add('visible'); subUI.style.color = line.color; subUI.style.fontSize = '2rem'; }
                };
                item.onEnd = () => {
                    setTimeout(() => canvas.classList.remove('invert'), 500);
                    if (subUI) { subUI.classList.remove('visible'); subUI.style.fontSize = ''; }
                };
            }
            else if (index === 7) { // Mother: Did you hear that
                item.onStart = () => {
                    this.tapeDeck.playScenario(2); // Clapping
                    if (subUI) { subUI.innerText = line.prefix + line.text; subUI.classList.add('visible'); subUI.style.color = line.color; }
                };
                item.onEnd = () => { if (subUI) subUI.classList.remove('visible'); };
            }
            else if (index === 8) { // Father: Didn't hear anything
                item.onStart = () => {
                    canvas.classList.add('glitch');
                    if (subUI) { subUI.innerText = line.prefix + line.text; subUI.classList.add('visible'); subUI.style.color = line.color; }
                };
                item.onEnd = () => { canvas.classList.remove('glitch'); if (subUI) subUI.classList.remove('visible'); };
            }
            else if (index === 9) { // Ghost: Don't belong
                item.onStart = () => {
                    setScene("⚠ SIGNAL INTRUSION ⚠", 'glitch-heavy', 'bg-hallway');
                    this.tapeDeck.playScenario(5); // Demon Reveal
                    if (subUI) { subUI.innerText = line.prefix + line.text; subUI.classList.add('visible'); subUI.style.color = line.color; }
                };
                item.onEnd = () => {
                    canvas.classList.remove('glitch-heavy');
                    if (subUI) subUI.classList.remove('visible');
                    this.tapeDeck.playDoorSlam();
                };
            }
            else if (index === 10) { // Child: Wants us to leave
                item.onStart = () => {
                    if (subUI) { subUI.innerText = line.prefix + line.text; subUI.classList.add('visible'); subUI.style.color = line.color; }
                };
                item.onEnd = () => { if (subUI) subUI.classList.remove('visible'); };
            }
            else if (index === 11) { // Mother: Someone inside
                item.onStart = () => {
                    if (subUI) { subUI.innerText = line.prefix + line.text; subUI.classList.add('visible'); subUI.style.color = line.color; }
                };
                item.onEnd = () => {
                    if (subUI) subUI.classList.remove('visible');
                    document.body.className = '';
                    this.triggerJumpscare();
                };
            }

            return item;
        });

        console.log("Starting Episode 1...");
        // Pass currentLang to speakSequence so it knows which voice/accent to try to use
        this.voiceEngine.speakSequence(script, this.currentLang, () => {
            console.log("Episode Ended. Terminating session in 10s...");
            setTimeout(() => {
                this.terminateSession();
            }, 10000);
        });
    }

    terminateSession() {
        console.log("Terminating Session...");

        // Cut Audio/Visuals
        this.tapeDeck.suspend(); // Stop all current sounds
        this.scareActive = false;
        this.isVideoActive = false;

        // Hide Monitor Overlay (keep UI layer active for final message)
        const monitor = document.querySelector('.monitor-overlay');
        if (monitor) monitor.style.display = 'none';

        if (this.canvas) this.canvas.classList.remove('visible');

        // Hide any active subtitles
        const subUI = document.getElementById('subtitles');
        if (subUI) subUI.classList.remove('visible');

        // Show Final Message with 3D Effect
        const finalMsg = document.getElementById('final-message');
        if (finalMsg) {
            console.log("[Flow] Showing Final Message...");
            finalMsg.classList.remove('hidden');
            finalMsg.classList.add('visible');

            // FORCE visibility
            finalMsg.style.cssText = "display: flex !important; opacity: 1 !important; z-index: 10000 !important;";

            // Ensure data-text is set if not already (English fallback)
            const h1 = finalMsg.querySelector('h1');
            if (h1 && !h1.getAttribute('data-text')) {
                h1.setAttribute('data-text', h1.innerText);
            }
        } else {
            // Fallback if HTML is missing
            document.body.innerHTML = '';
            document.body.style.backgroundColor = 'black';
            document.body.style.cursor = 'none';

            const container = document.createElement('div');
            container.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:#000; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;";

            const h1 = document.createElement('h1');
            h1.innerText = "THE NIGHTMARE HAS ONLY BEGUN...";
            h1.style.cssText = "font-family: 'Creepster', cursive; font-size: 3rem; color: #cc0000; text-shadow: 2px 2px #000; letter-spacing: 5px; margin-bottom: 20px;";

            const p = document.createElement('p');
            p.innerText = "PRAY FOR THE DAWN.";
            p.style.cssText = "font-size: 1.5rem; color: #666; font-family: 'Courier New';";

            container.appendChild(h1);
            container.appendChild(p);
            document.body.appendChild(container);
        }
    }

    triggerJumpscare() {
        // Stop normal feed
        this.isVideoActive = false;

        // VISUALS
        this.canvas.classList.add('visible');
        this.scareActive = true;

        // AUDIO (Demon Reveal + Screech)
        this.tapeDeck.playDemonReveal();
        this.tapeDeck.playBansheeScream(); // SUDDEN END SCREAM
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
