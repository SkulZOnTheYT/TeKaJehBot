import { WAMessageStubType } from '@whiskeysockets/baileys'
import Connection from '../../lib/connection.js'
import db from '../../lib/database.js'

export async function before(m) {
	if (!m.messageStubType || !m.isGroup) return !1
	//if (m.chat == '120363045913621594@g.us' || m.chat == '120363024788895179@g.us') return !1
	let edtr = `@${m.sender.split`@`[0]}`
	if (m.messageStubType == 21) {
		await this.reply(m.chat, `${edtr} mengubah Subject Grup menjadi :\n*${m.messageStubParameters[0]}*`, fkontak, { mentions: [m.sender] })
	} else if (m.messageStubType == 22) {
		await this.reply(m.chat, `${edtr} telah mengubah icon grup.`, fkontak, { mentions: [m.sender] })
	} else if (m.messageStubType == 1 || m.messageStubType == 23 || m.messageStubType == 132) {
		await this.reply(m.chat, `${edtr} *mereset* link grup!`, fkontak, { mentions: [m.sender] })
	} else if (m.messageStubType == 24) {
		await this.reply(m.chat, `${edtr} mengubah deskripsi grup.\n\n${m.messageStubParameters[0]}`, fkontak, { mentions: [m.sender] })
	} else if (m.messageStubType == 25) {
		await this.reply(m.chat, `${edtr} telah mengatur agar *${m.messageStubParameters[0] == 'on' ? 'hanya admin' : 'semua peserta'}* yang dapat mengedit info grup.`, fkontak, { mentions: [m.sender] })
	} else if (m.messageStubType == 26) {
		const ms = /on/.test(m.messageStubParameters[0])
		await this.reply(m.chat, `${edtr} telah *${ms ? 'menutup' : 'membuka'}* grup!\nSekarang ${ms ? 'hanya admin yang' : 'semua peserta'} dapat mengirim pesan.`, fkontak, { mentions: [m.sender] })
		db.data.chats[m.chat].autolevelup = false
	} else if (m.messageStubType == 29) {
		await this.reply(m.chat, `${edtr} telah menjadikan @${m.messageStubParameters[0].split`@`[0]} sebagai admin.`, fkontak, { mentions: [m.sender, m.messageStubParameters[0]] })
	} else if (m.messageStubType == 30) {
		await this.reply(m.chat, `${edtr} telah memberhentikan @${m.messageStubParameters[0].split`@`[0]} dari admin.`, fkontak, { mentions: [m.sender, m.messageStubParameters[0]] })
	} else if (m.messageStubType == 72) {
		await this.reply(m.chat, `${edtr} mengubah durasi pesan sementara menjadi *@${m.messageStubParameters[0]}*`, fkontak, { mentions: [m.sender] })
	} else if (m.messageStubType == 123) {
		await this.reply(m.chat, `${edtr} *menonaktifkan* pesan sementara.`, fkontak, { mentions: [m.sender] })
	}
	return !0
}

export const disabled = false