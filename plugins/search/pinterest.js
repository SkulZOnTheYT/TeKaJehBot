let handler = async (m, { conn, command, text, args, usedPrefix }) => {
	 if (!text) throw `Example : ${usedPrefix + command} eren yeager`
     let req = await fetch(global.API('xfarr', '/api/search/pinterest', { query: args[0] }, 'apikey'))
     let res = await req.json()
     if (res.status !== 200) return m.reply(res?.message || "error")
     let anu = res.result[Math.floor(Math.random() * res.result.length)]
     await conn.sendMsg(m.chat, { image: { url: anu.image }, caption: anu.caption }, { quoted : m })
 }
 
handler.help = ['pinterest <teks>']
handler.tags = ['searching']
handler.command = /^(pinterest?)$/i

export default handler