
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU25KiSBT8l3rVGEGuEtERizQCIiqteNvYhwIKKJVbUSgw4b9vYE9Pz8PubO9bUVTkyZOZ53wHWY4rZKMWKN9BQfANUtQfaVsgoIBpHUWIgCEIIYVAAe5svn7dXi7tQMrVCi2rt4MTQOI5XXlwNq9NnA5stnIXgh68gMcQFLV/xcFvAIsdv4xek5FQkIMzNkbiyJs53WneUXeRzQTWaJrDBhkby5VfwKNHhJjgLNaLBKWIwKuN2jXE5Gv0j46UvEZyWxv7g31IfN1iGMGGBqIHsdwt8r0srhvGxeFe/xr9vMNlqs9JsxJjL6XSli3hWV26x/TIp2I5eVPP5mKH02rKvNOvcJyh0ApRRjFtv6w7UismHAzwtUsSs/DIJYGMNqa3xL8XtTjusJGtoqgONeb4NeJIPUQJu8GxRqcZK7LiNCm7ZXEfxcjRBjlxL3m7S3TV2lS/El+Tj6xc/o/u+TLcTc6DderIkL14Tf1atJJxXPrbdrInR9VvODq/w/l1x3+N/sZkJnzsVFyZ4hbyrjWb1S7d+StevxgLZxGwgc2MhNniTf+kD2lNfsdy4bSb+T5supNtBs7Z19OxcVqstydmXGDocgM711biQAvt05vYzM09vh+Msz8eiUG6Pq3MdMBlx724OByTt8TC5r4ucKy+PDu6oNYKgcI+hoCgGFeUQIrz7HnHi0MAw9sGBQTRp7xgttotx7VvxYW9HI1WQpPwDb8lS3rxzvhUtl1FDWbTuhC6L2AICpIHqKpQaOKK5qR1UFXBGFVA+fOvIchQQ9+N68tx7BBEmFTUy+rimsPww9WPnzAI8jqjmzYLtP6ACFCYz2tEKc7iqtexziAJEnxDWgJpBZQIXiv0s0NEUAgUSmr0c2q1POyF92antSR7RzAE6dMQHAIFjEVOkifCRBZZSeHZP6pv9x4WFsW3DFEwBBnsX4MgwVneYZ/gOKFjcQyG4PoEmDCiwAvsmGPHAsf1EP394yf1vlKIKMTXCihAs+uTLOSmbo3ErrIMQ3ViVYtV8NnqR2bePdmXNzxzz16QXDSNoMlyfhO55KKRijjZpoaWv3WiRkKZyrz8AwhQwDa9ieepGd/qhbcej/eare9Ld4VmXSlZrH5bJ/wodWdNodasGcf0MtlzF53ldP51ybk2mRIqvrX6Sb4Wt9t0MIvcXTi9v/TVQnTDAfq12CiQD2fB8wXJU+/MQZaSlZHwbFKiu2R3I2/rlXVD18KsERYx28rS5GTvFp4wNx16X8qdqLWLmypu78Soi20eM/66iO/vaX5O0/XHFsPPnPUm9p8RRs+l8MOs/zT1nXifPeYx/AXjx5r5l1Gd7krCJ57FmtZJjUvutt34A8qf1FKyuzlDUmwwnSkjrrgvwePx1xAUV0ijnKRAAVXqQzAEJK/7JFtZlP+mkqYylh6/t32FFVU/p2OLU1RRmBZAYSWB4ViZE5n3V2uSFyaskl6BNXtMIvD4G8N9egFrBwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
