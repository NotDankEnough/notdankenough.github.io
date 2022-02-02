(function () {
    const emoteList = [
        {
            name: "TriHard",
            emote3x: "https://static-cdn.jtvnw.net/emoticons/v2/120232/default/dark/3.0"
        },
        {
            name: "Hmm, today I will visit this website",
            emote3x: "https://cdn.7tv.app/emote/60b14a737a157a7f3360fb32/3x"
        },
        {
            name: "I visited this website...",
            emote3x: "https://cdn.7tv.app/emote/6145e8b10969108b671957ec/3x",
        },
        {
            name: "Who is this website for?",
            emote3x: "https://cdn.7tv.app/emote/605305868c870a000de38b6f/3x"
        },
        {
            name: "ARE YOU A GIRL?",
            emote3x: "https://cdn.7tv.app/emote/60aead234b1ea4526d33cda9/3x"
        },
        {
            name: "VI VON",
            emote3x: "https://cdn.7tv.app/emote/603c89cbbb69c00014bed23e/3x"
        },
        {
            name: "I C U BAJS",
            emote3x: "https://static-cdn.jtvnw.net/emoticons/v2/116051/default/dark/3.0"
        }
    ]
    const randomEmote = emoteList[Math.floor(Math.random() * emoteList.length)];

    document.getElementById("emote").innerHTML = `<img src="${randomEmote.emote3x}" title="${randomEmote.name}" width=18 style="opacity: 0.5;">`;

})();