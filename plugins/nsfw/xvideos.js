import { niceBytes } from '../../lib/func.js'
import { isUrl } from '../../lib/func.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Just type query what u need :\nUsage : *${usedPrefix + command} step mother*\n\nFor show info / download link :\nUsage : *${usedPrefix + command} xvideos_url*`
	if (isUrl(text)) {
		try {
			let anu = await (await fetch(`https://oni-chan.my.id/api/adults/xvideos-download?link=${text}&apikey=WHra-B087-HYtG`)).json()
			if (!anu.status) throw Error()
			let list = Object.keys(anu.video).toString()
		        let data = anu.video[`${list.includes('36') ? '360p' : list.includes('24') ? '240p' : '144p'}`]
		        let url = await data.download()
		        if (data.fileSize > 400000) return m.reply(`Filesize: ${data.fileSizeH}\nTidak dapat mengirim, maksimal file 400 MB`)
			let txt = `*${anu.title}*\n\n`
		        + `⭔ Watch : ${args[0]}\n`
		        + `⭔ Resolution : ${data.quality}\n`
		        + `⭔ Size : ${data.fileSizeH}`
		        await conn.sendFile(m.chat, url, `${anu.title}.mp4`, txt, 
		} catch (e) {
			console.log(e)
			throw 'invalid url / server down.'
		}
	} else {
		try {
			let anu = await (await fetch(`https://oni-chan.my.id/api/adults/xvideos-search?q=${text}&apikey=kurumi-tosaka`)).json()
			if (!anu.status) throw Error()
			anu = anu.result
			let txt = `Found : *${text}*`
			for (let x of anu) {
				txt += `\n\n*${x.title}*\n`
				+ `*duration :* ${x.duration}\n`
				+ `*quality :* ${x.quality}\n`
				+ `_${x.url}_\n`
				+ `───────────────────`
			}
			await conn.sendMsg(m.chat, { image: { url: anu[0].thumb }, caption: txt }, { quoted : m }).catch(_ => m.reply(txt))
		} catch (e) {
			console.log(e)
			m.reply(`No Result Found.`)
		}
	}
}

handler.menunsfw = ['xvideos <query>', 'xvideosweb <xvideos_link>']
handler.tagsnsfw = ['search']
handler.command = /^(xvideos?(web|search|dl)?)$/i

handler.premium = false
handler.limit = true
handler.nsfw = true

export default handler
