import { TiktokDL } form '@tobyg74/tiktok-api-dl'

async function downloadTikTokVideo(url) {
  try {
    const result = await TiktokDL(url, {
      version: "v1" // version: "v1" | "v2" | "v3"
    });

    console.log(result);
    return result; 
  } catch (error) {
    console.error("Error:", error.message);
   
    throw error; 
  }
}

async function handler.command(command, message) {
  const args = message.body.split(' ');

  if (args.length !== 2 || args[0] !== '.tiktok') {
    console.log('Format perintah tidak valid');
    return;
  }

  const tiktok_url = args[1];

  try {
    const result = await downloadTikTokVideo(tiktok_url);

    const replyMessage = `Video TikTok berhasil diunduh! Hasil: ${result}`;
   
    console.log(replyMessage);
  } catch (error) {
    
    const errorMessage = `Terjadi kesalahan saat mengunduh video TikTok: ${error.message}`;
    
    console.error(errorMessage);
  }
}

// Contoh penggunaan handler command
const command = '.tiktok https://vt.tiktok.com/ZS84BnrU9';
const message = { body: command };
         
handler.help = ['tiktok <url>','tiktokdl <url>', 'tiktokslide <url>']
handler.tags = ['download']
handler.command = /^(tiktok(dl)?(slide|image)?)$/i


handler.premium = false
handler.limit = true

export default handler
