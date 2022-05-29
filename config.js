//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//

const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoReadAll = false // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemsthumb.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemsthumb.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemsthumb.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemsthumb.jpg") //ur thumb pic

//owmner v card
global.owner = ['916909137213'] //ur owner number
global.ownername = "🦄Dream Guy Xeon"
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//damtabase
global.rkyt = []
global.banUser = []
global.banchat = []
global.ntilink = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.wlcm = []
global.gcrevoke = []

//bot bomdy
global.botname = "Cheems Bot MD V3" //ur bot name
global.ownertag = "@916909137213" //ur anti-tag number
global.watermark = "Xeon Bot Inc." //ur watermark
global.dogeemoji = "🐕" //ur emoji
global.packname = "🦄Dream Guy Xeon" //ur sticker pack name
global.author = "Cheems Bot MD V3" //ur sticker author name
global.sessionName = "session"
global.linkgrupss = "https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS" //ur gc link
global.linkgrupss2 = "https://chat.whatsapp.com/LS1Xx3fSqg7FpSYSjKWhL5" //ur gc link2
global.websitex = "https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A" //ur website
global.botscript = "https://github.com/DGXeon/CheemsBot-MD3" //ur script link
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Done✓',
    admin: 'This feature is only for admins!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This feature is only for owner',
    group: 'This feature is only for groups!',
    private: 'This feature is only for private chats!',
    bot: 'This feature is only for bot',
    wait: 'In process...',
    linkm: 'Where is the link?',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})