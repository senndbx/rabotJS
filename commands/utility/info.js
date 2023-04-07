const { SlashCommandBuilder, codeBlock } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Get info about a user or a server!")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("user")
        .setDescription("Info about a user")
        .addUserOption((option) =>
          option.setName("target").setDescription("The user")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("server").setDescription("Info about the server")
    ),
  async execute(interaction) {
    const subcommand = interaction.options.getSubcommand();
    const stats = codeBlock(
      "asciidoc",
      `= STATISTICS =
• Users      :: ${interaction.client.users.cache.size}
• Servers    :: ${interaction.client.guilds.cache.size}
• Channels   :: ${interaction.client.channels.cache.size}
• Commands   :: ${interaction.client.commands.size}
• Uptime     :: ${interaction.client.uptime}ms
• Ping       :: ${interaction.client.ws.ping}ms
• Memory     :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`
    );
    if (subcommand === "user") {
      const user = interaction.options.getUser("target");
      if (user) {
        return interaction.reply(
          `${user.username}'s avatar: ${user.displayAvatarURL({
            dynamic: true,
          })}`
        );
      }
      return interaction.reply(
        `Your avatar: ${interaction.user.displayAvatarURL()}`
      );
    } else if (subcommand === "server") {
      return interaction.reply(stats);
    }
  },
};
