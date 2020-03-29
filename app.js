const accountSid = process.env.twilioSid;
const authToken = process.env.twilioToken;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12564084423',
     to: '+13474816617'
   })
  .then(message => console.log(message.sid));