import db from '../../lib/database.js'
import { plugins } from '../../lib/plugins.js'
import { readMore, ranNumb, padLead, runtimes } from '../../lib/func.js'
import { promises } from 'fs'
import { join } from 'path'
import os from 'os'

let tags = {
	'searching': '*SEARCHING*',
	'download': '*DOWNLOAD*',
	'information': '*INFORMATION*',
	'entertainment': '*ENTERTAINMENT*',
	'primbon': '*PRIMBON*',
    'anime': '*ANIME*',
	'creator': '*CREATOR*',
	'tools': '*TOOLS*',
	'owner': '*OWNER*',
	'game': '*GAME*',
	'rpg': '*RPG GAME*',
	'group': '*GROUP*',
	'anonym': '*ANONYMOUS CHAT*',
	'users': '*USERS*',
}
const defaultMenu = {
	before: `
╔═ *「 X TKJ 3 || WABOT」* 
╠═════════════════❍
║⧐ [👤] Owner : *@${global.mods[0].split("@")[0]}*
║⧐ [🗨️] Community : X TKJ 3
║⧐ [💻] Version : V.1.0.1
╠═════════════════❍
║⧐ [⌛] Runtime : *%uptime*
║⧐ [🕛] OS Uptime : *%osuptime*
╠═════════════════❍
╠═ *「 EVERYONE THANKS 」* 
║⧐ DikaArdianta/Hisoka
║⧐ SyikoXynz/Chiko
║⧐ AzamiBot
║⧐ Nurutomo
║⧐ BochilGaming
║⧐ X TKJ 3
╚═════════════════❍

╭───「 *PROFILMU* 」
├ • Nama  : %name!
├ • Role : *%role*
├ • Limit : *%limit*
╰─────────────%readmore`.trimStart(),
	header: '╭─「 %category 」',
	body: '│ • %cmd',
	footer: '╰────\n',
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, isPrems }) => {
	try {
		let meh = padLead(ranNumb(43), 3)
		//let nais = await (await fetch('https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/menus.json')).json().then(v => v.getRandom())
		let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
		let { limit, role } = db.data.users[m.sender]
		let stats = db.data.stats
		let name = await conn.getName(m.sender).replaceAll('\n','')
		let uptime = runtimes(process.uptime())
		let osuptime = runtimes(os.uptime())
		let help = Object.values(plugins).filter(plugin => !plugin.disabled).map(plugin => {
			return {
				help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
				tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
				prefix: 'customPrefix' in plugin,
				limit: plugin.limit,
				premium: plugin.premium,
				enabled: !plugin.disabled,
			}
		})
		for (let plugin of help)
			if (plugin && 'tags' in plugin)
				for (let tag of plugin.tags)
					if (!(tag in tags) && tag) tags[tag] = tag
		conn.menu = conn.menu ? conn.menu : {}
		let before = conn.menu.before || defaultMenu.before
		let header = conn.menu.header || defaultMenu.header
		let body = conn.menu.body || defaultMenu.body
		let footer = conn.menu.footer || defaultMenu.footer
		let _text = [
			before.replace(': *%limit', `${isPrems ? ': *Infinity' : ': *%limit'}`),
			...Object.keys(tags).map(tag => {
				return header.replace(/%category/g, tags[tag]) + '\n' + [
					...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
						return menu.help.map(help => {
							return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
								.replace(/%islimit/g, menu.limit ? '(Limit)' : '')
								.replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
								.trim()
						}).join('\n')
					}),
					footer
				].join('\n')
			}),
		].join('\n')
		let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
		let replace = {
			'%': '%',
			p: _p, uptime, osuptime,
			me: conn.getName(conn.user.jid),
			github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
			limit, name, role,
			readmore: readMore
		}
		text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
		await conn.sendFThumb(m.chat, 'Here This Command Menu!!', text.trim(), 'https://i.ibb.co/41hdY93/New-Project-8-D6-D66-DA.png', 'https://instagram.com/x.tekajetiga_manjaaa', m, {mentions:text})
		return conn.sendFThumb(m.chat, 'RULES - PENGERTIAN - PENGGUNAAN', `❌ DILARANG MELAKUKAN SPAM/VC/TELEPON\n❌ DILARANG MENYEBARKAN CHAT PRIVASI BOT KE ORANG TIDAK DIKENAL\n❌ DILARANG REPOST ATAU MELAKUKAN REVIEW YOUTUBE\n❌ DILARANG BERMAIN CURANG LIMIT\n❌ GUNAKAN DENGAN SEWAJARNYA JANGAN DIBAWA HATI\n\n✅ SHARE NOMOR BOT(KECUALI PRIVASI CHAT)\n✅ ERROR ATAU ADA KATA-KATA TIDAK JELAS SILAHKAN LAPOR KE OWNER\n✅ KETIKA LIMIT HABIS KALIAN BISA MEMBELINYA ATAU BERMAIN GAME\n✅ SILAHKAN REQUEST FITUR KE OWNER(KECUALI 18+)\n✅ MELAYANI YANG TERBAIK\n✅ MENANYAKAN SOURCE KODE DIOWNER\n✅ ORANG IRI KITA PARTI, GA USAH HARUS SAMA INI ASLI KITA\n\n*CONTOH PENGGUNAAN* :\nMENU EXAMPLE NOTE :\nGUNAKAN PREFIX, EXAMPLE #MENU\nJIKA ADA TANDA *<>/[ ]* DIDALAM MENU ITU BERISI PERINTAH TERTENTU ATAU DUKUNGAN COMMAND, EXAMPLE #sticker <reply image>\nHAPUS TANDA *<>/ [ ]* DAN GANTI DENGAN YANG DIDUKUNG SEPERTI *(TEKS, URL/LINK, QUERY DLL)*, EXAMPLE : #sticker (reply image/video kalian) atau kirim dengan caption #sticker\n\n-SyikoXynz\n*@${global.mods[0].split("@")[0]}*`, 'https://i.ibb.co/FxxvpRR/4b3b2ba2e9e1e68c836e32afb06c5505.jpg', 'https://instagram.com/x.tekajetiga_manjaaa', m, {mentions:'6282178872036@s.whatsapp.net'})
	} catch (e) {
		throw e
	}
}

handler.command = /^((m(enu)?|help)(list)?|\?)$/i

handler.exp = 3

export default handler