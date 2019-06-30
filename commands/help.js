/*
THIS PROGRAM AND ALL FILES IN IT ARE PROTECTED BY THE GNU AFFERO GENERAL PUBLIC LICENSE VERSION 3.
LICENSING TERMS CAN BE FOUND IN THE LICENSE FILE OR AT https://www.gnu.org/licenses/agpl-3.0.en.html
Under the GNU AFFERO GENERAL PUBLIC LICENSE, you can modify and/or redistribute this project or files, even for commercial use.
HOWEVER, you MUST include the GNU AFFERO GENERAL PUBLIC LICENSE Version 3 in your revision, state your changes, and disclose the source of these files and how to install them.
USING THESE FILES FOR LEARNING PURPOSES OR AS AN EXAMPLE FOR INDIVIDUAL FEATURES, NOT INCLUDING THOSE SPECIFIC TO THIS PROGRAM AND FEW OTHERS, WILL NOT INCRIMINATE YOU IN ANY TERMS.
YOU CAN NOT SUB LICENSE ANY VERSION OF THESE FILES OR THIS PROGRAM, AND THE CREATOR OF THESE FILES IS UNDER NO MEANS LIABLE FOR ANY REVISIONS THAT BREAK THE SOFTWARE, OR LIKEWISE.
*/

const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let helpEmbed = new Discord.RichEmbed()
  .setTitle("Help")
  .setColor("#" + (Math.random().toString(16) + "000000").slice(2, 8))
  .addField("WIP", "This is a WIP, stay tuned for more to come!")
  .addField("Prefix:", "The set prefix is '*' (an astrix).")
  .addField("*help", "Shows you this useful prompt.")
  .addField("*botinfo", "Displays bot info and uptime")
  .addField("*ping", "Pong!")
  .addField("*funfact", "Shows a random fun fact. \n Most funfacts from www.thefactsite.com")
  .addField("*blackjack", "Coming Soon!")
  .addField("*testjoin", "Shows what will happen when a user joins. :)")
  .addField("*testleave", "Shows what will happen when a user leaves. :(")
  .addField("*testkick <@user> <reason>", "Fakes kicking a user.")
  .addField("*testban <@user> <reason>", "Fakes banning a user.")
  .addBlankField()
  .addField("Copyleft License:", "This bot is protected by the GNU AGPL 3.0")
  .attachFiles(['./assets/nerdbot.png'])
  .setFooter("NerdBot | By Wolfalamew#7784", "attachment://nerdbot.png");
  return message.reply(helpEmbed);
}

module.exports.help = {
  name: "help"
}
