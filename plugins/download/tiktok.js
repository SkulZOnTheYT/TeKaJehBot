import { youtubedl } from '@bochilteam/scraper-sosmed'
import ytdl from 'ytdl-core'
import { niceBytes } from '../../lib/func.js'
import { soundcloud } from '../../lib/scrape.js'
import db from '../../lib/database.js'

export async function before(m, {conn, body}) {
let chat = db.data.settings[conn.user.jid]
if (chat.autodl) {
	if (/https?:\/\/(www\.|v(t|m|vt)\.|t\.)?tiktok\.com/i.test(m.text)) {
  // return m.reply(`Example : #tiktok https://vt.tiktok.com/ZSwWCk5o/`)
    await m.reply("Loading...")
    let req = await fetch(global.API('xfarr', '/api/download/tiktoknowm', { url: m.text }, 'apikey')) //GET INFO TIKTOK NOWM
    let json = await req.json()
    console.log(json.result.url)
    conn.sendFile(m.chat, json.result.url, `${json.result.description}.mp4`, '[ TIKTOK VIDEO DOWNLOADER ]', m)
   }
  }
 }
         
handler.help = ['tiktok <url>','tiktokdl <url>', 'tiktokslide <url>']
handler.tags = ['download']
handler.command = /^(tiktok(dl)?(slide|image)?)$/i


handler.premium = false
handler.limit = true

export default handler
