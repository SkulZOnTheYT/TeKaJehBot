import db from '../../lib/database.js'

let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`Exp Kamu Tersisa ${db.data.users[who].exp}\nKamu Dapat Mendapatkan Exp Dengan Cara Bermain Game\nAtau Kamu Dapat Menukarkan Dengan Uang Atau Membeli limit Dengan Exp\nExample:\n#tukaruang <jumlah> (20uang/100exp)\n#buylimitexp <jumlah> (1limit/100exp)`)
}
handler.help = ['cekexp']
handler.tags = ['users']
handler.command = /^(cekexp)$/i


export default handler