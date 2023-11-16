import { niceBytes } from '../../lib/func.js';

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Usage : *${usedPrefix + command} <url>'`;

    try {
        let anu = await (await fetch(`https://oni-chan.my.id/api/download/tiktok?url=${text}`)).json();
        if (!anu.status) throw Error();
        caption = anu.caption;
        anu = anu.server1;
        let data = anu.url;
        let url = data;
        if (data.fileSize > 400000) return m.reply(`Filesize: ${data.fileSizeH}\nTidak dapat mengirim, maksimal file 400 MB`);

        let txt = `*${caption}*\n\n` +
            `⭔ Resolution : ${anu.quality}\n` +
            `⭔ Size : ${data.fileSizeH}`;

        await conn.sendFile(m.chat, url, `${anu.caption}.mp4`, txt);
    } catch (e) {
        console.log(e);
        throw 'invalid url / server down.';
    }
};

handler.help = ['tiktok <url>', 'tiktokdl <url>', 'tiktokslide <url>'];
handler.tags = ['download'];
handler.command = /^(tiktok(dl)?(slide|image)?)$/i;
handler.premium = false;
handler.limit = true;

export default handler;
