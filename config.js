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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_19_08_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUzLFxuICAgICAgICA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgNixcbiAgICAgICAgNjEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAxLFxuICAgICAgICA0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAzNixcbiAgICAgICAgMjE0LFxuICAgICAgICA1LFxuICAgICAgICA4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA5MixcbiAgICAgICAgODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDksXG4gICAgICAgIDMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDY3LFxuICAgICAgICA1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSkN5cytDdlBTMHFTTWV1d3ZiVUZCeHFzNTJySmtGTGlJZUNweHdDbUw0dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibzlUX1QyTkJTQnUwWnlFeFVsZ1c3UVwiLFxuICBcInBob25lSWRcIjogXCI0OTA4MzY0Ny02NjAxLTQ3Y2QtODIwMi1iYzY2Y2NkZjdkYzFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgNzAsXG4gICAgICAyNCxcbiAgICAgIDE2OCxcbiAgICAgIDE2NixcbiAgICAgIDIxMSxcbiAgICAgIDIyNyxcbiAgICAgIDIxMCxcbiAgICAgIDk4LFxuICAgICAgMTYwLFxuICAgICAgMTE4LFxuICAgICAgMjgsXG4gICAgICAyNDcsXG4gICAgICAzNyxcbiAgICAgIDI1NCxcbiAgICAgIDYzLFxuICAgICAgMTI4LFxuICAgICAgMTA3LFxuICAgICAgMjQ5LFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OSxcbiAgICAgIDY5LFxuICAgICAgMTk4LFxuICAgICAgMTMsXG4gICAgICA1NixcbiAgICAgIDIyNCxcbiAgICAgIDY0LFxuICAgICAgMTgxLFxuICAgICAgMjQ0LFxuICAgICAgMTAsXG4gICAgICAyMjAsXG4gICAgICAyNDIsXG4gICAgICAxNzgsXG4gICAgICA0OCxcbiAgICAgIDI0OCxcbiAgICAgIDgyLFxuICAgICAgNjcsXG4gICAgICA1MixcbiAgICAgIDI0OCxcbiAgICAgIDIyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tUVm51a0VFSkdlZ2JZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMG5SY1E1OTJWV3pZMWxLMCtTalRjZVVyelhGb3RTMHREdnExUGpQdkpXND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4aytxOXRwYmVmZTl3Qi9xbDVxY2l1S1VST1IzU1RrTEwwOXR1WFZIQnhYeGFIZm9ESHJGQmk4UUdvam1oU1hUSWd6aThFTWlZWVVzR0p2T3VkWmJBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWNERYQ1A1ekk5S2IzR2szRFlYdFQwcCtzbFp3SEl4cENuMXRyeDhNOThVU3BsREh4WmpZV0UwbkFxS1c2c1ViZnUram9DKzdqZXNiZ0Vqa0RLbk1CQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjEzMjMyODkwOTU2OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MTkwMjY2MjIwNTY0OjhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxMzIzMjg5MDk1Njo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzODc5MTkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUVOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJRU4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5TzN3SGU0ZHUxbHZDdm0weGh6b2xJWUk2dXZRQXlOZTlLdlZ1ak0vYWVVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyOTQ0NDUyMTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzU4MTc4MTE4NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlFTy5qc29uIjogIntcImtleURhdGFcIjpcIm04Wm5FSDYycnVtNWFjUHpCdmI3ZVhPZW4zZkx1Q2swb3FkTXJ3aG9GM1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI5NDQ0NTIxOSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxNzgyNzE5ODRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJRVAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0ZWkyS1p5elRwYjhDbDB3NzJMakFmNWVWeUpEU0lVWXNTN3Z0eDBKYWlrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyOTQ0NDUyMTksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDQyMjg5NDY0MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlFUS5qc29uIjogIntcImtleURhdGFcIjpcInp6ZE8xL1lnYjZxRWthWmw5Q0hZcDV5RVdtNk9wVGlaeGg1VFZwSzJhUXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI5NDQ0NTIxOSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIzMTg1NTM3NjI2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUVSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQXc0ZzlHOWtmOHJldjZzQzNQanQvVXlaVmsvMDV3S2x0YzZhMUU5S1ZlMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjk0NDQ1MjE5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJRVMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuL1NLZzBCeVBKdFk1N1FLY2dUZ2lzaXFoOFJXVEJwZHFDYVkvYS92QURzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyOTQ0NDUyMTksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjM4NzgxODIwNDlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
