const { SlashCommandBuilder } = require("discord.js");
const { AzurAPI } = require("@azurapi/azurapi");
const client = new AzurAPI();

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName("azurlane")
    .setDescription(
      "Get info on a ship from Azur Lane taken from the AzurAPI library."
    )
    .addStringOption((option) =>
      option
        .setName("ship")
        .setDescription("The name of the ship you want to search for.")
        .setRequired(true)
    ),
  async execute(interaction) {
    const shipByName = interaction.options.getString("ship");
    const result = client.ships.get(shipByName);
    if (result) {
      return interaction.reply(
        `Ship: ${result.names.en}\nWiki: ${result.wikiUrl}`
      );
    } else {
      return interaction.reply(
        `Ship not found. Please check your spelling and try again.`
      );
    }
  },
};
