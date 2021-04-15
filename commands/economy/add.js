const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "add",
    description: "In an experimental stage.",
    
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

     run: async (client, message, args) => { 
        if(message.author.id !== '552537873266507777') return;  
        const member = message.mentions.members.first() || message.member;
         
        client.add(member.id, parseInt(args[0]));

        message.channel.send('Successfully added balance.')

     }
    }
