const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "bal",
    description: "In an experimental stage.",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

     run: async (client, message, args) => {
        if(message.author.id !== '552537873266507777') return;  
         const member = message.mentions.members.first || message.member;
         
         const bal = await client.bal(member.id);
         const bien_ = new MessageEmbed()
         .setTitle("")
         .setDescription(bal + " coins")
         .setColor("GREEN")
         return message.channel.send(bien_)

     }
    }
