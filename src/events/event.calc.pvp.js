import { Events } from 'discord.js'
import { Color, Embed, Options } from '../embed/embed.js'
import { EmbedContent } from '../embed/embed.content.js'

const formations = [
	{ id: 'inf_60_rider_10_hun_30', 
		name: '60 | 10 | 30 - Infantry 60% | Rider 10% | Hunter 30%', 
		value: {
		inf: 60,
		rider: 10,
		hun: 30
	}},
	{ id: 'inf_60_rider_20_hun_20', 
		name: '60 | 20 | 20 - Infantry 60% | Rider 20% | Hunter 20%', 
		value: {
			inf: 60,
			rider: 20,
			hun: 20
	}},
	{ id: 'inf_60_rider_15_hun_25', 
		name: '60 | 15 | 25 - Infantry 60% | Rider 15% | Hunter 25%', 
		value: {
			inf: 60,
			rider: 15,
			hun: 25
	}}
]

export default {
	name: Events.InteractionCreate,
	once: false,
	description: 'PvP Calc',
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return    
		if (interaction.options.getSubcommand() === 'pvp') {
			let marchcap = interaction.options.getString('marchcap')
			let formation = formations[0]

			if (interaction.options.getString('formation')) {
				switch (interaction.options.getString('formation')) {
					case 'inf_60_rider_10_hun_30':
						formation = formations[0]
						break
					case 'inf_60_rider_20_hun_20':
						formation = formations[1]
						break
					case 'inf_60_rider_15_hun_25':
						formation = formations[2]
						break
				}
			}

			const yourFormation = {
				inf: Math.round(marchcap * formation.value.inf / 100)+'',
				rider: Math.round(marchcap * formation.value.rider / 100)+'',
				hun: Math.round(marchcap * formation.value.hun / 100)+''
			}

			const config = new Options().message()
			config.title = 'PvP Formation Calculation'
			config.description = 'Calculated by given march capacity and selected formation'
			config.color = new Color().get('red')
			config.fields = new EmbedContent().pvp(marchcap, formation, yourFormation)

			const embed = new Embed(config)
			await interaction.reply({ embeds: [embed], ephemeral: true })
		}
	}
}