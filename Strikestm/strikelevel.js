const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!warns) warns[wUser.id] = {
    warns: 0
  };
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x:" + "| Error, You can't do that");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply(":x:" + "| Error, Please first mention an user");
  let warnlevel = warns[wUser.id].warns;

  message.channel.send(`<@${wUser.id}> detains a total of: **${warnlevel} strikes**`); {


}}

module.exports.help = {
  name: "strikelevel"
}