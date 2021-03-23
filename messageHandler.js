const receivedMessagesIds = new Set();
const sendSMS = require('./sendSMS'); 

//messageHandler
// Express method that received a telnyx webhook from sms message, and replies back depending on the text of the message.
// It only replies back for inbound messages, and keeps IDs on a Set to prevent replying multiple times to the same message.
function messageHandler(req,res) {
    const data = req.body.data;
    const payload = data.payload;

    if(payload.direction === 'inbound' && !receivedMessagesIds.has(payload.id)) {
        const sendTo = payload.from.phone_number;
        const sendFrom = payload.to[0].phone_number;

        receivedMessagesIds.add(payload.id);
        console.log(`Received ${payload.id} with message: "${payload.text}" from ${payload.from.phone_number}`);
        
        sendSMS(sendFrom,sendTo,generateReply(payload.text));
    }
}

//Generates reply from message text, in this case we reply to pizza and ice cream with a message, and return a default response otherwise.
function generateReply(text) {
    let reply = "";
    switch(text) {
        case 'pizza':
            reply = "Chicago pizza is the best";
            break;
        case 'Ice cream':
            reply = "I prefer gelato";
            break;
        default: 
            reply = "Please send either the word ‘pizza’ or ‘ice cream’ for a different response";
            break;
    }

    return reply;
}

module.exports = messageHandler;