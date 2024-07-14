//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUpkMmpGbHYrdWNRR3FEZVAraUtNWkJTcEpHbm51VWNzMmNXVmZJUG8zRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXNaWXpjb1I2VnpkTFpkSDdTSUZSTFM2eHljMVZ1TzZoSlpYaE9aSWZIVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQ1ZOVXB1S2NTOTVsa1VtR2pEaFZ1M1hpZldqOUszdDBaU1B1akltNDBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIycWV5WUEzbnIzemsyK05lTGxxRUIzbTF3ekJxSFJWVUpPTU91bFJhRmc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVDWEU2QXFYcUFsR3Jmck95RjZhOGpZUC9ESmxpRUNORjVNYldQSlZrRzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZhV2NDOEQvaUdaOExTRmN1TGRlcFBmSVRHYy80QVpvQk1haEFvZTVrVm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk9PdWRyU0hRNjlDUDVhL2FWdW5UenlabUV1eklhdlJ0aG9SaWVaaE0ycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakVzVm5Nc2lNTWlSNWdlUm0yVkxLMzJYc0RERHRNWitMbmUySHdKeVpIUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllxUmw3UG1UeUIrRHJaYy9GVUd2ZldPUDAwMStQQVI2WDFxS3BhN2lsYitJVVdjZi82NWxiVUhRYkcvdmVYK1J1RXRwdlllT29IN3JKRFJjSUEvVGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ5LCJhZHZTZWNyZXRLZXkiOiJ0Q2RTa003dTJLY2JaVFZENFAyTiswYyt4ays5UGhJYS9JckgyeHNOTStjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXRV9PMFZyYlRRNmp5ZEVmTFpnSE5BIiwicGhvbmVJZCI6ImM5MjE5OTI2LWI4NDctNDRkYi1iODI1LTdhNDliMTA5Y2IxZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzYXlNMXdIanZ1cGJ1UlYrN3pwUVlQeUttZ3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoick1JYXQ5ZGFMdzZkSlRQd3NmWXduUUJRcUx3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNFV1pRUzk2IiwibWUiOnsiaWQiOiIyMzQ4MDY5Mzc0NzY3OjQwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNObWRqYzBCRUp6NXhMUUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJveWpVemtYZ2w3ekQrR2JqSFJacmRVbldVZEMwWUVRRG5NTUhTVkVvYzFjPSIsImFjY291bnRTaWduYXR1cmUiOiJqWUNhdHNDYlcrUmdMVCt5TS9TNFFIYnUwQWhjYzBpbklHSTVTRGIveldtdVhZMTVYVm94K3RuL3BhcmxjN3YvaFpxTGlMZ1pGbGlpRTN3eXRnRlJCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYk02KzFMa25vMUhUcVZEVk9ZVE5pTEs2d25PSGdQV2E3RG1RdUdmOWFqZ0RsWDI3cE8zK1lySncrRVA3Q21XMlJNSDlIdzlYYzhwWXlyejBvU1BHanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDY5Mzc0NzY3OjQwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFNbzFNNUY0SmU4dy9obTR4MFdhM1ZKMWxIUXRHQkVBNXpEQjBsUktITlgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA3OTQyODJ9'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "Lagos,Africa" //ur location

//new
global.botname = '✞ঔৣŦℨĐĐƳঔৣ✞' //ur bot name
global.ownernumber = '2348069374767' //ur owner number
global.ownername = '✞ঔৣŦℨĐĐƳঔৣ✞' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "✞ঔৣŦℨĐĐƳঔৣ✞"
global.author = "✞ঔৣŦℨĐĐƳঔৣ✞"
global.creator = "916909137213@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["916909137213"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
