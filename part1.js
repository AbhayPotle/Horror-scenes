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
            { text: "Itâ€™s been empty for years. Thatâ€™s all it is.", type: 'father', pitch: 0.6, rate: 1.1, pause: 1500, color: '#aaaaff', prefix: "Father: " },
            { text: "Daddy? Why is it so cold in here?", type: 'child', pitch: 1.9, rate: 1.2, volume: 1.0, pause: 1500, color: '#ffff00', prefix: "Child: " },
            { text: "Thereâ€™s no windows openâ€¦ I checked them.", type: 'mother', pitch: 1.4, rate: 1.3, volume: 0.9, pause: 1000, color: '#ffccaa', prefix: "Mother: " },
            { text: "Did the house just move?!", type: 'child', pitch: 2.0, rate: 1.5, volume: 1.0, pause: 1500, color: '#ffff00', prefix: "Child: " },
            { text: "It's just... old wood settling. Calm down.", type: 'father', pitch: 0.7, rate: 0.9, pause: 2000, color: '#aaaaff', prefix: "Father: " },
            { text: "Goooo...", type: 'ghost', pitch: 0.01, rate: 0.2, volume: 1.0, pause: 1000, color: '#888888', prefix: "Unknown: " },
            { text: "Did you hear that voice?! Who said that?!", type: 'mother', pitch: 1.6, rate: 1.6, volume: 1.0, pause: 1000, color: '#ffccaa', prefix: "Mother: " },
            { text: "I... I didnâ€™t hear anything. Stay close to me.", type: 'father', pitch: 0.8, rate: 1.3, pause: 2000, color: '#aaaaff', prefix: "Father: " },
            { text: "You donâ€™t belong...", type: 'ghost', pitch: 0.01, rate: 0.4, pause: 500, color: '#888888', prefix: "Unknown: " },
            { text: "It wants us to leave! PLEASE!", type: 'child', pitch: 2.0, rate: 1.6, volume: 1.0, pause: 1500, color: '#ffff00', prefix: "Child: " },
            { text: "SOMEONE IS INSIDE THIS HOUSE!!", type: 'mother', pitch: 1.7, rate: 1.5, volume: 1.0, pause: 1000, color: '#ffccaa', prefix: "Mother: " }
        ]
    },
    hi: {
        landingTitle: "à¤µà¤¾à¤°à¥‡à¤¨ à¤“à¤•à¤²à¥à¤Ÿ à¤®à¥à¤¯à¥‚à¤œà¤¿à¤¯à¤®",
        landingWarning: "à¤šà¥‡à¤¤à¤¾à¤µà¤¨à¥€: à¤¦à¤°à¥à¤¶à¤• à¤µà¤¿à¤µà¥‡à¤• à¤•à¥€ à¤¸à¤²à¤¾à¤¹ à¤¦à¥€ à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆà¥¤",
        landingSubwarning: "à¤²à¤¾à¤‡à¤µ à¤«à¥€à¤¡ à¤®à¥‡à¤‚ à¤…à¤¸à¤¾à¤§à¤¾à¤°à¤£ à¤—à¤¤à¤¿à¤µà¤¿à¤§à¤¿ à¤¶à¤¾à¤®à¤¿à¤² à¤¹à¥ˆà¥¤",
        loading: ["à¤•à¤¨à¥‡à¤•à¥à¤Ÿ à¤¹à¥‹ à¤°à¤¹à¤¾ à¤¹à¥ˆ...", "à¤†à¤µà¤¾à¤¹à¤¨...", "à¤ªà¥€à¤›à¥‡ à¤®à¤¤ à¤¦à¥‡à¤–à¥‹", "à¤µà¥‡ à¤¯à¤¹à¤¾à¤ à¤¹à¥ˆà¤‚"],
        warning: "à¤šà¥‡à¤¤à¤¾à¤µà¤¨à¥€: à¤…à¤¤à¥à¤¯à¤§à¤¿à¤• à¤¡à¤°à¤¾à¤µà¤¨à¥€ à¤¸à¤¾à¤®à¤—à¥à¤°à¥€",
        start: "à¤¹à¤¿à¤®à¥à¤®à¤¤ à¤¹à¥ˆ à¤¤à¥‹ à¤ªà¥à¤°à¤µà¥‡à¤¶ à¤•à¤°à¥‡à¤‚",
        cam: "à¤•à¥ˆà¤®à¤°à¤¾ à¥¦à¥ª: à¤†à¤°à¥à¤Ÿà¤¿à¤«à¥ˆà¤•à¥à¤Ÿ à¤°à¥‚à¤®",
        spiritBox: ["à¤®à¥ˆà¤‚ à¤¤à¥à¤®à¥à¤¹à¥‡à¤‚ à¤¦à¥‡à¤– à¤°à¤¹à¤¾ à¤¹à¥‚à¤...", "à¤ªà¥€à¤›à¥‡ à¤®à¥à¤¡à¤¼à¥‹...", "à¤®à¥à¤à¥‡ à¤…à¤‚à¤¦à¤° à¤†à¤¨à¥‡ à¤¦à¥‹...", "à¤­à¤¾à¤—à¥‹...", "à¤›à¥à¤ªà¤¾ à¤²à¥‹..."],
        jumpscare: "à¤¤à¥à¤®à¥à¤¹à¥‡à¤‚ à¤¢à¥‚à¤à¤¢ à¤²à¤¿à¤¯à¤¾",
        episodeTitle: "à¤à¤ªà¤¿à¤¸à¥‹à¤¡ à¥§",
        episodeSubtitle: "à¤µà¥‹ à¤˜à¤° à¤œà¥‹ à¤¸à¤¾à¤‚à¤¸ à¤²à¥‡à¤¤à¤¾ à¤¹à¥ˆ",
        finalMessage: "à¤¬à¥à¤°à¤¾ à¤¸à¤ªà¤¨à¤¾ à¤…à¤­à¥€ à¤¶à¥à¤°à¥‚ à¤¹à¥à¤† à¤¹à¥ˆ...",
        finalSubmessage: "à¤¸à¥à¤¬à¤¹ à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¥à¤°à¤¾à¤°à¥à¤¥à¤¨à¤¾ à¤•à¤°à¥‡à¤‚à¥¤",
        script: [
            { text: "à¤¯à¤¹à¤¾à¤ à¤§à¥‚à¤² à¤•à¥€ à¤—à¤‚à¤§ à¤† à¤°à¤¹à¥€ à¤¹à¥ˆ... à¤”à¤° à¤•à¥à¤› à¤¸à¤¡à¤¼à¤¾ à¤¹à¥à¤†à¥¤", type: 'mother', pitch: 1.1, rate: 0.7, pause: 2500, color: '#ffccaa', prefix: "à¤®à¤¾à¤: " },
            { text: "à¤¯à¤¹ à¤¸à¤¾à¤²à¥‹à¤‚ à¤¸à¥‡ à¤–à¤¾à¤²à¥€ à¤¹à¥ˆà¥¤ à¤¬à¤¸ à¤‡à¤¤à¤¨à¤¾ à¤¹à¥€ à¤¹à¥ˆà¥¤", type: 'father', pitch: 0.6, rate: 0.8, pause: 2000, color: '#aaaaff', prefix: "à¤ªà¤¿à¤¤à¤¾: " },
            { text: "à¤ªà¤¾à¤ªà¤¾? à¤¯à¤¹à¤¾à¤ à¤‡à¤¤à¤¨à¥€ à¤ à¤‚à¤¡ à¤•à¥à¤¯à¥‹à¤‚ à¤¹à¥ˆ?", type: 'child', pitch: 1.8, rate: 0.9, volume: 1.0, pause: 2000, color: '#ffff00', prefix: "à¤¬à¤šà¥à¤šà¤¾: " },
            { text: "à¤•à¥‹à¤ˆ à¤–à¤¿à¤¡à¤¼à¤•à¥€ à¤¨à¤¹à¥€à¤‚ à¤–à¥à¤²à¥€ à¤¹à¥ˆ... à¤®à¥ˆà¤‚à¤¨à¥‡ à¤šà¥‡à¤• à¤•à¤¿à¤¯à¤¾ à¤¥à¤¾à¥¤", type: 'mother', pitch: 1.3, rate: 0.8, volume: 0.9, pause: 1500, color: '#ffccaa', prefix: "à¤®à¤¾à¤: " },
            { text: "à¤•à¥à¤¯à¤¾ à¤˜à¤° à¤…à¤­à¥€ à¤¹à¤¿à¤²à¤¾?!", type: 'child', pitch: 1.9, rate: 1.0, volume: 1.0, pause: 2000, color: '#ffff00', prefix: "à¤¬à¤šà¥à¤šà¤¾: " },
            { text: "à¤¯à¤¹ à¤¬à¤¸... à¤ªà¥à¤°à¤¾à¤¨à¥€ à¤²à¤•à¤¡à¤¼à¥€ à¤¹à¥ˆà¥¤ à¤¶à¤¾à¤‚à¤¤ à¤¹à¥‹ à¤œà¤¾à¤“à¥¤", type: 'father', pitch: 0.7, rate: 0.7, pause: 2500, color: '#aaaaff', prefix: "à¤ªà¤¿à¤¤à¤¾: " },
            { text: "à¤œà¤¾à¤“...", type: 'ghost', pitch: 0.01, rate: 0.2, volume: 1.0, pause: 1500, color: '#888888', prefix: "à¤…à¤œà¥à¤žà¤¾à¤¤: " },
            { text: "à¤•à¥à¤¯à¤¾ à¤¤à¥à¤®à¤¨à¥‡ à¤µà¤¹ à¤†à¤µà¤¾à¤œà¤¼ à¤¸à¥à¤¨à¥€?! à¤•à¤¿à¤¸à¤¨à¥‡ à¤•à¤¹à¤¾?!", type: 'mother', pitch: 1.5, rate: 0.9, volume: 1.0, pause: 1500, color: '#ffccaa', prefix: "à¤®à¤¾à¤: " },
            { text: "à¤®à¥ˆà¤‚à¤¨à¥‡... à¤®à¥ˆà¤‚à¤¨à¥‡ à¤•à¥à¤› à¤¨à¤¹à¥€à¤‚ à¤¸à¥à¤¨à¤¾à¥¤ à¤®à¥‡à¤°à¥‡ à¤ªà¤¾à¤¸ à¤°à¤¹à¥‹à¥¤", type: 'father', pitch: 0.8, rate: 0.8, pause: 2500, color: '#aaaaff', prefix: "à¤ªà¤¿à¤¤à¤¾: " },
            { text: "à¤¤à¥à¤® à¤¯à¤¹à¤¾à¤ à¤•à¥‡ à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹...", type: 'ghost', pitch: 0.01, rate: 0.3, pause: 1000, color: '#888888', prefix: "à¤…à¤œà¥à¤žà¤¾à¤¤: " },
            { text: "à¤µà¤¹ à¤šà¤¾à¤¹à¤¤à¤¾ à¤¹à¥ˆ à¤•à¤¿ à¤¹à¤® à¤šà¤²à¥‡ à¤œà¤¾à¤à¤! à¤•à¥ƒà¤ªà¤¯à¤¾!", type: 'child', pitch: 1.9, rate: 1.0, volume: 1.0, pause: 2000, color: '#ffff00', prefix: "à¤¬à¤šà¥à¤šà¤¾: " },
            { text: "à¤‡à¤¸ à¤˜à¤° à¤®à¥‡à¤‚ à¤•à¥‹à¤ˆ à¤¹à¥ˆ!!", type: 'mother', pitch: 1.6, rate: 1.0, volume: 1.0, pause: 1500, color: '#ffccaa', prefix: "à¤®à¤¾à¤: " }
        ]
    },
    te: {
        landingTitle: "à°µà°¾à°°à±†à°¨à± à°•à±à°·à±à°¦à±à°° à°®à±à°¯à±‚à°œà°¿à°¯à°‚",
        landingWarning: "à°¹à±†à°šà±à°šà°°à°¿à°•: à°µà±€à°•à±à°·à°•à±à°² à°µà°¿à°šà°•à±à°·à°£ à°¸à±‚à°šà°¿à°‚à°šà°¬à°¡à°¿à°‚à°¦à°¿.",
        landingSubwarning: "à°²à±ˆà°µà± à°«à±€à°¡à±â€Œà°²à±‹ à°ªà°¾à°°à°¾à°¨à°¾à°°à±à°®à°²à± à°¯à°¾à°•à±à°Ÿà°¿à°µà°¿à°Ÿà±€ à°‰à°‚à°¦à°¿.",
        loading: ["à°•à°¨à±†à°•à±à°Ÿà± à°…à°µà±à°¤à±‹à°‚à°¦à°¿...", "à°ªà°¿à°²à±à°¸à±à°¤à±‹à°‚à°¦à°¿...", "à°µà±†à°¨à°•à±à°•à°¿ à°šà±‚à°¡à°•à±", "à°µà°¾à°³à±à°³à± à°‡à°•à±à°•à°¡à±‡ à°‰à°¨à±à°¨à°¾à°°à±"],
        warning: "à°¹à±†à°šà±à°šà°°à°¿à°•: à°…à°¤à±à°¯à°‚à°¤ à°­à°¯à°¾à°¨à°• à°•à°‚à°Ÿà±†à°‚à°Ÿà±",
        start: "à°§à±ˆà°°à±à°¯à°‚ à°‰à°‚à°Ÿà±‡ à°ªà±à°°à°µà±‡à°¶à°¿à°‚à°šà°‚à°¡à°¿",
        cam: "à°¯à°¾à°®à± 04: à°†à°°à±à°Ÿà°¿à°«à°¾à°•à±à°Ÿà± à°°à±‚à°®à±",
        spiritBox: ["à°¨à±‡à°¨à± à°¨à°¿à°¨à±à°¨à± à°šà±‚à°¸à±à°¤à±à°¨à±à°¨à°¾à°¨à±...", "à°µà±†à°¨à°•à±à°•à°¿ à°¤à°¿à°°à±à°—à±...", "à°¨à°¨à±à°¨à± à°²à±‹à°ªà°²à°¿à°•à°¿ à°°à°¾à°¨à°¿à°µà±à°µà°‚à°¡à°¿...", "à°ªà°°à±à°—à±†à°¤à±à°¤à±...", "à°¦à°¾à°•à±à°•à±‹..."],
        jumpscare: "à°¨à°¿à°¨à±à°¨à± à°•à°¨à±à°—à±Šà°¨à±à°¨à°¾à°¨à±",
        episodeTitle: "à°Žà°ªà°¿à°¸à±‹à°¡à± 1",
        episodeSubtitle: "à°Šà°ªà°¿à°°à°¿ à°ªà±€à°²à±à°šà±à°•à±à°¨à±‡ à°‡à°²à±à°²à±",
        finalMessage: "à°ªà±€à°¡à°•à°² à°‡à°ªà±à°ªà±à°¡à±‡ à°®à±Šà°¦à°²à±ˆà°‚à°¦à°¿...",
        finalSubmessage: "à°‰à°¦à°¯à°‚ à°•à±‹à°¸à°‚ à°ªà±à°°à°¾à°°à±à°¥à°¿à°‚à°šà°‚à°¡à°¿.",
        script: [
            { text: "à°ˆ à°ªà±à°°à°¦à±‡à°¶à°‚ à°¦à±à°®à±à°®à± à°µà°¾à°¸à°¨ à°µà°¸à±à°¤à±‹à°‚à°¦à°¿... à°®à°°à°¿à°¯à± à°à°¦à±‹ à°•à±à°³à±à°³à°¿à°¨ à°µà°¾à°¸à°¨.", type: 'mother', pitch: 1.1, rate: 0.7, pause: 2500, color: '#ffccaa', prefix: "à°¤à°²à±à°²à°¿: " },
            { text: "à°‡à°¦à°¿ à°à°³à±à°²à±à°—à°¾ à°–à°¾à°³à±€à°—à°¾ à°‰à°‚à°¦à°¿. à°…à°‚à°¤à±‡.", type: 'father', pitch: 0.6, rate: 0.8, pause: 2000, color: '#aaaaff', prefix: "à°¤à°‚à°¡à±à°°à°¿: " },
            { text: "à°¨à°¾à°¨à±à°¨à°¾? à°‡à°•à±à°•à°¡ à°Žà°‚à°¦à±à°•à± à°‡à°‚à°¤ à°šà°²à±à°²à°—à°¾ à°‰à°‚à°¦à°¿?", type: 'child', pitch: 1.8, rate: 0.9, volume: 1.0, pause: 2000, color: '#ffff00', prefix: "à°ªà°¿à°²à±à°²à°µà°¾à°¡à±: " },
            { text: "à°•à°¿à°Ÿà°¿à°•à±€à°²à± à°à°µà±€ à°¤à±†à°°à°µà°²à±‡à°¦à±... à°¨à±‡à°¨à± à°šà±‚à°¶à°¾à°¨à±.", type: 'mother', pitch: 1.3, rate: 0.8, volume: 0.9, pause: 1500, color: '#ffccaa', prefix: "à°¤à°²à±à°²à°¿: " },
            { text: "à°‡à°²à±à°²à± à°•à°¦à°¿à°²à°¿à°‚à°¦à°¾?!", type: 'child', pitch: 1.9, rate: 1.0, volume: 1.0, pause: 2000, color: '#ffff00', prefix: "à°ªà°¿à°²à±à°²à°µà°¾à°¡à±: " },
            { text: "à°‡à°¦à°¿ à°•à±‡à°µà°²à°‚... à°ªà°¾à°¤ à°šà±†à°•à±à°•. à°¶à°¾à°‚à°¤à°¿à°‚à°šà±.", type: 'father', pitch: 0.7, rate: 0.7, pause: 2500, color: '#aaaaff', prefix: "à°¤à°‚à°¡à±à°°à°¿: " },
            { text: "à°µà±†à°³à±à°³à°‚à°¡à°¿...", type: 'ghost', pitch: 0.01, rate: 0.2, volume: 1.0, pause: 1500, color: '#888888', prefix: "à°¤à±†à°²à°¿à°¯à°¦à±: " },
            { text: "à°† à°¸à±à°µà°°à°‚ à°µà°¿à°¨à±à°¨à°¾à°°à°¾?! à°Žà°µà°°à± à°šà±†à°ªà±à°ªà°¾à°°à±?!", type: 'mother', pitch: 1.5, rate: 0.9, volume: 1.0, pause: 1500, color: '#ffccaa', prefix: "à°¤à°²à±à°²à°¿: " },
            { text: "à°¨à±‡à°¨à±... à°¨à°¾à°•à±‡à°®à±€ à°µà°¿à°¨à°¿à°ªà°¿à°‚à°šà°²à±‡à°¦à±. à°¨à°¾ à°¦à°—à±à°—à°°à±‡ à°‰à°‚à°¡à±.", type: 'father', pitch: 0.8, rate: 0.8, pause: 2500, color: '#aaaaff', prefix: "à°¤à°‚à°¡à±à°°à°¿: " },
            { text: "à°®à±€à°°à± à°‡à°•à±à°•à°¡à°¿à°•à°¿ à°¸à°‚à°¬à°‚à°§à°¿à°‚à°šà°¿à°¨ à°µà°¾à°°à± à°•à°¾à°¦à±...", type: 'ghost', pitch: 0.01, rate: 0.3, pause: 1000, color: '#888888', prefix: "à°¤à±†à°²à°¿à°¯à°¦à±: " },
            { text: "à°®à°¨à°‚ à°µà±†à°³à±à°²à°¿à°ªà±‹à°µà°¾à°²à°¨à°¿ à°†à°¶à°¿à°¸à±à°¤à±‹à°‚à°¦à°¿! à°¦à°¯à°šà±‡à°¸à°¿!", type: 'child', pitch: 1.9, rate: 1.0, volume: 1.0, pause: 2000, color: '#ffff00', prefix: "à°ªà°¿à°²à±à°²à°µà°¾à°¡à±: " },
            { text: "à°ˆ à°‡à°‚à°Ÿà±à°²à±‹ à°Žà°µà°°à±‹ à°‰à°¨à±à°¨à°¾à°°à±!!", type: 'mother', pitch: 1.6, rate: 1.0, volume: 1.0, pause: 1500, color: '#ffccaa', prefix: "à°¤à°²à±à°²à°¿: " }
        ]
    }
};

