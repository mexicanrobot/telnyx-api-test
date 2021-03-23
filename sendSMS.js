const config = require('./config');
const telnyx = require('telnyx')(config.API_KEY);

function sendSMS(from,to,text) {
    telnyx.messages.create({
        from,
        to,
        text
    }, (err,response) => {
        if(err) {
            console.log('There was an error sending a reply');
            console.log(err);
        }
        if(response) {
            console.log(`Reply: "${text}" sent succesfully`);
        }
    });
};

module.exports = sendSMS;