import db from '../../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `[ ! ] Input teks.`
	if (text == 'default') text = ''
	db.data.datas.teksjadibot = text
	await m.reply(`Berhasil *${command} :*\n\n${text}`)
}

handler.help = ['setteksjadibot']
handler.tags = ['owner']
handler.command = /^(setteksjadibot)$/i

handler.mods = true

export default handler