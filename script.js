// Core Configuration
const CONFIG = {
    totalImages: 28,
    debugMode: false,
    languages: ["en", "hi", "te"],
    defaultLang: "en",
};

// Localization Dictionary
const I18N = {
    en: {
        landingTitle: "WARREN OCCULT MUSEUM",
        landingWarning: "WARNING: Viewer discretion is advised.",
        landingSubwarning: "Live feed contains paranormal activity.",
        loading: [
            "CONNECTING...",
            "SUMMONING...",
            "DO NOT LOOK BEHIND YOU",
            "THEY ARE HERE",
        ],
        warning: "WARNING: EXTREME HORROR CONTENT",
        start: "ENTER IF YOU DARE",
        cam: "CAM 04: ARTIFACT ROOM",
        spiritBox: [
            "I see you...",
            "Turn around...",
            "Let me in...",
            "Run...",
            "Hide...",
        ],
        jumpscare: "FOUND YOU",
        episodeTitle: "EPISODE 1",
        episodeSubtitle: "THE HOUSE THAT BREATHES",
        finalMessage: "THE NIGHTMARE HAS ONLY BEGUN...",
        finalSubmessage: "PRAY FOR THE DAWN.",
        script: [
            {
                text: "This place smells like... dust. And something rotten.",
                type: "mother",
                pitch: 1.2,
                rate: 0.8,
                pause: 2000,
                color: "#ffccaa",
                prefix: "Mother: ",
            },
            {
                text: "It’s been empty for years. That’s all it is.",
                type: "father",
                pitch: 0.6,
                rate: 1.1,
                pause: 1500,
                color: "#aaaaff",
                prefix: "Father: ",
            },
            {
                text: "Daddy? Why is it so cold in here?",
                type: "child",
                pitch: 1.9,
                rate: 1.2,
                volume: 1.0,
                pause: 1500,
                color: "#ffff00",
                prefix: "Child: ",
            },
            {
                text: "There’s no windows open… I checked them.",
                type: "mother",
                pitch: 1.4,
                rate: 1.3,
                volume: 0.9,
                pause: 1000,
                color: "#ffccaa",
                prefix: "Mother: ",
            },
            {
                text: "Did the house just move?!",
                type: "child",
                pitch: 2.0,
                rate: 1.5,
                volume: 1.0,
                pause: 1500,
                color: "#ffff00",
                prefix: "Child: ",
            },
            {
                text: "It's just... old wood settling. Calm down.",
                type: "father",
                pitch: 0.7,
                rate: 0.9,
                pause: 2000,
                color: "#aaaaff",
                prefix: "Father: ",
            },
            {
                text: "Goooo...",
                type: "ghost",
                pitch: 0.01,
                rate: 0.2,
                volume: 1.0,
                pause: 1000,
                color: "#888888",
                prefix: "Unknown: ",
            },
            {
                text: "Did you hear that voice?! Who said that?!",
                type: "mother",
                pitch: 1.6,
                rate: 1.6,
                volume: 1.0,
                pause: 1000,
                color: "#ffccaa",
                prefix: "Mother: ",
            },
            {
                text: "I... I didn’t hear anything. Stay close to me.",
                type: "father",
                pitch: 0.8,
                rate: 1.3,
                pause: 2000,
                color: "#aaaaff",
                prefix: "Father: ",
            },
            {
                text: "You don’t belong...",
                type: "ghost",
                pitch: 0.01,
                rate: 0.4,
                pause: 500,
                color: "#888888",
                prefix: "Unknown: ",
            },
            {
                text: "It wants us to leave! PLEASE!",
                type: "child",
                pitch: 2.0,
                rate: 1.6,
                volume: 1.0,
                pause: 1500,
                color: "#ffff00",
                prefix: "Child: ",
            },
            {
                text: "SOMEONE IS INSIDE THIS HOUSE!!",
                type: "mother",
                pitch: 1.7,
                rate: 1.5,
                volume: 1.0,
                pause: 1000,
                color: "#ffccaa",
                prefix: "Mother: ",
            },
        ],
    },
    hi: {
        landingTitle: "वारेन ओकल्ट म्यूजियम",
        landingWarning: "चेतावनी: दर्शक विवेक की सलाह दी जाती है।",
        landingSubwarning: "लाइव फीड में असाधारण गतिविधि शामिल है।",
        loading: ["कनेक्ट हो रहा है...", "आवाहन...", "पीछे मत देखो", "वे यहाँ हैं"],
        warning: "चेतावनी: अत्यधिक डरावनी सामग्री",
        start: "हिम्मत है तो प्रवेश करें",
        cam: "कैमरा ०४: आर्टिफैक्ट रूम",
        spiritBox: [
            "मैं तुम्हें देख रहा हूँ...",
            "पीछे मुड़ो...",
            "मुझे अंदर आने दो...",
            "भागो...",
            "छुपा लो...",
        ],
        jumpscare: "तुम्हें ढूँढ लिया",
        episodeTitle: "एपिसोड १",
        episodeSubtitle: "वो घर जो सांस लेता है",
        finalMessage: "बुरा सपना अभी शुरू हुआ है...",
        finalSubmessage: "सुबह के लिए प्रार्थना करें।",
        script: [
            {
                text: "यहाँ धूल की गंध आ रही है... और कुछ सड़ा हुआ।",
                type: "mother",
                pitch: 1.1,
                rate: 0.7,
                pause: 2500,
                color: "#ffccaa",
                prefix: "माँ: ",
            },
            {
                text: "यह सालों से खाली है। बस इतना ही है।",
                type: "father",
                pitch: 0.6,
                rate: 0.8,
                pause: 2000,
                color: "#aaaaff",
                prefix: "पिता: ",
            },
            {
                text: "पापा? यहाँ इतनी ठंड क्यों है?",
                type: "child",
                pitch: 1.8,
                rate: 0.9,
                volume: 1.0,
                pause: 2000,
                color: "#ffff00",
                prefix: "बच्चा: ",
            },
            {
                text: "कोई खिड़की नहीं खुली है... मैंने चेक किया था।",
                type: "mother",
                pitch: 1.3,
                rate: 0.8,
                volume: 0.9,
                pause: 1500,
                color: "#ffccaa",
                prefix: "माँ: ",
            },
            {
                text: "क्या घर अभी हिला?!",
                type: "child",
                pitch: 1.9,
                rate: 1.0,
                volume: 1.0,
                pause: 2000,
                color: "#ffff00",
                prefix: "बच्चा: ",
            },
            {
                text: "यह बस... पुरानी लकड़ी है। शांत हो जाओ।",
                type: "father",
                pitch: 0.7,
                rate: 0.7,
                pause: 2500,
                color: "#aaaaff",
                prefix: "पिता: ",
            },
            {
                text: "जाओ...",
                type: "ghost",
                pitch: 0.01,
                rate: 0.2,
                volume: 1.0,
                pause: 1500,
                color: "#888888",
                prefix: "अज्ञात: ",
            },
            {
                text: "क्या तुमने वह आवाज़ सुनी?! किसने कहा?!",
                type: "mother",
                pitch: 1.5,
                rate: 0.9,
                volume: 1.0,
                pause: 1500,
                color: "#ffccaa",
                prefix: "माँ: ",
            },
            {
                text: "मैंने... मैंने कुछ नहीं सुना। मेरे पास रहो।",
                type: "father",
                pitch: 0.8,
                rate: 0.8,
                pause: 2500,
                color: "#aaaaff",
                prefix: "पिता: ",
            },
            {
                text: "तुम यहाँ के नहीं हो...",
                type: "ghost",
                pitch: 0.01,
                rate: 0.3,
                pause: 1000,
                color: "#888888",
                prefix: "अज्ञात: ",
            },
            {
                text: "वह चाहता है कि हम चले जाएँ! कृपया!",
                type: "child",
                pitch: 1.9,
                rate: 1.0,
                volume: 1.0,
                pause: 2000,
                color: "#ffff00",
                prefix: "बच्चा: ",
            },
            {
                text: "इस घर में कोई है!!",
                type: "mother",
                pitch: 1.6,
                rate: 1.0,
                volume: 1.0,
                pause: 1500,
                color: "#ffccaa",
                prefix: "माँ: ",
            },
        ],
    },
    te: {
        landingTitle: "వారెన్ క్షుద్ర మ్యూజియం",
        landingWarning: "హెచ్చరిక: వీక్షకుల విచక్షణ సూచించబడింది.",
        landingSubwarning: "లైవ్ ఫీడ్లో పారానార్మల్ యాక్టివిటీ ఉంది.",
        loading: [
            "కనెక్ట్ అవుతోంది...",
            "పిలుస్తోంది...",
            "వెనక్కి చూడకు",
            "వాళ్ళు ఇక్కడే ఉన్నారు",
        ],
        warning: "హెచ్చరిక: అత్యంత భయానక కంటెంట్",
        start: "ధైర్యం ఉంటే ప్రవేశించండి",
        cam: "యామ్ 04: ఆర్టిఫాక్ట్ రూమ్",
        spiritBox: [
            "నేను నిన్ను చూస్తున్నాను...",
            "వెనక్కి తిరుగు...",
            "నన్ను లోపలికి రానివ్వండి...",
            "పరుగెత్తు...",
            "దాక్కో...",
        ],
        jumpscare: "నిన్ను కనుగొన్నాను",
        episodeTitle: "ఎపిసోడ్ 1",
        episodeSubtitle: "ఊపిరి పీల్చుకునే ఇల్లు",
        finalMessage: "పీడకల ఇప్పుడే మొదలైంది...",
        finalSubmessage: "ఉదయం కోసం ప్రార్థించండి.",
        script: [
            {
                text: "ఈ ప్రదేశం దుమ్ము వాసన వస్తోంది... మరియు ఏదో కుళ్ళిన వాసన.",
                type: "mother",
                pitch: 1.1,
                rate: 0.7,
                pause: 2500,
                color: "#ffccaa",
                prefix: "తల్లి: ",
            },
            {
                text: "ఇది ఏళ్లుగా ఖాళీగా ఉంది. అంతే.",
                type: "father",
                pitch: 0.6,
                rate: 0.8,
                pause: 2000,
                color: "#aaaaff",
                prefix: "తండ్రి: ",
            },
            {
                text: "నాన్నా? ఇక్కడ ఎందుకు ఇంత చల్లగా ఉంది?",
                type: "child",
                pitch: 1.8,
                rate: 0.9,
                volume: 1.0,
                pause: 2000,
                color: "#ffff00",
                prefix: "పిల్లవాడు: ",
            },
            {
                text: "కిటికీలు ఏవీ తెరవలేదు... నేను చూశాను.",
                type: "mother",
                pitch: 1.3,
                rate: 0.8,
                volume: 0.9,
                pause: 1500,
                color: "#ffccaa",
                prefix: "తల్లి: ",
            },
            {
                text: "ఇల్లు కదిలిందా?!",
                type: "child",
                pitch: 1.9,
                rate: 1.0,
                volume: 1.0,
                pause: 2000,
                color: "#ffff00",
                prefix: "పిల్లవాడు: ",
            },
            {
                text: "ఇది కేవలం... పాత చెక్క. శాంతించు.",
                type: "father",
                pitch: 0.7,
                rate: 0.7,
                pause: 2500,
                color: "#aaaaff",
                prefix: "తండ్రి: ",
            },
            {
                text: "వెళ్ళండి...",
                type: "ghost",
                pitch: 0.01,
                rate: 0.2,
                volume: 1.0,
                pause: 1500,
                color: "#888888",
                prefix: "తెలియదు: ",
            },
            {
                text: "ఆ స్వరం విన్నారా?! ఎవరు చెప్పారు?!",
                type: "mother",
                pitch: 1.5,
                rate: 0.9,
                volume: 1.0,
                pause: 1500,
                color: "#ffccaa",
                prefix: "తల్లి: ",
            },
            {
                text: "నేను... నాకేమీ వినిపించలేదు. నా దగ్గరే ఉండు.",
                type: "father",
                pitch: 0.8,
                rate: 0.8,
                pause: 2500,
                color: "#aaaaff",
                prefix: "తండ్రి: ",
            },
            {
                text: "మీరు ఇక్కడికి సంబంధించిన వారు కాదు...",
                type: "ghost",
                pitch: 0.01,
                rate: 0.3,
                pause: 1000,
                color: "#888888",
                prefix: "తెలియదు: ",
            },
            {
                text: "మనం వెళ్లిపోవాలని ఆశిస్తోంది! దయచేసి!",
                type: "child",
                pitch: 1.9,
                rate: 1.0,
                volume: 1.0,
                pause: 2000,
                color: "#ffff00",
                prefix: "పిల్లవాడు: ",
            },
            {
                text: "ఈ ఇంట్లో ఎవరో ఉన్నారు!!",
                type: "mother",
                pitch: 1.6,
                rate: 1.0,
                volume: 1.0,
                pause: 1500,
                color: "#ffccaa",
                prefix: "తల్లి: ",
            },
        ],
    },
};

// Text-to-Speech Engine
class VoiceEngine {
    constructor() {
        this.synth = window.speechSynthesis;
        if (!this.synth) {
            console.warn("VoiceEngine: SpeechSynthesis not found on window.");
        }

        this.voices = [];
        this.currentUtterance = null; // Prevent GC
        this.voicesLoaded = false;

        // Try load immediately
        if (this.synth) {
            this.loadVoices();
            if (this.synth.onvoiceschanged !== undefined) {
                this.synth.onvoiceschanged = () => this.loadVoices();
            }
        }
    }

    loadVoices() {
        if (!this.synth) return;
        const voices = this.synth.getVoices();
        if (voices.length > 0) {
            this.voices = voices;
            this.voicesLoaded = true;
            console.log(`VoiceEngine: Loaded ${voices.length} voices.`);
        }
    }

    waitForVoices() {
        return new Promise((resolve) => {
            if (this.voicesLoaded || !this.synth) {
                resolve();
            } else {
                this.loadVoices();
                if (this.voicesLoaded) return resolve();

                const checkInterval = setInterval(() => {
                    this.loadVoices();
                    if (this.voicesLoaded) {
                        clearInterval(checkInterval);
                        resolve();
                    }
                }, 50);

                setTimeout(() => {
                    clearInterval(checkInterval);
                    resolve();
                }, 100);
            }
        });
    }

    unlock() {
        if (!this.synth || !window.SpeechSynthesisUtterance) return;
        if (this.synth.speaking) this.synth.cancel();
        const utter = new SpeechSynthesisUtterance(" ");
        utter.volume = 0;
        utter.rate = 2.0;
        this.synth.speak(utter);
    }

    speak(text, lang, type = "demon", params = {}, onEnd = null) {
        let callbackFired = false;
        const safeOnEnd = () => {
            if (callbackFired) return;
            callbackFired = true;
            if (window.engine && window.engine.tapeDeck)
                window.engine.tapeDeck.duck(false);
            this.currentUtterance = null;
            if (onEnd)
                try {
                    onEnd();
                } catch (e) {
                    console.error("onEnd error:", e);
                }
        };

        if (window.engine && window.engine.tapeDeck)
            window.engine.tapeDeck.duck(true);

        if (!this.synth || !window.SpeechSynthesisUtterance) {
            console.warn("VoiceEngine: TTS not supported");
            setTimeout(safeOnEnd, 1000);
            return;
        }

        try {
            if (this.synth.speaking) this.synth.cancel();

            if (!text || typeof text !== "string") {
                console.warn("VoiceEngine: Invalid text", text);
                safeOnEnd();
                return;
            }

            const utter = new SpeechSynthesisUtterance(text);
            utter.lang = lang;

            if (type === "demon") {
                utter.pitch = 0.1;
                utter.rate = 0.8;
                utter.volume = 1.0;
            } else if (type === "child") {
                utter.pitch = 2.2;
                utter.rate = 1.2;
                utter.volume = 0.8;
            } else if (type === "whisper") {
                utter.pitch = 0.5;
                utter.rate = 1.5;
                utter.volume = 0.3;
            } else if (type === "mother") {
                utter.pitch = 1.2;
                utter.rate = 1.1;
                utter.volume = 0.9;
            } else if (type === "father") {
                utter.pitch = 0.6;
                utter.rate = 0.9;
                utter.volume = 0.9;
            } else if (type === "ghost") {
                utter.pitch = 1.5;
                utter.rate = 1.5;
                utter.volume = 0.4;
            }

            if (params.pitch) utter.pitch = params.pitch;
            if (params.rate) utter.rate = params.rate;
            if (params.volume) utter.volume = params.volume;

            if (params.jitter) {
                utter.pitch += Math.random() * params.jitter - params.jitter / 2;
                utter.rate += Math.random() * params.jitter - params.jitter / 2;
                utter.pitch = Math.max(0.1, Math.min(2, utter.pitch));
                utter.rate = Math.max(0.1, Math.min(2, utter.rate));
            }

            if (lang !== "en") utter.rate = utter.rate * 0.8;

            if (this.voices.length > 0) {
                const langCode = lang.split("-")[0];
                const pool = this.voices.filter((v) =>
                    v.lang.toLowerCase().startsWith(langCode),
                );

                const findVoice = (keywords) =>
                    (pool.length > 0 ? pool : this.voices).find((v) =>
                        keywords.some((k) =>
                            v.name.toLowerCase().includes(k.toLowerCase()),
                        ),
                    );

                let voice = null;
                if (type === "child" || type === "mother" || type === "ghost") {
                    voice = findVoice([
                        "Zira",
                        "Eva",
                        "Sara",
                        "Female",
                        "Google US English",
                        "Samantha",
                        "Hindi Female",
                        "Telugu Female",
                    ]);
                } else {
                    voice = findVoice([
                        "David",
                        "Mark",
                        "Male",
                        "Google UK English Male",
                        "Hindi Male",
                        "Telugu Male",
                    ]);
                }

                if (!voice && pool.length > 0) voice = pool[0];
                if (voice) utter.voice = voice;
            }

            this.currentUtterance = utter;

            utter.onend = safeOnEnd;
            utter.onerror = (e) => {
                console.warn("TTS Error event:", e);
                safeOnEnd();
            };

            // Failsafe based on text length + buffer
            setTimeout(
                () => {
                    if (!callbackFired) safeOnEnd();
                },
                text.length * 200 + 5000,
            );

            setTimeout(() => this.synth.speak(utter), 10);
        } catch (e) {
            console.error("Critical TTS Exception:", e);
            safeOnEnd();
        }
    }

    speakSequence(lines, lang = "en", onComplete) {
        let index = 0;
        const next = () => {
            if (index >= lines.length) {
                if (onComplete) onComplete();
                return;
            }
            const line = lines[index];
            index++;

            if (line.onStart)
                try {
                    line.onStart();
                } catch (e) { }

            const jitter = line.type === "demon" || line.type === "ghost" ? 0.1 : 0;
            const params = { ...line, jitter };

            this.speak(line.text, lang, line.type, params, () => {
                if (line.onEnd)
                    try {
                        line.onEnd();
                    } catch (e) { }
                setTimeout(next, line.pause || 500);
            });
        };
        next();
    }
}

class TapeDeck {
    constructor() {
        this.ctx = null;
        this.masterGain = null;
        this.activeNodes = [];
        this.unlocked = false;
    }

    init() {
        if (this.ctx) return;

        const getMockParam = () => ({
            value: 0,
            setValueAtTime: () => { },
            linearRampToValueAtTime: () => { },
            exponentialRampToValueAtTime: () => { },
            cancelScheduledValues: () => { },
            setTargetAtTime: () => { },
        });

        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) throw new Error("AudioContext not supported");
            this.ctx = new AudioCtx();
            this.masterGain = this.ctx.createGain();
            this.masterGain.connect(this.ctx.destination);

            if (!this.ctx.createStereoPanner) {
                this.ctx.createStereoPanner = () => {
                    const panner = this.ctx.createGain();
                    panner.pan = getMockParam();
                    return panner;
                };
            }
            this.masterGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
            console.log("TapeDeck initialized successfully, masterGain set to 0.8");
        } catch (e) {
            console.warn("TapeDeck init failed, using mock", e);
            this.ctx = {
                state: "suspended",
                resume: () => Promise.resolve(),
                createGain: () => ({ gain: getMockParam(), connect: () => { } }),
                createBuffer: () => ({ getChannelData: () => [] }),
                createBufferSource: () => ({
                    connect: () => { },
                    start: () => { },
                    stop: () => { },
                    disconnect: () => { },
                    buffer: null,
                    loop: false,
                    playbackRate: getMockParam(),
                }),
                createBiquadFilter: () => ({
                    connect: () => { },
                    frequency: getMockParam(),
                    Q: getMockParam(),
                    type: "lowpass",
                }),
                createOscillator: () => ({
                    connect: () => { },
                    start: () => { },
                    stop: () => { },
                    frequency: getMockParam(),
                    detune: getMockParam(),
                    type: "sine",
                }),
                createStereoPanner: () => ({ connect: () => { }, pan: getMockParam() }),
                destination: {},
                currentTime: 0,
                sampleRate: 44100,
                suspend: () => Promise.resolve(),
                close: () => Promise.resolve(),
            };
            this.masterGain = this.ctx.createGain();
        }
    }

    resume() {
        console.log("TapeDeck.resume() called");
        this.init();
        console.log("TapeDeck AudioContext state:", this.ctx.state);

        if (this.ctx.state === "suspended") {
            this.ctx.resume().then(() => {
                console.log("AudioContext resumed successfully, new state:", this.ctx.state);
            }).catch((e) => console.warn("AudioContext resume failed:", e));
        }

        if (!this.unlocked) {
            try {
                const buffer = this.ctx.createBuffer(1, 1, 22050);
                const source = this.ctx.createBufferSource();
                source.buffer = buffer;
                source.connect(this.ctx.destination);
                source.start(0);
                this.unlocked = true;
                console.log("TapeDeck unlocked with silent buffer");
            } catch (e) {
                console.warn("TapeDeck unlock failed:", e);
            }
        }
    }

    duck(active) {
        if (!this.ctx || !this.masterGain) return;
        const now = this.ctx.currentTime;
        const target = active ? 0.1 : 0.3;
        this.masterGain.gain.cancelScheduledValues(now);
        this.masterGain.gain.setTargetAtTime(target, now, 0.5);
    }

    stopAll() {
        this.activeNodes.forEach((node) => {
            try {
                node.stop();
            } catch (e) { }
            try {
                node.disconnect();
            } catch (e) { }
        });
        this.activeNodes = [];
    }

    suspend() {
        this.stopAll();
        if (this.ctx && this.ctx.suspend) {
            this.ctx.suspend().catch((e) => console.warn("TapeDeck suspend error:", e));
        }
    }

    createNoise(duration) {
        const bufferSize = this.ctx.sampleRate * duration;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
        return buffer;
    }

    // NEW: playNoise method
    playNoise(type = "white", duration = 0.5, vol = 0.2) {
        if (this.ctx.state === "suspended") this.resume();
        const noise = this.ctx.createBufferSource();
        noise.buffer = this.createNoise(duration);
        const gain = this.ctx.createGain();
        gain.gain.value = vol;
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + duration);

        noise.connect(gain);
        gain.connect(this.masterGain);
        noise.start();
    }

    playHauntedHouse() {
        const noise = this.ctx.createBufferSource();
        noise.buffer = this.createNoise(10);
        noise.loop = true;
        const filter = this.ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 400;

        const osc = this.ctx.createOscillator();
        osc.type = "sawtooth";
        osc.frequency.value = 60;
        osc.detune.value = -1200;
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

    play307AM() {
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

    playDemonReveal() {
        const t = this.ctx.currentTime;
        const carrier = this.ctx.createOscillator();
        carrier.type = "sawtooth";
        carrier.frequency.setValueAtTime(800, t);
        carrier.frequency.exponentialRampToValueAtTime(20, t + 1.5);

        const mod = this.ctx.createOscillator();
        mod.type = "square";
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

    playBehindYou() {
        const panner = this.ctx.createStereoPanner();
        panner.pan.value = 1;

        const noise = this.ctx.createBufferSource();
        noise.buffer = this.createNoise(1);
        const filter = this.ctx.createBiquadFilter();
        filter.type = "bandpass";
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

    playScenario(id) {
        console.log("playScenario called with id:", id);
        this.resume();
        console.log("AudioContext state after resume:", this.ctx.state);
        switch (id) {
            case 1:
                console.log("Playing HauntedHouse...");
                this.playHauntedHouse();
                break;
            case 2:
                console.log("Playing Clapping...");
                this.playClapping();
                break;
            case 3:
                this.play307AM();
                break;
            case 4:
                this.playFootsteps();
                break;
            case 5:
                this.playDemonReveal();
                break;
            case 6:
                this.playPossession();
                break;
            case 7:
                this.playExorcism();
                break;
            case 8:
                this.playBehindYou();
                break;
            case 9:
                this.playPresence();
                break;
            case 10:
                this.playJumpscare();
                break;
        }
    }

    playClapping() {
        const claps = [0, 1.5, 3];
        claps.forEach((delay) => {
            setTimeout(() => {
                const noise = this.ctx.createBufferSource();
                noise.buffer = this.createNoise(0.1);
                const filter = this.ctx.createBiquadFilter();
                filter.type = "highpass";
                filter.frequency.value = 800;
                const gain = this.ctx.createGain();
                gain.gain.setValueAtTime(0.8, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(
                    0.01,
                    this.ctx.currentTime + 0.1,
                );
                const panner = this.ctx.createStereoPanner();
                panner.pan.value = Math.random() * 2 - 1;
                noise.connect(filter);
                filter.connect(gain);
                gain.connect(panner);
                panner.connect(this.masterGain);
                noise.start();
            }, delay * 1000);
        });
    }

    playFootsteps() {
        let step = 0;
        const walk = setInterval(() => {
            if (step > 6) {
                clearInterval(walk);
                return;
            }
            const noise = this.ctx.createBufferSource();
            noise.buffer = this.createNoise(0.2);
            const filter = this.ctx.createBiquadFilter();
            filter.type = "lowpass";
            filter.frequency.value = 200;
            const pan = this.ctx.createStereoPanner();
            pan.pan.value = -1 + step * 0.3;
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

    playPresence() {
        const noise = this.ctx.createBufferSource();
        noise.buffer = this.createNoise(10);
        noise.loop = true;
        const filter = this.ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(100, this.ctx.currentTime);
        filter.frequency.linearRampToValueAtTime(60, this.ctx.currentTime + 10);
        const noiseGain = this.ctx.createGain();
        noiseGain.gain.value = 0.4;
        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(this.masterGain);
        noise.start();

        const createDrone = (freq, detune) => {
            const osc = this.ctx.createOscillator();
            osc.type = "triangle";
            osc.frequency.value = freq;
            osc.detune.value = detune;
            const g = this.ctx.createGain();
            g.gain.value = 0.05;
            const lfo = this.ctx.createOscillator();
            lfo.type = "sine";
            lfo.frequency.value = 0.1 + Math.random() * 0.2;
            lfo.connect(g.gain);
            osc.connect(g);
            g.connect(this.masterGain);
            osc.start();
            lfo.start();
            this.activeNodes.push(osc, lfo, g);
        };
        createDrone(55, 0);
        createDrone(77.78, 10);
        createDrone(55, 1200);
        this.activeNodes.push(noise, noiseGain);
    }

    playJumpscare() {
        const t = this.ctx.currentTime;
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

        const osc2 = this.ctx.createOscillator();
        osc2.type = "sawtooth";
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

    playBansheeScream() {
        if (this.ctx.state === "suspended") this.ctx.resume();
        const t = this.ctx.currentTime;
        const master = this.masterGain.gain.value;
        this.masterGain.gain.setValueAtTime(1.0, t);

        for (let i = 0; i < 3; i++) {
            const osc = this.ctx.createOscillator();
            osc.type = i % 2 === 0 ? "sawtooth" : "square";
            osc.frequency.setValueAtTime(800 + Math.random() * 500, t);
            osc.frequency.exponentialRampToValueAtTime(
                1500 + Math.random() * 1000,
                t + 0.1,
            );
            osc.frequency.exponentialRampToValueAtTime(1000, t + 1.5);
            osc.detune.value = (Math.random() - 0.5) * 1000;
            const g = this.ctx.createGain();
            g.gain.setValueAtTime(0, t);
            g.gain.linearRampToValueAtTime(0.8, t + 0.05);
            g.gain.exponentialRampToValueAtTime(0.01, t + 1.5);
            const lfo = this.ctx.createOscillator();
            lfo.type = "sine";
            lfo.frequency.value = 15 + Math.random() * 10;
            const lfoGain = this.ctx.createGain();
            lfoGain.gain.value = 500;
            lfo.connect(lfoGain);
            lfoGain.connect(osc.frequency);
            osc.connect(g);
            g.connect(this.masterGain);
            osc.start(t);
            lfo.start(t);
            osc.stop(t + 1.5);
            lfo.stop(t + 1.5);
        }
        setTimeout(() => {
            this.masterGain.gain.linearRampToValueAtTime(
                master,
                this.ctx.currentTime + 1,
            );
        }, 1500);
    }

    playCreak() {
        this.resume();
        const osc = this.ctx.createOscillator();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(150, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(50, this.ctx.currentTime + 1.5);
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.5, this.ctx.currentTime); // INCREASED VOLUME
        g.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.5);
        osc.connect(g);
        g.connect(this.masterGain);
        osc.start();
        osc.stop(this.ctx.currentTime + 1.5);
    }

    playDoorSlam() {
        this.resume();
        const t = this.ctx.currentTime;
        const noise = this.ctx.createBufferSource();
        noise.buffer = this.createNoise(0.5);
        const filter = this.ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 150;
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(1, t);
        g.gain.exponentialRampToValueAtTime(0.01, t + 0.4);
        noise.connect(filter);
        filter.connect(g);
        g.connect(this.masterGain);
        noise.start();

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

    playPossession() {
        // Simple Placeholder
        const osc = this.ctx.createOscillator();
        osc.frequency.value = 100;
        const g = this.ctx.createGain();
        g.gain.value = 0.5;
        osc.connect(g);
        g.connect(this.masterGain);
        osc.start();
        osc.stop(this.ctx.currentTime + 1);
    }

    playExorcism() {
        // Simple Placeholder
        const osc = this.ctx.createOscillator();
        osc.frequency.value = 666;
        const g = this.ctx.createGain();
        g.gain.value = 0.5;
        osc.connect(g);
        g.connect(this.masterGain);
        osc.start();
        osc.stop(this.ctx.currentTime + 1);
    }

    // suspend method is defined above (after stopAll)
}

class HybridEngine {
    constructor() {
        this.video = document.getElementById("mainVideo");
        this.canvas = document.getElementById("scareCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.uiLayer = document.getElementById("ui-layer");
        this.currentLang = CONFIG.defaultLang;

        this.tapeDeck = new TapeDeck();
        this.voiceEngine = new VoiceEngine();

        this.scareImages = [];
        this.farmhouseImages = [];
        this.loadedImagesCount = 0;
        this.timeOffset = 0;
        this.isConversationActive = false;
        this.preloadImages();

        this.initUI();
    }

    preloadImages() {
        // Load scare images (for non-conversation scenes)
        for (let i = 1; i <= CONFIG.totalImages; i++) {
            const img = new Image();
            img.src = `assets/scare_${i}.png`;
            img.onload = () => {
                this.loadedImagesCount++;
                if (CONFIG.debugMode) console.log(`Loaded scare_${i}.png`);
            };
            this.scareImages.push(img);
        }
        // Load farmhouse images (for conversation scenes)
        const farmhouseFiles = ['farmhouse_ext.png', 'farmhouse_int.png'];
        farmhouseFiles.forEach(file => {
            const img = new Image();
            img.src = `assets/${file}`;
            img.onload = () => console.log(`Loaded ${file}`);
            this.farmhouseImages.push(img);
        });
    }

    initUI() {
        window.addEventListener("resize", () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        document.addEventListener("keydown", (e) => {
            if (e.key.toLowerCase() === "s") this.triggerScare();
            if (e.key === "ArrowRight") this.seek(5);
            if (e.key === "ArrowLeft") this.seek(-5);
        });

        document.addEventListener("mousemove", (e) => {
            const eyes = document.querySelector(".eyes-container");
            if (eyes) {
                eyes.style.left = e.clientX + "px";
                eyes.style.top = e.clientY + "px";
            }
        });
    }

    seek(seconds) {
        this.timeOffset += seconds * 1000;
        const consoleEl = document.querySelector(".console-text");
        if (consoleEl) {
            const action = seconds > 0 ? "FFWD >>" : "<< RWD";
            const originalText =
                consoleEl.getAttribute("data-text") || consoleEl.innerText;
            if (!consoleEl.getAttribute("data-text"))
                consoleEl.setAttribute("data-text", originalText);

            consoleEl.innerText = `${action} ${Math.abs(seconds)}S`;
            consoleEl.classList.add("glitch");

            this.tapeDeck.playNoise("white", 0.2, 0.5);

            clearTimeout(this.seekTimeout);
            this.seekTimeout = setTimeout(() => {
                consoleEl.innerText = originalText;
                consoleEl.classList.remove("glitch");
            }, 800);
        }
    }

    startMonitoring() {
        this.uiLayer.classList.remove("hidden");
        document.querySelector(".monitor-overlay").style.display = "flex";

        const unlockAudio = () => {
            if (this.tapeDeck) this.tapeDeck.resume();
            if (this.voiceEngine) this.voiceEngine.unlock();
            ["touchstart", "click", "keydown"].forEach((evt) =>
                document.body.removeEventListener(evt, unlockAudio),
            );
        };
        ["touchstart", "click", "keydown"].forEach((evt) =>
            document.body.addEventListener(evt, unlockAudio, { once: true }),
        );

        this.canvas.classList.add("visible");
        this.isVideoActive = true;
        this.renderFeed();

        setTimeout(() => {
            if (this.tapeDeck) this.tapeDeck.playBansheeScream();
            document.body.style.backgroundColor = "#500";
            setTimeout(() => (document.body.style.backgroundColor = ""), 100);
        }, 1500);

        this.tapeDeck.playScenario(3);

        setInterval(() => {
            if (Math.random() > 0.8) this.triggerSpiritMessage();
        }, 5000);

        setTimeout(() => {
            this.triggerConversation();
        }, 3000); // ACCELERATED START

        setTimeout(() => this.triggerParanormalEvent(), 3000);
    }

    renderFeed() {
        if (!this.isVideoActive) return;

        const now = Date.now();
        if (!this.lastFrameTime || now - this.lastFrameTime > 80) {
            this.lastFrameTime = now;
            this.ctx.fillStyle = "#050505";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Choose image set based on conversation state
            const imagePool = this.isConversationActive && this.farmhouseImages.length > 0
                ? this.farmhouseImages
                : this.scareImages;

            if (imagePool.length > 0) {
                const rand = Math.random();
                if (this.isConversationActive) {
                    // Calmer, moodier filter during conversation
                    this.ctx.filter = "contrast(1.1) brightness(0.7) sepia(0.3)";
                } else if (rand > 0.98) {
                    this.ctx.filter = "contrast(2.0) saturate(0) invert(1)";
                } else if (rand > 0.95) {
                    this.ctx.filter = "sepia(0.8) contrast(1.2) brightness(0.8)";
                } else if (rand > 0.92) {
                    this.ctx.filter = "blur(2px) opacity(0.8)";
                } else {
                    this.ctx.filter = "contrast(1.1) brightness(0.9)";
                }

                const adjustedTime = now + this.timeOffset;
                // During conversation, change images slowly (every 5s); otherwise fast
                const frameSpeed = this.isConversationActive ? 5000 : 100;
                const frameIndex = Math.floor(adjustedTime / frameSpeed) % imagePool.length;
                const img = imagePool[frameIndex];

                if (img && img.complete) {
                    const scale = Math.max(
                        this.canvas.width / img.width,
                        this.canvas.height / img.height,
                    );
                    const x = this.canvas.width / 2 - (img.width / 2) * scale;
                    const y = this.canvas.height / 2 - (img.height / 2) * scale;

                    this.ctx.globalCompositeOperation = "source-over";
                    if (!this.canvas.classList.contains("breathing") && !this.scareActive)
                        this.canvas.classList.add("breathing");

                    this.ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
                    this.ctx.filter = "none";

                    if (this.drawGhostBox) {
                        this.ctx.strokeStyle = "#00ff00";
                        this.ctx.lineWidth = 2;
                        const boxX = x + img.width * scale * 0.4 + Math.random() * 10;
                        const boxY = y + img.height * scale * 0.2 + Math.random() * 10;
                        this.ctx.strokeRect(boxX, boxY, 100, 100);
                        this.ctx.fillStyle = "#00ff00";
                        this.ctx.font = "12px Courier New";
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
        const disp = document.getElementById("spirit-box-display");
        if (disp) {
            disp.innerText = msg;
            disp.classList.add("active");
            setTimeout(() => disp.classList.remove("active"), 4000);
        }
        this.voiceEngine.speak(msg, this.currentLang, "whisper");
        this.tapeDeck.playScenario(9);
    }

    setLang(lang) {
        console.log("setLang called with:", lang);
        if (!CONFIG.languages.includes(lang)) return;

        // AGGRESSIVE AUDIO UNLOCK
        try {
            console.log("Attempting to unlock audio...");
            this.tapeDeck.resume();
            this.voiceEngine.unlock();
            console.log("Audio unlock attempted");
        } catch (e) {
            console.error("Audio unlock failed:", e);
        }
        this.currentLang = lang;

        const texts = I18N[this.currentLang];
        if (!texts) return;

        const landingTitle = document.getElementById("landing-title");
        const landingWarning = document.getElementById("landing-warning");
        const landingSub = document.getElementById("landing-subwarning");
        if (landingTitle) landingTitle.innerText = texts.landingTitle;
        if (landingWarning) landingWarning.innerText = texts.landingWarning;
        if (landingSub) landingSub.innerText = texts.landingSubwarning;

        const epTitle = document.querySelector("#episode-title h1");
        const epSubTitle = document.querySelector("#episode-title h2");
        if (epTitle) {
            epTitle.innerText = texts.episodeTitle;
            epTitle.setAttribute("data-text", texts.episodeTitle);
        }
        if (epSubTitle) epSubTitle.innerText = texts.episodeSubtitle;

        const finMsg = document.querySelector("#final-message h1");
        const finSub = document.querySelector("#final-message p");
        if (finMsg) {
            finMsg.innerText = texts.finalMessage;
            finMsg.setAttribute("data-text", texts.finalMessage);
        }
        if (finSub) finSub.innerText = texts.finalSubmessage;

        const loadingText = document.getElementById("loading-text");
        if (loadingText && texts.loading) {
            const randomLoading =
                texts.loading[Math.floor(Math.random() * texts.loading.length)];
            loadingText.innerText = randomLoading;
        }

        const landing = document.getElementById("landing-page");
        if (landing) {
            if (!document.querySelector(".film-grain")) {
                const grain = document.createElement("div");
                grain.className = "film-grain";
                document.body.appendChild(grain);
            }
            if (!document.querySelector(".vignette")) {
                const vignette = document.createElement("div");
                vignette.className = "vignette";
                document.body.appendChild(vignette);
            }
            try {
                this.tapeDeck.resume();
            } catch (e) { }
            this.startSequence();
        }
        this.voiceEngine.waitForVoices();
    }

    startSequence() {
        document.getElementById("landing-page").classList.add("hidden");
        const title = document.getElementById("episode-title");
        title.classList.remove("hidden");
        title.classList.add("visible");
        title.style.display = "flex";

        // SPEAK the Episode Title aloud
        const texts = I18N[this.currentLang];
        if (texts) {
            const titleText = texts.episodeTitle + ". " + texts.episodeSubtitle;
            this.voiceEngine.speak(titleText, this.currentLang, "demon", { pitch: 0.3, rate: 0.6, volume: 1.0 });
        }

        setTimeout(() => {
            if (!this.isVideoActive) {
                document.getElementById("loading-screen").classList.add("hidden");
                const title = document.getElementById("episode-title");
                if (title) {
                    title.classList.remove("visible");
                    title.style.display = "none";
                }
                this.startMonitoring();
            }
        }, 8000);

        try {
            this.tapeDeck.playScenario(1);
        } catch (e) { }

        setTimeout(() => {
            title.classList.remove("visible");
            setTimeout(() => (title.style.display = "none"), 2000);
            document.getElementById("loading-screen").classList.remove("hidden");
            setTimeout(() => {
                document.getElementById("loading-screen").classList.add("hidden");
                this.startMonitoring();
            }, 3000);
        }, 4000);
    }

    // NOTE: Simplified conversation trigger
    triggerConversation() {
        console.log("Starting horror conversation...");
        this.isConversationActive = true;

        const lines = I18N[this.currentLang].script;
        const subUI = document.getElementById("subtitles");
        console.log("Subtitle element found:", !!subUI);
        console.log("Number of script lines:", lines ? lines.length : 0);

        if (!lines || lines.length === 0) {
            console.error("No script lines found for language:", this.currentLang);
            return;
        }

        // Ensure subtitles are ready (remove hidden, set initial state)
        if (subUI) {
            subUI.classList.remove("hidden");
            subUI.style.display = "block";
            subUI.style.opacity = "0";
        }

        // Simple subtitle renderer
        lines.forEach((line, i) => {
            line.onStart = () => {
                console.log("Subtitle showing:", line.prefix + line.text);
                if (!subUI) return;
                subUI.innerText = line.prefix + line.text;
                subUI.style.color = line.color || "#fff";
                subUI.style.display = "block";
                subUI.style.opacity = "1";
                subUI.classList.remove("hidden");
                subUI.classList.add("visible");
            };
            line.onEnd = () => {
                if (subUI) {
                    subUI.style.opacity = "0";
                    subUI.classList.remove("visible");
                }
                // BONUS: Preserving sound effects (Creak and Door Slam)
                if (i === 3)
                    setTimeout(() => {
                        if (this.tapeDeck && this.tapeDeck.playCreak)
                            this.tapeDeck.playCreak();
                    }, 500);
                if (i === 9)
                    setTimeout(() => {
                        if (this.tapeDeck && this.tapeDeck.playDoorSlam)
                            this.tapeDeck.playDoorSlam();
                    }, 1000);
            };
        });

        // Ensure audio is unlocked before speaking
        this.tapeDeck.resume();
        this.voiceEngine.unlock();

        this.voiceEngine.speakSequence(lines, this.currentLang, () => {
            console.log("Conversation complete — triggering jumpscare.");
            this.isConversationActive = false;
            this.triggerJumpscare();
        });
    }

    terminateSession() {
        console.log("Terminating Session...");
        try { this.tapeDeck.suspend(); } catch (e) { console.warn("Suspend error:", e); }
        this.scareActive = false;
        this.isVideoActive = false;

        const monitor = document.querySelector(".monitor-overlay");
        if (monitor) monitor.style.display = "none";
        if (this.canvas) this.canvas.classList.remove("visible");
        const subUI = document.getElementById("subtitles");
        if (subUI) {
            subUI.classList.remove("visible");
            subUI.style.opacity = "0";
        }

        const finalMsg = document.getElementById("final-message");
        if (finalMsg) {
            finalMsg.classList.remove("hidden");
            finalMsg.classList.add("visible");
            finalMsg.style.cssText =
                "display: flex !important; opacity: 1 !important; z-index: 10000 !important;";
            const h1 = finalMsg.querySelector("h1");
            if (h1 && !h1.getAttribute("data-text"))
                h1.setAttribute("data-text", h1.innerText);

            // Speak the final message
            const texts = I18N[this.currentLang];
            if (texts) {
                try {
                    this.tapeDeck.resume();
                    this.voiceEngine.speak(texts.finalMessage + ". " + texts.finalSubmessage, this.currentLang, "demon", { pitch: 0.1, rate: 0.4, volume: 1.0 });
                } catch (e) { console.warn("Final message TTS error:", e); }
            }
        } else {
            document.body.innerHTML = "";
            document.body.style.backgroundColor = "black";
            document.body.style.cursor = "none";
            const container = document.createElement("div");
            container.style.cssText =
                "position:fixed; top:0; left:0; width:100%; height:100%; background:#000; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;";
            const h1 = document.createElement("h1");
            h1.innerText = "THE NIGHTMARE HAS ONLY BEGUN...";
            h1.style.cssText =
                "font-family: 'Creepster', cursive; font-size: 3rem; color: #cc0000; text-shadow: 2px 2px #000; letter-spacing: 5px; margin-bottom: 20px;";
            const p = document.createElement("p");
            p.innerText = "PRAY FOR THE DAWN.";
            p.style.cssText =
                "font-size: 1.5rem; color: #666; font-family: 'Courier New';";
            container.appendChild(h1);
            container.appendChild(p);
            document.body.appendChild(container);
        }
    }

    triggerJumpscare() {
        this.isVideoActive = false;
        this.canvas.classList.add("visible");
        this.scareActive = true;

        this.tapeDeck.playDemonReveal();
        this.tapeDeck.playBansheeScream();
        this.voiceEngine.speak(
            I18N[this.currentLang].jumpscare,
            this.currentLang,
            "demon",
        );

        let frame = 0;
        const loop = () => {
            if (!this.scareActive) return;
            this.ctx.fillStyle = `rgba(${Math.random() * 20},0,0,0.2)`;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            const img = this.scareImages[frame % this.scareImages.length];
            if (img && img.complete) {
                const scale =
                    Math.max(
                        this.canvas.width / img.width,
                        this.canvas.height / img.height,
                    ) *
                    (1 + Math.random() * 0.2);
                const x =
                    this.canvas.width / 2 -
                    (img.width / 2) * scale +
                    (Math.random() - 0.5) * 100;
                const y =
                    this.canvas.height / 2 -
                    (img.height / 2) * scale +
                    (Math.random() - 0.5) * 100;

                const blends = [
                    "source-over",
                    "difference",
                    "exclusion",
                    "hard-light",
                    "luminosity",
                ];
                this.ctx.globalCompositeOperation =
                    blends[Math.floor(Math.random() * blends.length)];

                if (Math.random() > 0.5) {
                    this.ctx.drawImage(
                        img,
                        x + 10,
                        y,
                        img.width * scale,
                        img.height * scale,
                    );
                    this.ctx.globalCompositeOperation = "source-over";
                    this.ctx.globalAlpha = 0.5;
                }

                this.ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
                this.ctx.globalAlpha = 1.0;
                this.ctx.globalCompositeOperation = "source-over";

                if (Math.random() > 0.8) {
                    this.canvas.style.filter = `invert(${Math.random()}) contrast(${1 + Math.random()})`;
                } else {
                    this.canvas.style.filter = "none";
                }
            }
            frame = frame + 1 + Math.floor(Math.random() * 3);
            requestAnimationFrame(loop);
        };
        loop();

        setTimeout(() => {
            this.scareActive = false;
            this.canvas.classList.remove("glitch");
            this.canvas.style.filter = "none";
            // After jumpscare ends, show the final message
            this.terminateSession();
        }, 3000);
    }

    triggerParanormalEvent() {
        if (this.scareActive || !this.isVideoActive) return;
        const type = Math.floor(Math.random() * 5);
        switch (type) {
            case 0:
                this.canvas.classList.add("invert");
                this.tapeDeck.playNoise("white", 0.1, 0.1);
                setTimeout(() => this.canvas.classList.remove("invert"), 100);
                break;
            case 1:
                this.drawGhostBox = true;
                this.tapeDeck.playNoise("pink", 0.5, 0.05);
                setTimeout(() => {
                    this.drawGhostBox = false;
                }, 2000);
                break;
            case 2:
                this.canvas.classList.add("bloody");
                this.tapeDeck.playScenario(6);
                setTimeout(() => this.canvas.classList.remove("bloody"), 500);
                break;
            case 3:
                this.canvas.classList.add("glitch-heavy");
                this.tapeDeck.playScenario(2);
                setTimeout(() => this.canvas.classList.remove("glitch-heavy"), 300);
                break;
            case 4:
                if (Math.random() > 0.5) this.tapeDeck.playScenario(4);
                else this.tapeDeck.playScenario(8);
                break;
        }
        setTimeout(
            () => this.triggerParanormalEvent(),
            4000 + Math.random() * 4000,
        );
    }
}

// Boot
window.addEventListener("DOMContentLoaded", () => {
    window.engine = new HybridEngine();
});

// GLOBAL LISTENER FOR MOBILE AUDIO UNLOCK
document.body.addEventListener(
    "click",
    () => {
        if (window.engine) {
            if (window.engine.tapeDeck) window.engine.tapeDeck.resume();
            if (window.engine.voiceEngine) window.engine.voiceEngine.unlock();
            console.log("Audio unlocked.");
        }
    },
    { once: true },
);
