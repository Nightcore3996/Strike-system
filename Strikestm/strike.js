const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x:" + "| Error, You can't do that");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send(":x:" + "| Error, Please mention an user");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x:" + "| Error, You can't do that");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });


  let warnchannel = message.channel.send(`<@${wUser.id}>, you have received a strike (Reason: \`${reason}\`). Total ${warns[wUser.id].warns} strikes (${warns[wUser.id].warns} in the past 30 days).`)



       /* Only activate this part if you want to get an user banned when he got more than 3 strikes 
       
       
       if(warns[wUser.id].warns == 3 ){
           message.guild.member(wUser).ban(reason);
        message.reply(`<@${wUser.id}> has been banned.`)
         }*/

}

module.exports.help = {
  name: "strike"
}