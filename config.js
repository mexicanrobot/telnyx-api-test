require('dotenv').config();

if(!process.env.API_KEY) {
    console.log('No API key provided, please set one in your .env file with the key API_KEY');
    process.exit();
}

module.exports.API_KEY = process.env.API_KEY;
module.exports.PORT = process.env.PORT || 5432;