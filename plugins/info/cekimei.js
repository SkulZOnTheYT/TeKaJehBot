let handler = async (m, { text, args, command }) => {
	try { 
	    if (!Number(text)) m.reply(`Example : #${command} <angkaimei/nomorimei>`)
		let res = await fetch(global.API('xfarr', '/api/checker/cekimei', { imei: args[0] }, 'apikey'))
        let anu = await res.json()
		if (anu?.status && anu.status !== 200) return m.reply(anu?.message || "error")
		anu = anu.result
		let txt = `*Imei : ${anu.imei}*\n\n`
		txt += `*Device:* ${anu.model.device}\n`
		txt += `*Brand :* ${anu.model.brand}\n`
		txt += `*Model :* ${anu.model.model_nb}`
		await m.reply(txt)
	} catch (e) {
		console.log(e)
		m.reply(`Website Down ! Atau Imei Tidak Ditemukan`)
	}
}

handler.help = ['cekimei']
handler.tags = ['information']
handler.command =  /^(cekimei)$/i

export default handler