const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "233241583373,233xxxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_38_04_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDk4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI3LFxuICAgICAgICA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk2LFxuICAgICAgICA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTksXG4gICAgICAgIDQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MixcbiAgICAgICAgNjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNSxcbiAgICAgICAgMzksXG4gICAgICAgIDI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzksXG4gICAgICAgIDU2LFxuICAgICAgICAxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtQ1kxcjZCUUE1RzYwS042TTI5QjdxRDdORlVjQjFaS3FlMStMQzZyNm44PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEX0pmSGFqUlRheUxJbklRWDBOUVlnXCIsXG4gIFwicGhvbmVJZFwiOiBcImZjNmI0NDk2LWFiNmUtNGIyNC05MWI2LWYwZTQ3ZWNmZjhlMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAxMjksXG4gICAgICAyMSxcbiAgICAgIDE4MSxcbiAgICAgIDE2OSxcbiAgICAgIDUwLFxuICAgICAgOTgsXG4gICAgICAxOCxcbiAgICAgIDY2LFxuICAgICAgMTMzLFxuICAgICAgMTcyLFxuICAgICAgMTgwLFxuICAgICAgMjUyLFxuICAgICAgOCxcbiAgICAgIDEwLFxuICAgICAgMTUyLFxuICAgICAgMTUzLFxuICAgICAgNjgsXG4gICAgICAxMzQsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQxLFxuICAgICAgNDYsXG4gICAgICAxMjksXG4gICAgICA3MixcbiAgICAgIDQyLFxuICAgICAgMTExLFxuICAgICAgMTE5LFxuICAgICAgMzksXG4gICAgICAxMDEsXG4gICAgICA1MSxcbiAgICAgIDU1LFxuICAgICAgMTczLFxuICAgICAgMTQ5LFxuICAgICAgMTQyLFxuICAgICAgOTQsXG4gICAgICA0MCxcbiAgICAgIDEyNyxcbiAgICAgIDcyLFxuICAgICAgODEsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOTVSOVJGSFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzI0MTU4MzM3Mzo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjg5NjAxMjkxMzA1MDU6NzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTy9WZ0p3TEVOWDU4TDhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1bjcwTTh6VlpZV0ZFOVI1SVkvNnJZTjJJM1pMKzJFVllwSEtURmFQZ1JJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIks1cFpXYnA0SUdUN0s1MFMrcmxjc0JsSUFweHF3djlrRk1zMDdtQW4veG8yM0lvcS9yQjFZbDY1RjBXZEpkOGpMMXhVSlNpSTE5N0t1MDJhaXU3RGdnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIncvZUdlcTlnUmxmRk9NKzFoQVl5azZoazA4RkJvWHJOaWtkamRDR3J4QW1zajBqVVFjMmtpZTFIMUdIa1NONnU1TFNmUFpxRVp4M1NGRG5rMFNNNmdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0MTU4MzM3Mzo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NDU4Mzg5NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZBUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkFRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVXZOSGFFUlBCQUIvMU9QejlyWlgxWE9jZWxIeWVJNVZrUWdYeDg5WTV1QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMDExNTIxMjYzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDQ1ODM4OTkxNDlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: Miky_Crown_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
