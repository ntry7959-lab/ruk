//my secript by MR RAKUZAN
//not sale this script

require("./database/module")

//GLOBAL PAYMENT
global.storename = "ཀ͜͡RAKUZAN V6̈ V̈6̈👾༑"
global.dana = "243890432038"
global.qris = "https://files.catbox.moe/7gyxf1.jpg"


// GLOBAL SETTING
global.owner = "24106455798"
global.namabot = "ཀ͜͡B̈ÜG̈_̈rakuzan V̈6👾༑"
global.nomorbot = "24106455798"
global.nameCreator = "RAKUZAN V6🌹"
global.linkyt = "https://whatsapp.com/channel/0029VajjpHoGZNCsyVLRRk1f"
global.autoJoin = false
global.antilink = true
global.versisc = '30'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://files.catbox.moe/h4837a.jpg'
global.isLink = "https://whatsapp.com/channel/0029VajjpHoGZNCsyVLRRk1f"
global.packname = "ཀ͜͡RAKUZAN V6👾༑"
global.author = "🌹rakuzan🌹"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})