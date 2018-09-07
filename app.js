var tmi = require('tmi.js');
var i = 0;
//Put the emote you want to count here
var emote = "TriHard";

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
                },
    identity: {
        //Bot username
        username: "UsernameHere",
        //Bot oauth here
        password: "oauth:000000000000000000"
    },
    //Channels where you want the bot to be active
    channels: ["ChannelNameHere"]
    };

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self) {
          if(message.indexOf(emote) + 1) {
              while (message.indexOf(emote) + 1){
              //message = message.slice(13);
              message = message.replace(emote,'')
              i++;
              }
              //Channel name where the botoutputs the response
            client.action("ChannelNameHere", "counter " + i);
}
          });