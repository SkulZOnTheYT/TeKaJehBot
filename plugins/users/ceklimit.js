import db from '../../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../../lib/levelling.js'
import fs from 'fs'

let handler = async (m, { conn, isPrems }) => {
	let { limit } = db.data.users[m.sender]
	let lemon
	if (isPrems) {
		lemon = `~ Infinity ~`
	} else {
		lemon = limit
	}
	await m.reply(`*「 LIMIT USER 」*
sisa limit anda : ${lemon}

Tersisa ${db.data.users[m.sender].limit} Limit Lagi\nKamu Dapat Menambah Limit Dengan Bermain Game Atau Membeli\nExample:\n#buylimit <jumlah> (1limit/50uang)\n#buylimitexp <jumlah> (1limit/100exp)`)
}

handler.help = ['ceklimit']
handler.tags = ['users']
handler.command = /^(ceklimit)$/i

export default handler