/*
THIS PROGRAM AND ALL FILES IN IT ARE PROTECTED BY THE GNU AFFERO GENERAL PUBLIC LICENSE VERSION 3.
LICENSING TERMS CAN BE FOUND IN THE LICENSE FILE OR AT https://www.gnu.org/licenses/agpl-3.0.en.html
Under the GNU AFFERO GENERAL PUBLIC LICENSE, you can modify and/or redistribute this project or files, even for commercial use.
HOWEVER, you MUST include the GNU AFFERO GENERAL PUBLIC LICENSE Version 3 in your revision, state your changes, and disclose the source of these files and how to install them.
USING THESE FILES FOR LEARNING PURPOSES OR AS AN EXAMPLE FOR INDIVIDUAL FEATURES, NOT INCLUDING THOSE SPECIFIC TO THIS PROGRAM AND FEW OTHERS, WILL NOT INCRIMINATE YOU IN ANY TERMS.
YOU CAN NOT SUB LICENSE ANY VERSION OF THESE FILES OR THIS PROGRAM, AND THE CREATOR OF THESE FILES IS UNDER NO MEANS LIABLE FOR ANY REVISIONS THAT BREAK THE SOFTWARE, OR LIKEWISE.
*/

const Discord = require("discord.js");
const Config = require("./config.json");
const Token = require("./assets/token.json"); //This includes just the token, for security reasons it is not in the main file.
const fs = require("fs");

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Invalid command.");
    return;
  }

  jsfile.forEach((f, i) => {
    //"props" = properties
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("with " + bot.users.filter(user => !user.bot).size +" friends! | *help", {type: "PLAYING"})
});

bot.on("guildMemberAdd", async member => {
  let welcomeChannel = member.guild.channels.find(`name`, "welcome");
  if(!welcomeChannel) return;
  welcomeChannel.send(`Welcome ${member}!`);
})

bot.on("guildMemberRemove", async member => {
  let welcomeChannel = member.guild.channels.find(`name`, "welcome");
  if(!welcomeChannel) return;
  welcomeChannel.send(`Goodbye, ${member}, you will be missed!`);
})

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let prefix = Config.prefix;
  let msgArray = message.content.split(" ");
  let cmd = msgArray[0];
  if(cmd.slice(0, prefix.length) !== prefix) return;
  let args = msgArray.slice(1);
  let cmdFile = bot.commands.get(cmd.slice(prefix.length));
  if(cmdFile) cmdFile.run(bot, message, args);
})

bot.login(Token.token);
