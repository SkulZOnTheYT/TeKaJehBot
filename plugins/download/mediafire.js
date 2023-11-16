import { niceBytes } from '../../lib/func.js';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try{
    let anu = await (await fetch(`https://oni-chan.my.id/api/download/mediafire-dl?url=${text}`)).json();
    let data = anu.link;
    let url = data;
    if (data.fileSize > 400000) return m.reply(`Filesize: ${data.fileSizeH}\nTidak dapat mengirim, maksimal file 400 MB`);
    let txt = `*${anu.name}*\n\n`
		+ `⭔ Extension : ${anu.ext}\n`
		+ `⭔ Size : ${anu.size}`
    await conn.sendFile(m.chat, url, txt, m)
  } catch (e) {
        console.log(e);
        throw 'invalid url / server down.';
    }
};

handler.help = ['mediafire <url>', 'mediafiredl <url>'];
handler.tags = ['download'];
handler.command = /^(mediafire(dl)?(ext|file)?)$/i;
handler.premium = false;
handler.limit = true;

export default handler;
