var Botkit = require("botkit");

var controller = Botkit.slackbot({
  json_file_store: 'storage',
});

var bot = controller.spawn({
  token: process.env.SLACK_TOKEN,
});

bot.startRTM(function (err, bot, payload) {
  if (err) {
    die(err);
  }
});

controller.hears(['hello', 'salut'], ['direct_message', 'direct_mention', 'mention'], function(bot, message) {
  bot.reply(message, 'Hello!');
});

console.info("Starting bot");
