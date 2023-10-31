import axios from 'axios'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import { sticker, addExif, video2webp } from '../../lib/sticker.js'
import uploadFile from '../../lib/uploadFile.js'
import uploadImage from '../../lib/uploadImage.js'
import { webp2png } from '../../lib/webp2mp4.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	if (!text) throw `*Example:* ${usedPrefix + command} anime`
	let res = await fetch(global.API('xfarr', '/api/search/stickerwa', { query: args[0] }, 'apikey'))
    let req = await res.json()
    m.reply(`*Total stiker:* ${req.result.sticker.length}
*Estimated complete:* ${req.result.sticker.length * 1 } seconds`.trim())
    for (let i = 0; i < req.result.sticker.length; i++) {
        let fileId = req.result.sticker[i]        
        let stiker = await sticker(false, fileId, `CONVERT BY`, `CLASS || X TKJ 3`)
        let sel = await webp2png(stiker)
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)                        
      }
    m.reply('_*Finished*_')
}

handler.help = ['stickersearch <teks>']
handler.tags = ['searching'] 
handler.command = /^(sticker(search)?(dl)?)$/i

handler.premium = false
handler.limit = true

export default handler


