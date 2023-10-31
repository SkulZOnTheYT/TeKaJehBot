import db from '../../lib/database.js'

let handler = async (m, {text}) => { 
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let anu = db.data.users[who].exp
    let ane = Number(parseInt(text) * 100)
    if (anu < ane) return m.reply(`Exp Kamu Tidak Cukup`)
    db.data.users[m.sender].exp -= 100 * parseInt(text)
    db.data.users[m.sender].uang += parseInt(text)
    let teks = `*Pembelian Sukses*\n*Sisa Exp Kamu ${db.data.users[m.sender].exp}\n*Sisa Uang Kamu* : ${db.data.users[m.sender].uang}`
    conn.sendFThumb(m.chat, 'Change Exp to Limit!!', text.trim(), 'https://i.ibb.co/nwJvTwp/9382f8d5df5b3759ce0eb08857c31b82.jpg', 'https://instagram.com/x.tekajetiga_manjaaa', m, {mentions:text})
}
  
handler.help = ['tukaruang']
handler.tags = ['users']
handler.command = /^(tukaruang)$/i


export default handler
