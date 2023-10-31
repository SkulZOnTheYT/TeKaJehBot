import uploadImage from '../../lib/uploadImage.js'
import { niceBytes } from '../../lib/func.js'

let handler = async (m, { usedPrefix, conn, command }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (!mime || mime == 'conversation') return m.reply('apa yang mau di upload ?')
	let img = await q.download?.()
	let out = await uploadImage(img, true) 	
	if (!out) throw 'Gagal upload media.'
	if (typeof out === 'string' || out instanceof String) m.reply(`[ LINK ]\n${out}`)
    let res = (global.API('xfarr', '/api/converted/remini', { url: out.result.url }, 'apikey'))
    conn.sendMsg(m.chat, { image: {url: res}, caption: ` ` }, { quoted: m })			
}

handler.help = ['remini']
handler.tags = ['tools']
handler.command = /^(rem(ini)?)$/i

handler.limit = true

export default handler