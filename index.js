const discord = require('discord.js'); //required to operate in discord
var bot = new discord.Client();

//commands

bot.on("guildMemberAdd", (GuildMember) =>{

    GuildMember.sendMessage('https://soundcloud.com/neon-insect/aaadiscord1wav/s-MK3MZ');
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
'EMT...end of transmission');

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

        message.channel.sendMessage('BEN = Bionic Exo Neutralization Unit');
    }

    if (message.content == '!manual') {

        message.channel.sendMessage('https://soundcloud.com/neon-insect/aaadiscord1wav/s-MK3MZ');
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
'EMT...end of transmission');
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

        message.author.sendMessage('https://soundcloud.com/neon-insect/neoninsect-lltqslighterremix/s-JdBu6');
    }

    if (message.content == '!bfly') {

        message.channel.sendMessage('before a butterfly can spread the wings, it is small and inconspicious. just like an unwritten melody.');
    
    }
    
    if (message.content == '!trauma') {

        message.channel.sendMessage('placeholder');
    
    }

    if (message.content == '!discord') {

        message.author.sendMessage('https://goo.gl/D88Wnu');
    
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
    
    //characters//
	
	if (message.content == '!jamitch') {
		
		message.channel.sendMessage('Tape 01/20 - Your name is Mitch. You are a weapon dealer for the Resistance. You warez were used during the Battle Droid Leak in 2004');
	}
	
	if (message.content == '!emko') {
		
		message.channel.sendMessage('Tape 02/20 - Your name is Emko. You are a former Imperial officer now working for the Resistance. You coordinated the Battle Droid Leak in 2004');
	}
	
	if (message.content == '!cofa') {
		
		message.channel.sendMessage('Tape 03/20 - Your name is Collin Fandargo. You are a rogue scientist, involved in development and leak of information about the battle droids by the Ministry Of Science in 2004 - The Battle Droid Leak.');
	}

	if (message.content == '!sari') {
		
		message.channel.sendMessage('Tape 04/20 - Your name is S4r1. You are a hacker for the Resistance. You were involved in the Battle Droid Leak in 2004, obtaining the information sent by a rogue scientist');
	}

	if (message.content == '!lee') {
		
		message.channel.sendMessage('Tape 05/20 - Your name is Lee. You are a runner for the Resistance. You were involved in the Battle Droid Leak in 2004, by attacking and holding an imperial network node in Old Manhattan');
	}

	if (message.content == '!cam') {
		
		message.channel.sendMessage('Tape 06/20 - Your name is KV. You are a coder for the Resistance. You were involved in the Battle Droid Leak in 2004. Your Virus MyDOOM attacked several mailing server of the Imperial Network, distracting the net security from the actual leak');
	}

	if (message.content == '!ralf') {
		
		message.channel.sendMessage('Tape 07/20 - Your name is Ralf. You are the rogue scientist who sabotaged the circuits of the droids causing some dysfunctions during the Battle Droid Leak in 2004');
	}

	if (message.content == '!mue') {
		
		message.channel.sendMessage('Tape 08/20 - Your name is Mue. You are a hacker for the Resistance. You were involved in the Battle Droid Leak in 2004');
	}

	if (message.content == '!lemmi') {
		
		message.channel.sendMessage('Tape 09/20 - Your name is Lemmi. You were involved in the Battle Droid Leak in 2004 as a runner for the Resistance. Your were one of the reconnaisance forces to detect incoming Imperial defense forces to the node the hackers used to launch their virusses');
	}

	if (message.content == '!steg') {
		
		message.channel.sendMessage('Tape 10/20 - Your name is Steven. You are a radio broadcaster at Ruins/New Moscow. You were involved in the Battle Droid Leak in 2004 by first reporting the successful hacking attack to the exiled citizens in Ruins');
	}	
	
	if (message.content == '!ropr') {
		
		message.channel.sendMessage('Tape 11/20 - Your name is Robbiemus Prime. A former headhunter for the Empire, who turned rogue during a turn in of a Resistance leader, causing a massacer at the turn in point.');
	}
	
	if (message.content == '!stew') {
		
		message.channel.sendMessage('Tape 12/20 - Your name is Stephanie - a technican of the resistance, who is able to create connections between the imperial and resistance cybernetwork ');
	}
	
	if (message.content == '!tron') {
		
		message.channel.sendMessage('Tape 14/20 - Your name is Tron. You are a privileged citizen of New Moscow living in Old Manhattan. During the Battle Droid Leak in 2004 you have hidden the squad attacking an imperial network node in your area.');
	}
	
	if (message.content == '!aj') {
		
		message.channel.sendMessage('Tape 15/20 - Your name is AJ. You are a weapon smuggler for the Resistance. Your biggest coup was the steal some of the dysfunctional Droids in 2004, your wife Sydney told you about.');
	}
	
	if (message.content == '!sydney') {
		
		message.channel.sendMessage('Tape 15/20 - Your name is Sydney. You heard about the transport of the dysfunctional droids that failed to work after the Battle Droid Leak in 2004, and gave those informations to your husband AJ, who is a smuggler.');
	}
	
	if (message.content == '!valdez') {
		
		message.channel.sendMessage('Tape 16/20 - Your name is Valdez. You are an exiled technican, who examined the stolen Battle Droids after the Leak in 2004.');
	}
	
	if (message.content == '!brunswick') {
		
		message.channel.sendMessage('Tape 17/20 - Your name is Brunswick. The famous runner, who owns a rocketlauncher called Betty. You accidentally destroyed a house during a run against the Empire in 2015. Luckily nobody was hurt');
	}
	
	if (message.content == '!nico') {
		
		message.channel.sendMessage('Tape 18/20 - Your name is Nico. You are an exiled veteran of the Imperial Army, after you shot an officer, before he found out about your friend to go rogue and sabotaging imperial vehicles. After that you flee to Ruins in New Moscow.');
	}
});

bot.login(process.env.BOT_TOKEN); //this is in config.json
