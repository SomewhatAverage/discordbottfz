// cd C:\Users\tfzam\Desktop\greeter-bot
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
console.log("I am ready!");
client.user.setActivity(`on the MMS Discord server!`);
});
const prefix = "!";
client.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  var msg = message.content.toUpperCase();
  // Exit and stop if it's not there
    if (msg.includes('FUCK') || msg.includes('aSS') || msg.includes('ASSHOLE') || msg.includes('BITCH') || msg.includes('CUNT') || msg.includes('DICK') || msg.includes('MOTHERFUCKER') || msg.includes('NIGGA') || msg.includes('SHIT') || msg.includes('PUSSY') || msg.includes('NIGGER') || msg.includes('F*CK') || msg.includes('SH*T') || msg.includes('F---') || msg.includes('S---')) {
	message.delete(); 
  }
    if (msg.includes('TRIGGERED')) {
		message.channel.send("https://www.tenor.co/y6h0.gif");
	}
  if (message.content === 'Dell') {
	  let modRole = message.guild.roles.find("name", "Mod");
    if(message.member.roles.has(modRole.id)) {
	  message.channel.bulkDelete(100);
    } else {
	return message.reply("You don't have the permissions to do that.");
    }
  }
	if (msg.includes('HELLO')) {
		message.channel.send("Hi! I will be here in the dark corner if you need any help. :wink: :thumbsup::skin-tone-1:");;
	}
	if (msg.includes('BYE')) {
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
let modRole = message.guild.roles.find("name", "Mod");
if(message.member.roles.has(modRole.id)) {
let role = message.guild.roles.find("name", "Muted");
let member = message.mentions.members.first();
member.addRole(role).catch(console.error);
message.channel.sendMessage("Member Muted.");
} else {
return message.reply("You don't have the permission to mute members.");
}
} else
if (command === 'unmute') {
let modRole = message.guild.roles.find("name", "Mod");
if(message.member.roles.has(modRole.id)) {
let role = message.guild.roles.find("name", "Muted");
let member = message.mentions.members.first();
member.removeRole(role).catch(console.error);
message.channel.sendMessage("Member Unmuted.");
} else {
return message.reply("You don't have the permission to unmute members.");
}
} else
  if (command === 'kick') {
    let modRole = message.guild.roles.find("name", "Mod");
    if(message.member.roles.has(modRole.id)) { 
      var member= message.mentions.members.first();
      member.kick().then((member) => {
      message.channel.sendMessage("Member Kicked.");
      }).catch(() => {
      message.channel.send("Failed to kick member.");
      });
    } else {
      return message.reply("You don't have the permission to kick members.");
    }
  } else
if (command === 'ban') {
    let modRole = message.guild.roles.find("name", "Mod");
	if(message.member.roles.has(modRole.id)) { 
      var member= message.mentions.members.first();
      member.ban().then((member) => {
      message.channel.sendMessage("Member Banned.");
      }).catch(() => {
      message.channel.send("Failed to ban member.");
      });
    } else {
      return message.reply("You don't have the permission to kick members.");
    }   
} else
	if (command === 'samsungnote7') {
	message.channel.sendMessage("https://giphy.com/gifs/fire-skeleton-funny-B0yHMGZZLbBxS");
   } else
	if (command === 'getcat') {
	message.channel.sendMessage("http://thecatapi.com/api/images/get?format=src&type=gif");
	} else
	if (command === 'alertadmin') {
		message.channel.sendMessage("**Somebody's Getting Banned Today...** https://www.tenor.co/JZWm.gif <@&354738248460795916>");
	} else
	if (command === 'alertmod') {
	message.channel.sendMessage("Let the force be with the <@&376111381331836939> and you as well...");
	} else
	/* if (command === 'help') {
message.channel.sendMessage("Commands:\n!num - Generates four random numbers to play Mr. Pizzuta's game\n!clear - Clears messages \n!lenny - Posts lenny test \n!mute - Mutes member \n!kick - Kicks member \n!ban - Bans member" */
	if (command === 'quadsolve') {
	function quadratic(a, b, c) {
var firstValue = (-(b) + Math.sqrt(Math.pow(b, 2)-(4*a*c)))/(2*a)
var secondValue = (-(b) - Math.sqrt(Math.pow(b, 2)-(4*a*c)))/(2*a)
message.channel.sendMessage(firstValue);
message.channel.sendMessage(secondValue)
}
	let aVal = args[0];
	let bVal = args[1];
	let cVal = args[2];
	quadratic(aVal, bVal, cVal);
	} else
	if (command === 'forgot') {
	message.channel.sendMessage("@everyone <@" + message.author.id + "> forgot what their homework was... :sob:");
	} else
	if (command === 'birthday') {
	message.channel.sendMessage("Happy Birthday! :birthday: :gift: :tada::wink::balloon:");
	} else
	if (command === 'whynaut') {
	message.channel.sendMessage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqK2Z5YQEJMTmvNn8XYx7L-J_YZryUXCA3OZ6IPgV0OPbqjiT_");
	} else
	if (command === '8ball') {
	if (args[0] == undefined) {
	message.channel.sendMessage("Please ask a question!");
	} else {
	if (args[0] != undefined) {
	var randomNum = Math.floor(Math.random() * (20 - 1)) + 1;
	switch(randomNum) {
	case 1:
	message.channel.sendMessage("Definitely not.");
	break;
	case 2:
	message.channel.sendMessage("If you're lucky, yes.");
	break;
	case 3:
	message.channel.sendMessage("Possibly, but only possibly.");
	break;
	case 4:
	message.channel.sendMessage("Fair chance.");
	break;
	case 5:
	message.channel.sendMessage("If you work for it, it could happen.");
	break;
	case 6:
	message.channel.sendMessage("Maybe. Peut être.");
	break;
	case 7:
	message.channel.sendMessage("You could. I'll have to check back on that one.");
	break;
	case 8:
	message.channel.sendMessage("Probable. Very probable.");
	break;
	case 9:
	message.channel.sendMessage("No to you. Yes to your best friend.");
	break;
	case 10:
	message.channel.sendMessage("Yes, yes, definitely yes!");
	break;
	case 11:
	message.channel.sendMessage("Yes, yes, definitely yes!");
	break;
	case 12:
	message.channel.sendMessage("Of course not. What were you thinking?");
	break;
	case 13:
	message.channel.sendMessage("Yes, it will!");
	break;
	case 14:
	message.channel.sendMessage("Error 978: Did not wish to respond. Please never try again.");
	break;
	case 15:
	message.channel.sendMessage("It is true. I shall command it.");
	break;
	case 16:
	message.channel.sendMessage("When conditions are in favor.");
	break;
	case 17:
	message.channel.sendMessage("No, and never!");
	break;
	case 18:
	message.channel.sendMessage("Once in a blue moon, sadly.");
	break;
	case 19:
	message.channel.sendMessage("My vision is clouded. It could be either.");
	break;
	case 20:
	message.channel.sendMessage("Yes, yes, YES!");
	break;
	}
	}
}
	}
});
client.on('guildMemberAdd', member => {
    member.guild.channels.get('410196865775304704').send('@everyone **<@' + member.user.id + '>** has joined the server!'); 
});
client.on('guildMemberRemove', member => {
    member.guild.channels.get('410196865775304704').send('@everyone **<@' + member.user.id + '>** has left the server.'); 
});
client.login(process.env.BOT_TOKEN);
// Math.floor(Math.random() * (9999 - 1000)) + 1000
