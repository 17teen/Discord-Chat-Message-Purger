// https://github.com/17teen
// Discord: 7teen#3868

const { Client } = require('discord.js');
const { red, yellow, cyan, greenBright } = require('chalk');
const bot = new Client();
const settings = require('./settings.json');
const prefix = settings.prefix;
const myID = settings.ID;
const token = settings.token;
const trigger = settings.trigger;
const amountDel = settings.bulk;

const title = String.raw`

                             ██████╗    ██████╗ ██╗   ██╗██████╗  ██████╗ ███████╗
                            ██╔════╝    ██╔══██╗██║   ██║██╔══██╗██╔════╝ ██╔════╝
                            ██║         ██████╔╝██║   ██║██████╔╝██║  ███╗█████╗  
                            ██║         ██╔═══╝ ██║   ██║██╔══██╗██║   ██║██╔══╝  
                            ╚██████╗    ██║     ╚██████╔╝██║  ██║╚██████╔╝███████╗
                             ╚═════╝    ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
                                                      
                     
`;
console.log(red(`${title}\n`))
console.log(greenBright(`                                          Made by 7teen#3868`));

bot.on('ready', () => {
    console.log(yellow('                 + ============================================================================== +'));
    console.log(greenBright(`                 |                 [SIGN IN]  :: User: ${bot.user.tag}                        `));
    console.log(greenBright(`                 |                 [PREFIX]   :: Prefix: ${prefix}                            `));
    console.log(greenBright(`                 |                 [TRIGGER]  :: Word: "${trigger}"                           `));
    console.log(greenBright(`                 |                 [X DELETE] :: Amount: ${amountDel}                         `));
    console.log(yellow('                 + ============================================================================== +'));
});

bot.on('message', message => {
    if (message.author.id !== myID) {
        return;
    }

    // Logging

    if (message.content.startsWith(prefix) && message.author.id === myID) {
        console.log(cyan(`[COMMAND RAN] :: ${message.content}`));
    } else if (message.content.startsWith(trigger) && message.author.id === myID) {
        console.log(cyan(`[COMMAND RAN] :: ${message.content}`));
    }

    // Purge CMD

    if (message.content.startsWith(trigger)) {

        message.channel.fetchMessages({ limit: amountDel }).then(msgs => msgs.filter(m => m.author.id === bot.user.id).map(r => r.delete()))

    } else if (message.content.startsWith(prefix + trigger)) {

        message.channel.fetchMessages({ limit: amountDel }).then(msgs => msgs.filter(m => m.author.id === bot.user.id).map(r => r.delete()))
    } else {
        return;
    }

});

bot.login(token);