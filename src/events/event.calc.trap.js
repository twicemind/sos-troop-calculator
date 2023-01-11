import { Events } from 'discord.js'
import { Color, Embed, Options } from '../embed/embed.js'
import { EmbedContent } from '../embed/embed.content.js'

const formations = [
	{ id: 'inf_5_rider_30_hun_65', 
		name: '5 | 10 | 65 - Infantry 5% | Rider 30% | Hunter 65%', 
		value: {
		inf: 5,
		rider: 30,
		hun: 60
	}},
	{ id: 'inf_5_rider_15_hun_80', 
		name: '5 | 15 | 80 - Infantry 5% | Rider 15% | Hunter 80%', 
		value: {
			inf: 5,
			rider: 15,
			hun: 80
	}},
	{ id: 'inf_10_rider_10_hun_80', 
		name: '10 | 10 | 80 - Infantry 10% | Rider 10% | Hunter 80%', 
		value: {
			inf: 10,
			rider: 10,
			hun: 80
	}}
]

export default {
	name: Events.InteractionCreate,
	once: false,
	description: 'PvP Calc',
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return    
		if (interaction.options.getSubcommand() === 'trap') {
			let marchcap = interaction.options.getString('marchcap')
			let formation = formations[0]

			if (interaction.options.getString('formation')) {
				switch (interaction.options.getString('formation')) {
					case 'inf_5_rider_30_hun_65':
						formation = formations[0]
						break
					case 'inf_5_rider_15_hun_80':
						formation = formations[1]
						break
					case 'inf_10_rider_10_hun_80':
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
			config.title = 'Trap Formation Calculation'
			config.description = 'Calculated by given march capacity and selected formation'
			config.color = new Color().get('blue')
			config.fields = new EmbedContent().trap(marchcap, formation, yourFormation)

			const embed = new Embed(config)
			await interaction.reply({ embeds: [embed], ephemeral: true })
		}
	}
}