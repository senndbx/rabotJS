const { SlashCommandBuilder } = require('discord.js');

// dubs = (min, max) => Math.random() * (max - min) + min

function dubs(min, max) {
    let dubsResult =  Math.random() * (max - min) + min
    dubsResult = Math.round(dubsResult)
    dubsResult = dubsResult.toString()
    return dubsResult
}

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('dubs')
        .setDescription('RNG, get them dubs!'),
    async execute(interaction) {
        return interaction.reply(`${interaction.user.username} got >>${dubs(100000000, 500000000)}!`);
    },
};