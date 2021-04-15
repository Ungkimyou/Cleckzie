

const client = require('../index')

client.on('ready', () => {
    console.log(`${client.user.username} ✅`)

    const arrayOfStatus = [
        `${client.users.cache.size} users!`,
        `Run *help`,
        `Ready to serve ${client.guilds.cache.size} servers!`,
        `Music features are here.`,
        
        
    ];
    
    let index = 0;
    setInterval(() => {
        if (index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        

        client.user.setActivity(status);
       
        
        index++;
    }, 5000)
})

const clientDetails = {
    guilds: client.guilds.cache.size,
    users: client.users.cache.size,
    channels: client.channels.cache.size
}
