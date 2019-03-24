const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');

client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {

    let s2 = message.content.slice(8,message.content.length);

    

   if (message.content.startsWith('!create')) {
       
      // Create a new text channel
      message.guild.createChannel(s2, 'voice')
      .then(console.log)
      .catch(console.error);
    
     // Send "message" to the same channel
       message.channel.send(`Channel: ${s2} has been created`);
  }


});



// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NTU5MDQ4MTI3NDcxMDI2MTg3.D3h3KA.sqHhKw7ga5V8dQrck9GYU1s0oRQ');
