const { SlashCommandBuilder, inlineCode } = require("discord.js");

function digits(min, max) {
  let dubsResult = Math.random() * (max - min) + min;
  dubsResult = Math.round(dubsResult);
  dubsResult = dubsResult.toString();
  return inlineCode(dubsResult);
}

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName("dubs")
    .setDescription("RNG, get them dubs!"),
  async execute(interaction) {
    return interaction.reply(
      `${interaction.user.username}, check 'em >> ${digits(
        100000000,
        500000000
      )}!`
    );
  },
};
