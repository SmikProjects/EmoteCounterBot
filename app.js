var tmi = require('tmi.js');
var i = 0;
var emoteText = "TriHard"; //Put the emote you want to count here
var channelName = "ChannelNameHere"; //Put the channel name here
var subEmote = true;  //Is the emote a subemote

var options =
{
    options: {debug: true},
    connection: {
        cluster: "aws",
        reconnect: true
                },
    identity: {
        username: "UsernameHere",             //Bot username
        password: "oauth:000000000000000000"  //Bot oauth here
              },
    channels: [channelName] //Channels where you want the bot to be active
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self) {
          if(message.indexOf(emoteText) + 1) {
              while (message.indexOf(emoteText) + 1){
              message = message.replace(emoteText,'')
              i++;
              }
            client.action(channelName, "counter " + i); //Channel name where the botoutputs the response
}
          });
