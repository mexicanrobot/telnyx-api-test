# Food SMS replier

## Getting Started

### You'll need:
* Node and NPM (Created on node v14.15.4 and NPM v6.14.10)
* [ngrok](https://dashboard.ngrok.com/get-started/setup)

### Steps
* Do npm install
* Run grok on a specified port
* [Follow instructions here to set up your Telnyx Portal account with an SMS number to send and receive messages, and configure the webhook URL with the URL given by grok](https://developers.telnyx.com/docs/v2/messaging/quickstarts/portal-setup)
* Configure your .env file with your API Key and the port specified, like the .env.sample file provided
* Run the project with npm run start
* Now you can send messages and the app will respond depending on your text

## Sources
* Gathered some best practices from [demo-node-telnyx](https://github.com/team-telnyx/demo-node-telnyx)