const discord = require('discord.js'); //required to operate in discord
const fs = require('fs'); //reqired for config.json
const config = JSON.parse(fs.readFileSync('config.json', 'utf8')); //required for config.json

var bot = new discord.Client();

//commands

bot.on("guildMemberAdd", (GuildMember) =>{

    GuildMember.sendMessage('https://soundcloud.com/neon-insect/aaadiscord1wav/s-MK3MZ')
    GuildMember.sendCode('My...name...is...BENtwo...\n' +
'I am...an...Encrypted Message Transmission... Droid...-...short EMT...\n' +
'\n' +
'to access proxy...or other stored informations...type "!" and "keyword"...into the commandline...\n'+
'for example...\n'+
'\n'+
'!test \n'+
'\n'+
'access keys...and proxy passwords...do not...work with...space...capital letters...and...non alphanumeric letters \n'+
'\n'+
'to access...these instructions...type "!manual"...into the command line...\n'+
'\n'+
'EMT...end of transmission')

});

bot.on('message', (message) =>{

    if (message.content == 'ping'){
        //message.reply('pong');                 ****== @username pong 
        message.channel.sendMessage('pong');    //***== pong 
    }

    if (message.content == '!test'){

        //message.author.sendMessage('https://neoninsect.bandcamp.com/'); // ** Reply DM

        message.channel.sendMessage('https://neoninsect.bandcamp.com/');
    }

    if (message.content == '!enlia'){

        message.channel.sendMessage('She is wonderful, listen: https://www.youtube.com/watch?v=2lJ0eYm9sMM');
        
    }

    if (message.content == '!leatherstrip' || message.content == '!leaetherstrip'){
        
        message.channel.sendMessage('This is Claus, listen: https://leaetherstrip.bandcamp.com/');
                
    }

    if (message.content == '!neoninsect'){

        message.channel.sendMessage('Servant, Minion or Master? https://neoninsect.bandcamp.com');
    }

    if (message.content == '!mechanicalmoth'){
        
        message.channel.sendMessage('The man who made the ladies sing! http://mechanicalmoth.de/');
    }

    if (message.content == '!twilldistilled'){

        message.channel.sendMessage('Crazy: https://twilldistilled.bandcamp.com/');
    }

    if (message.content == '!ben'){

        message.channel.sendMessage('BEN = Brainwashed Exo Neutralization Unit');
    }

    if (message.content == '!manual') {

        message.channel.sendMessage('https://soundcloud.com/neon-insect/aaadiscord1wav/s-MK3MZ')
        message.channel.sendCode('My...name...is...BENtwo...\n' +
'I am...an...Encrypted Message Transmission... Droid...-...short EMT...\n' +
'\n' +
'to access proxy...or other stored informations...type "!" and "keyword"...into the commandline...\n'+
'for example...\n'+
'\n'+
'!test \n'+
'\n'+
'access keys...and proxy passwords...do not...work with...space...capital letters...and...non alphanumeric letters \n'+
'\n'+
'to access...these instructions...type "!manual"...into the command line...\n'+
'\n'+
'EMT...end of transmission')
    }

    if (message.content == '!iloveyou') {

        message.channel.sendMessage('Do you think it is wise to use the same password twice?');
    }

    if (message.content == '!bentwo') {

        message.reply('!');
    }

    if (message.content == '!glitches') {

        message.channel.sendMessage('Dig deeper // Glitches = slang, Wrong Thinkers. Failures in the eyes of the system.');
    }

    //story content//

    if (message.content == '!av3x') {

        message.author.sendMessage('placeholder');
    }

    if (message.content == '!bfly') {

        message.channel.sendMessage('before a butterfly can spread the wings, it is small and inconspicious. just like an unwritten melody.');
    
    }
    
    if (message.content == '!trauma') {

        message.channel.sendMessage('placeholder');
    
    }

    if (message.content == '!discord') {

        message.author.sendMessage('https://goo.gl/D88Wnu')
    
    }

    if (message.content == '!unease') {

        message.author.sendMessage('https://goo.gl/hfj1ZA');
    
    }

    if (message.content == '!two') {

        message.author.sendMessage('https://cat4glitch.tumblr.com/');
    
    }

    if (message.content == '!sixteen') {

        message.author.sendMessage('placeholder');
    
    }
});

bot.login(process.env.BOT_TOKEN); //this is in config.json
