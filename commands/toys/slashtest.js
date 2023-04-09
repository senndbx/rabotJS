const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("slashtest")
    .setDescription("Test slash commands.")
    .addStringOption((option) =>
      option.setName("input").setDescription("Input to test.")
    )
    .addStringOption((option) =>
      option.setName("number").setDescription("Number to test.")
    ),
  async execute(interaction) {
    const string = interaction.options.getString("input");
    const number = interaction.options.getString("number");
    return interaction.reply(
      `String: ${string ? string : "No string provided."}
      \nNumber: ${number ? number : "No number provided."}`
    );
  },
};
