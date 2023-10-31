let handler = async (m, { conn, text, args }) => {         
    if (!/https?:\/\/(www\.|v(t|m|vt)\.|t\.)?tiktok\.com/.test(args[0])) return m.reply(`Example : #tiktokaudio https://vt.tiktok.com/ZSwWCk5o/`)
    await m.reply("Loading...")
       let req = await fetch(global.API('xfarr', '/api/download/tiktokslide', { url: args[0] }, 'apikey'))
       let json = await req.json()      
       await conn.sendFAudio(m.chat, { [/mp3/g.test(command) ? 'document' : 'audio']: { url: json.result.url}, mimetype: 'audio/mpeg', fileName: `${json.result.audio_title}.mp3` }, m, json.result.audio_title, json.result.thumbnail, args[0]) 
     } 
     
handler.help = ['tiktokmp3 <url>','tiktokaudio <url>']
handler.tags = ['download']
handler.command = /^(t(ik)?tok(audio|mp3)?)$/i


handler.premium = false
handler.limit = true

export default handler