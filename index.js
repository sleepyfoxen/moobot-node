
var Discord = require('discord.io');

var bot = new Discord.Client({
    autorun: true,
    email: '',
    password: '',
    username: '',
    token: ''
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    if (message === 'f' || message === 'x')
	bot.sendMessage({
	    to: channelID,
	    message: user + ' pays their respects'
	});
});
