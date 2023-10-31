import db from '../../lib/database.js'


export async function before(m, conn) {
// auto reject call when user call
   this.ev.on("call", async (json) => {
         for (const id of json) {
            if (id.status === "offer") {
               let msg = await conn.sendMessage(id.chat, {
                  text: `Maaf untuk saat ini, Kami tidak dapat menerima panggilan, entah dalam group atau pribadi\n\nJika Membutuhkan bantuan ataupun request fitur silahkan chat owner :p`,
                  mentions: [id.from],
               })
              db.data.users[id.chat].banned = true
               await conn.rejectCall(id.from, id.chat)
            }
      }
   })   
}