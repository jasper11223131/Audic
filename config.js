
module.exports = {
    botName: 'Kyvex',
    botDescription: 'Your ultimate music bot for seamless audio streaming on Discord.',
    embedColor: '#7289DA',
    supportServer: process.env.SUPPORT_SERVER || 'https://discord.gg/76W85cu3Uy',
    botLogo: 'https://cdn.discordapp.com/avatars/1345000685959385108/2c31b55472a58cf99a1f2296e16d5b65.png?size=4096',
    genius: {
        apiKey: process.env.GENIUS_API_KEY,
        clientToken: process.env.GENIUS_CLIENT_TOKEN,
        accessToken: process.env.GENIUS_ACCESS_TOKEN
    },
    emojis: {
        play: '<:pjad_play:1161595194630754334>',
        pause: '<:pjad_pause:1161595191573094453>',
        stop: '<:pjad_stop:1161595204302798909>',
        skip: '<:pjad_skip:1161595199617781822>',
        previous: '<:pjad_previous:1161595200985104467>',
        repeat: '<:Spotify_Repeat:1386267862410203258>',
        loading: 'https://cdn.discordapp.com/emojis/1386268137074196511.webp?size=56&animated=true',
        error: '<:error:1386268405426028594>',
        success: 'https://cdn.discordapp.com/emojis/1386268639824576634.webp?size=56&animated=true',
        queue: '<:pjad_queue:1161595196425912331>',
        music: '<:musicnote:1386269005035077794>',
        volume: '<:pjad_volup:1161595209289830450>',
        time: '<:Spotify_Time:1386269512877342740>',
        user: '<:Spotify_Profile:1386269753622138891>',
        duration: '<:Spotify_Time:1386269512877342740>',
        spotify: '<:Spotify:1372461002536386712>',
        soundcloud: '<:Soundcloud:1372460999982059600>',
        youtube: '<:youtube:1372461005401100359>',
        loopTrack: '<:pjad_loop:1161595185357135892>',
        loopQueue: '<:pjad_loop:1161595185357135892>',
        loopOff: ''
    },
    lavalink: {
        nodes: [
            {
                name: 'Main',
                url: 'lavalink.jirayu.net:13592',
                auth: 'youshallnotpass',
                secure: false,
                retryAmount: 5,
                retryDelay: 3000
            }
        ]
    }
};
