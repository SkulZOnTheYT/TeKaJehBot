import axios from 'axios'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import { sticker, addExif, video2webp } from '../../lib/sticker.js'
import uploadFile from '../../lib/uploadFile.js'
import uploadImage from '../../lib/uploadImage.js'
import { webp2png } from '../../lib/webp2mp4.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} url*\n\nExample: ${usedPrefix + command} https://t.me/addstickers/JapaneseShiba`
	if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
	let packName = args[0].replace("https://t.me/addstickers/", "")
    let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
    if (!gas.ok) throw m.reply("eror")
    let json = await gas.json()
    m.reply(`*Total stiker:* ${json.result.stickers.length}
*Estimated complete:* ${json.result.stickers.length * 1 } seconds`.trim())
    for (let i = 0; i < json.result.stickers.length; i++) {
        let fileId = json.result.stickers[i].thumb.file_id
        let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
        let jisin = await gasIn.json()
        let stiker = await sticker(false, "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path, `CONVERT BY`, `CLASS || X TKJ 3`)
        let sel = await webp2png(stiker)
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)                        
      }
    m.reply('_*Finished*_')
}

handler.help = ['stickertelegram <url>']
handler.tags = ['download'] 
handler.command = /^(sticker(telegram)?(dl)?)$/i

handler.premium = false
handler.limit = true

export default handler


