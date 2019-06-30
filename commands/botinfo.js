/*
THIS PROGRAM AND ALL FILES IN IT ARE PROTECTED BY THE GNU AFFERO GENERAL PUBLIC LICENSE VERSION 3.
LICENSING TERMS CAN BE FOUND IN THE LICENSE FILE OR AT https://www.gnu.org/licenses/agpl-3.0.en.html
Under the GNU AFFERO GENERAL PUBLIC LICENSE, you can modify and/or redistribute this project or files, even for commercial use.
HOWEVER, you MUST include the GNU AFFERO GENERAL PUBLIC LICENSE Version 3 in your revision, state your changes, and disclose the source of these files and how to install them.
USING THESE FILES FOR LEARNING PURPOSES OR AS AN EXAMPLE FOR INDIVIDUAL FEATURES, NOT INCLUDING THOSE SPECIFIC TO THIS PROGRAM AND FEW OTHERS, WILL NOT INCRIMINATE YOU IN ANY TERMS.
YOU CAN NOT SUB LICENSE ANY VERSION OF THESE FILES OR THIS PROGRAM, AND THE CREATOR OF THESE FILES IS UNDER NO MEANS LIABLE FOR ANY REVISIONS THAT BREAK THE SOFTWARE, OR LIKEWISE.
*/

const Discord = require("discord.js");
const { version: discordVersion } = require("discord.js");
const Package = require("../package.json")

if(discordVersion.charAt(0) == "v") {
  var discordJSVersion = discordVersion;
} else {
  var discordJSVersion = "v" + discordVersion;
}

if(process.version.charAt(0) == "v") {
  var nodeVersion = process.version;
} else {
  var nodeVersion = "v" + process.version;
}

module.exports.run = async(bot, message, args) => {
  let totalSeconds = Math.floor(bot.uptime / 1000)
  let hours = Math.floor(totalSeconds / 3600)
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60)
  let seconds = totalSeconds % 60

  var statEmbed = new Discord.RichEmbed()
  .setTitle("NerdBot Stats")
  .setColor("#" + (Math.random().toString(16) + "000000").slice(2, 8))
  .setDescription(Package.description)
  .addField("Uptime:", `${hours} hours, ${minutes} minutes, and ${seconds} seconds!`)
  .addField("Author:", "@Wolfalamew#7784", true)
  .addField("Bot Version:", Package.version, true)
  .addField("Discord.JS Version:", discordJSVersion, true)
  .addField("Node.JS API Version:", nodeVersion, true)
  .addBlankField()
  .addField("Copyleft License:", "This bot is protected by the GNU AGPL 3.0");
  return message.reply(statEmbed);
}

module.exports.help = {
  name: "botinfo"
}
