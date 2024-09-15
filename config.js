const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="rolithent@gmail.com"
global.location="Gujarat,India."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "null";
global.gurl  =process.env.GURL  || "null";
global.website=process.env.GURL || "null" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Powered by RO|i十ん" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919316022482";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919737825303,918128729017";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_32_09_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg5LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNixcbiAgICAgICAgNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5LFxuICAgICAgICA4NixcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk1LFxuICAgICAgICA4MixcbiAgICAgICAgODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDkyLFxuICAgICAgICAxODksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODEsXG4gICAgICAgIDczLFxuICAgICAgICAxNzcsXG4gICAgICAgIDk4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgODksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MixcbiAgICAgICAgMTEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk2LFxuICAgICAgICA1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUHRtNHN5RlU0UktNZlRRNXJNbW5yNE5aQzB1a3RRU3QwSzBTeFkwNnp2MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxMzIzMjg5MDk1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDEyNkQyRjk5QzRDRkY3RUJGQ0JFMkY3N0U1NDI5MDFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2Mzc4MzQ0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTMyMzI4OTA5NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcwNTA5RkYxMjU1QkJGOTFEMDI0OEZBNjg0MkVENUU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjM3ODM0NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyV09yY2lvaVRQLWhUOF9NanBaUlFBXCIsXG4gIFwicGhvbmVJZFwiOiBcImIwY2IzYjA0LWEzY2EtNGI5OS04ZGRlLTdmNjc3YWRhOWYxMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICAyMzUsXG4gICAgICAyMDEsXG4gICAgICAxMDAsXG4gICAgICAxMSxcbiAgICAgIDEyNyxcbiAgICAgIDEyOSxcbiAgICAgIDE2LFxuICAgICAgMTE3LFxuICAgICAgMjMzLFxuICAgICAgMTQyLFxuICAgICAgMjA3LFxuICAgICAgMTcwLFxuICAgICAgMTIyLFxuICAgICAgMTA2LFxuICAgICAgNjksXG4gICAgICAxMjksXG4gICAgICAyNTAsXG4gICAgICAxMDIsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjYsXG4gICAgICAyNDcsXG4gICAgICAxMjUsXG4gICAgICAyMjAsXG4gICAgICAyMTQsXG4gICAgICAxOTIsXG4gICAgICA3NyxcbiAgICAgIDExMCxcbiAgICAgIDE2MCxcbiAgICAgIDE3MCxcbiAgICAgIDI4LFxuICAgICAgMTYwLFxuICAgICAgNjcsXG4gICAgICA2OSxcbiAgICAgIDExMixcbiAgICAgIDQ2LFxuICAgICAgMSxcbiAgICAgIDk0LFxuICAgICAgMTU5LFxuICAgICAgMTExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZCVFo0TU5HXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxMzIzMjg5MDk1NjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkxOTAyNjYyMjA1NjQ6MTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUmlydXJ1XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1RWbnVrRUVPSGltYmNHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwblJjUTU5MlZXelkxbEswK1NqVGNlVXJ6WEZvdFMwdER2cTFQalB2Slc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpiOEVmR0JGWXdNS08wQnhCK3lVZTZtVzViNGI4TkVnbkJvcVo1ZjMwK1FTQ2tSNDZ3RW41RDhGSmxlakdaSXo1bTkzUWltUFRnaUxsaGxTNitXcUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtVbWw5OXlNMVhVZ3RTemdGVnhmYmlodzVIRkp6NFNtem5SeldUcTNFUHZoRVVxV29ZcUcxVnp2NnZ2cm9LKzNndjdXQTExMkZBeUppdkg3WUxSMGdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjEzMjMyODkwOTU2OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2Mzc4MzQxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUVOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJRU4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5TzN3SGU0ZHUxbHZDdm0weGh6b2xJWUk2dXZRQXlOZTlLdlZ1ak0vYWVVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyOTQ0NDUyMTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzU4MTc4MTE4NlwifSIKfQ=="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" ,
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Riruru",
  ownername:process.env.OWNER_NAME|| "Rolith",


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



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_645517ba6cc5da6efd8216dd8d4592fe295e911d43a43889";
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
