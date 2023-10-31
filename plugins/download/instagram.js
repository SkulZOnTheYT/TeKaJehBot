let handler = async (m, { conn, text, args }) => {         
    if (!/https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)/i.test(m.text)) return m.reply(`Example : #instagram https://www.instagram.com/p/CITVsRYnE9h/`)
    await m.reply("wait")
    let res = await fetch(global.API('xfarr', '/api/download/instagram', { url: args[0] }, 'apikey'))
    let req = await res.json()
    if (req.status !== 200) return m.reply("sukses" || "error")
      for (let url of req.result) {
      conn.sendFile(m.chat, url, '', '*[ INSTAGRAM DOWNLOADER ]*', m)
    }
  }
     
handler.help = ['instagram <url>','instagramdl <url>']
handler.tags = ['download']
handler.command = /^(ins(ta)?gram(dl|post)?)$/i


handler.premium = false
handler.limit = true

export default handler