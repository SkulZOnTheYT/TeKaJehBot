let handler = async (m, { text, args }) => {
	try {
     	if (!Number(text)) return m.reply(`Example : #${command} <nomornik/angkanik>`)
		let res = await fetch(global.API('xfarr', '/api/checker/ceknik', { nik: args[0] }, 'apikey'))
        let anu = await res.json()
		if (anu?.status && anu.status !== 200) return m.reply(anu?.message || "error")
		anu = anu.result
		let txt = `*Nik : ${anu.nik}*\n\n`
		txt += `*Jenis Kelamin:* ${anu.kelamin}\n`
		txt += `*Lahir :* ${anu.lahir}\n`
		txt += `*Provinsi :* ${anu.provinsi}\n`
		txt += `*Kota Kab :* ${anu.kotakab}\n`
		txt += `*Kecamatan :* ${anu.kecamatan}\n`
		txt += `*Kode Pos :* ${anu.tambahan.kodepos}`
		await m.reply(txt)
	} catch (e) {
		console.log(e)
		m.reply(`Website Down ! Atau Nik Tidak Ditemukan`)
	}
}

handler.help = ['ceknik']
handler.tags = ['information']
handler.command =  /^(ceknik)$/i

export default handler