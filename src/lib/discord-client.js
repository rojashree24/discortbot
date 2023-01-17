import Discord from 'discord.js'
import memeCommand from "../commands/meme";

const bot = new Discord.Client({
  //intents:wat r the things that client can listen to new msges
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.DirectMessages
  ],
  partials:[
    Discord.Partials.Channel,Discord.Partials.Message
  ]
});

const commands=new Discord.Collection()
commands.set(memeCommand.data.name,memeCommand)
bot.commands=commands;

//login our client[bot] . client means the bot
bot.login(
  process.env.BOT_TOKEN
)
.then(()=>{
    console.log('Bot Logged in');
})

export default bot;