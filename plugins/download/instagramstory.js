let handler = async (m, { conn, text, args }) => {         
    if (!/https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)/i.test(m.text)) return m.reply(`Example : #instagramstory https://www.instagram.com/p/CITVsRYnE9h/`)
    await m.reply("wait")
    let res = await fetch(global.API('xfarr', '/api/download/igstory', { url: args[0] }, 'apikey'))
    let req = await res.json()
    if (req.status !== 200) return m.reply("sukses" || "error")
      for (let url of req.result) {
      conn.sendFile(m.chat, url, '', '*[ INSTAGRAM STORY DOWNLOADER ]*', m)
    }
  }
     
handler.help = ['instagramstory <url>','igstory <url>']
handler.tags = ['download']
handler.command = /^(igstory|instagramstory)$/i


handler.premium = false
handler.limit = true

export default handler