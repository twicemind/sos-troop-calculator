import { SlashCommandBuilder } from 'discord.js'
import { bot } from '../config.js'

export default {
	data: new SlashCommandBuilder()
		.setName(bot.prefix)
		.setDescription('main command for radr calc bot - calculate march formation')
		.addSubcommand(subcommand => subcommand
			.setName('pvp')
			.setDescription('calculate pvp formation')
			.addStringOption(option => option
				.setName('marchcap')
				.setDescription('Your march capacity')
				.setRequired(true))
			.addStringOption(option => option
				.setName('formation')
				.setDescription('Your requested formation')
				.setRequired(false)
				.addChoices(
					{ name: '60-10-30', value: 'inf_60_rider_10_hun_30' },
					{ name: '60-20-20', value: 'inf_60_rider_20_hun_20' },
					{ name: '60-15-25', value: 'inf_60_rider_15_hun_25' }
				))
		)
		.addSubcommand(subcommand => subcommand
			.setName('trap')
			.setDescription('calculate trap formation')
			.addStringOption(option => option
				.setName('marchcap')
				.setDescription('Your march capacity')
				.setRequired(true))
			.addStringOption(option => option
				.setName('formation')
				.setDescription('Your requested formation')
				.setRequired(false)
				.addChoices(
					{ name: '5-30-65', value: 'inf_5_rider_30_hun_65' },
					{ name: '5-15-80', value: 'inf_5_rider_15_hun_80' },
					{ name: '10-10-80', value: 'inf_10_rider_10_hun_80' }
				))
		),
		
		execute: async () => {}
}