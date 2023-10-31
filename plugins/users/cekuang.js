import db from '../../lib/database.js'

let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`Uang Kamu Tersisa ${db.data.users[who].uang}\nKamu Dapat Mendapatkan Uang Dengan Cara Bermain Game\nAtau Kamu Bisa Menukar Exp Dengan Uang\nExample : #tukaruang <jumlah> (100exp/20uang)`)
}
handler.help = ['cekuang']
handler.tags = ['users']
handler.command = /^(cekuang)$/i


export default handler
