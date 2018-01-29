// cd C:\Users\tfzam\Desktop\greeter-bot
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("I am ready!");
});
const prefix = "!";
client.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  var msg = message.content.toUpperCase();
  // Exit and stop if it's not there
    if (msg.includes('FUCK') || msg.includes('ASS') || msg.includes('ASSHOLE') || msg.includes('BITCH') || msg.includes('CUNT') || msg.includes('DICK') || msg.includes('MOTHERFUCKER') || msg.includes('NIGGA') || msg.includes('SHIT') || msg.includes('PUSSY') || msg.includes('NIGGER') || msg.includes('F*CK') || msg.includes('SH*T') || msg.includes('F---') || msg.includes('S---')) {
	message.delete(); 
  }
  if (message.content === 'Dell') {
	  let modRole = message.guild.roles.find("name", "Mod");
    if(message.member.roles.has(modRole.id)) {
	  message.channel.bulkDelete(100);
    } else {
	return message.reply("You don't have the permissions to do that.");
    }
  }
	if (msg === 'HELLO') {
		message.channel.send("Hi! I will be here in the dark corner if you need any help. :wink: :thumbsup::skin-tone-1:");;
	}
	if (msg === 'BYE') {
		message.channel.send("Good Bye. :pensive:");
	}
  if (!message.content.startsWith(prefix)) return;

  if (command == 'num') {
    message.channel.send(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
  } else
  if (command === "clear") {
  let x = args[0];
	message.channel.bulkDelete(x);
} else
 if (command === 'lenny') {
	 message.channel.send("( ͡° ͜ʖ ͡°)");
 } else
if (command === 'mute') {
let role = message.guild.roles.find("name", "Muted");
let member = message.mentions.members.first();
member.addRole(role).catch(console.error);
} else
  if (command === 'kick') {
    let modRole = message.guild.roles.find("name", "Mod");
    if(message.member.roles.has(modRole.id)) { 
      let kickMember = message.guild.member(message.mentions.users.first());
      message.guild.member(kickMember).kick();
      message.channel.sendMessage("Member Kicked.");
    } else {
      return message.reply("You don't have the permission to kick members.");
    }
  } else
if (message.content === 'ban') {
    let modRole = message.guild.roles.find("name", "Mod");
    if(message.member.roles.has(modRole.id)) { 
      let banMember = message.guild.member(message.mentions.users.first());
      message.guild.member(banMember).ban();
      message.channel.sendMessage("Member banned.");
    } else {
      return message.reply("You don't have the permission to ban members.");
	} else
	if (message.content === 'samsungnote7') {
	message.channel.sendMessage(https://giphy.com/gifs/fire-skeleton-funny-B0yHMGZZLbBxS);
   }
}
});
client.login(process.env.BOT_TOKEN);
// Math.floor(Math.random() * (9999 - 1000)) + 1000
