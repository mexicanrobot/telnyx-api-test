const receivedMessagesIds = new Set();
const sendSMS = require('./sendSMS'); 

function messageHandler(req,res) {
    const data = req.body.data;
    const payload = data.payload;

    if(payload.direction === 'inbound' && !receivedMessagesIds.has(payload.id)) {
        const sendTo = payload.from.phone_number;
        const sendFrom = payload.to[0].phone_number;
        let responseText = "";

        receivedMessagesIds.add(payload.id);
        console.log(`Received ${payload.id} with message: "${payload.text}" from ${payload.from.phone_number}`);
        
        switch(payload.text) {
            case 'pizza':
                responseText = "Chicago pizza is the best";
                break;
            case 'Ice cream':
                responseText = "I prefer gelato";
                break;
            default: 
                responseText = "Please send either the word ‘pizza’ or ‘ice cream’ for a different response";
                break;
        }

        sendSMS(sendFrom,sendTo,responseText);
    }
}

module.exports = messageHandler;