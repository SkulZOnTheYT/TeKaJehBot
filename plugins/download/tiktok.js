 let handler = async (m, { conn, text, args }) => {         
    if (!/https?:\/\/(www\.|v(t|m|vt)\.|t\.)?tiktok\.com/i.test(args[0])) return m.reply(`Example : #tiktok https://vt.tiktok.com/ZSwWCk5o/`)
    await m.reply("Loading...")
    let req = await fetch(global.API('xfarr', '/api/download/tiktoknowm', { url: args[0] }, 'apikey'))
    let json = await req.json()
    if (json.status !== 200) return m.reply("sukses")
    console.log(json.result.url)
    conn.sendFile(m.chat, json.result.url, `${json.result.description}.mp4`, '*[ TIKTOK VIDEO DOWNLOADER ]*', m)
    if (/music/g.test(json.result.url)) {
       let req = await fetch(global.API('xfarr', '/api/download/tiktokslide', { url: args[0] }, 'apikey'))
       let json = await req.json()
       for (let url of json.result.url) {
       console.log(url)
       await conn.sendMsg(m.chat, { image: { url: url }, caption: '*[ TIKTOK SLIDE DOWNLOADER ]*' }, { quoted: m })      
      }
     }
    }

         
handler.help = ['tiktok <url>','tiktokdl <url>', 'tiktokslide <url>']
handler.tags = ['download']
handler.command = /^(tiktok(dl)?(slide|image)?)$/i


handler.premium = false
handler.limit = true

export default handler