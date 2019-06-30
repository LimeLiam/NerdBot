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
  //*ban @user reason

  let bannedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bannedUser) return message.reply("That user doesn't exist!");
  let reason = args.join(" ").slice(22);

  if(!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply("Hey! You can't do that!");
  if(bannedUser.hasPermission("MANAGE_ROLES"))
    return message.reply("This user can not be banned! They're too powerful!");

  let bannedChannel = message.guild.channels.find(`name`, "staff-log");
  if(bannedChannel) {
    let bannedEmbed = new Discord.RichEmbed()
    .setTitle("Ban")
    .setColor("#f93939")
    .setaddField("Banned User", banedUser)
    .addField("Banned By", message.Author)
    .addField("Reason:", reason);
    bannedChannel.send(bannedEmbed);
  }

  message.guild.member(bannedUser).ban(reason);
}

module.exports.help = {
  name: "ban"
}
