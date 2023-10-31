import db from '../../lib/database.js'

let handler = async (m, {text, conn}) => { 
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let anu = db.data.users[who].uang
    let ane = Number(parseInt(text) * 50)
    if (anu < ane) return m.reply(`Balance Kamu Tidak Cukup`)
    db.data.users[m.sender].uang -= 50 * parseInt(text)
    db.data.users[m.sender].limit += parseInt(text)
    let teks = `*Pembelian Sukses*\n*Sisa Limit Kamu ${db.data.users[m.sender].limit}\n*Sisa Uang Kamu* : ${db.data.users[m.sender].uang}`
    conn.sendFThumb(m.chat, 'Buy Your Limit Feature!!', text.trim(), 'https://i.ibb.co/nwJvTwp/9382f8d5df5b3759ce0eb08857c31b82.jpg', 'https://instagram.com/x.tekajetiga_manjaaa', m, {mentions:text})
}
  
handler.help = ['buylimit']
handler.tags = ['users']
handler.command = /^(buylimit)$/i


export default handler
