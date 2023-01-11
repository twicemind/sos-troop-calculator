export class EmbedContent {
  pvp(marchcap, formation, yourFormation) {
    return [
			new Field('PvP Formation Setup', formation.name, false),
			new Field('Your March Capacity', marchcap, false),
			new Field('Infantry', yourFormation.inf, true),
			new Field('Rider', yourFormation.rider, true),
			new Field('Hunter', yourFormation.hun, true),
		]
  }
	trap(marchcap, formation, yourFormation) {
    return [
			new Field('Trap Formation Setup', formation.name, false),
			new Field('Your March Capacity', marchcap, false),
			new Field('Infantry', yourFormation.inf, true),
			new Field('Rider', yourFormation.rider, true),
			new Field('Hunter', yourFormation.hun, true),
		]
  }
	help() {
		return [
			new Field('Commands', '\u200B', false),
			new Field('**/calc help**', 'shows this help', false),
			new Field('---------------', '\u200B', false),
			new Field('**/calc pvp**', 'calculate formation by given march capacity and selected formation', false),
			new Field('*marchcap*', 'your march capacity', true),
			new Field('*formation*', 'choice | default 60 / 10 / 30', true),
			new Field('---------------', '\u200B', false),
			new Field('**/calc trap**', 'calculate formation by given march capacity and selected formation', false),
			new Field('*marchcap*', 'your march capacity', true),
			new Field('*formation*', 'choice | default 5 / 30 / 65', true),
		]
	}
}

export class Field {
	constructor (title, value, inline) {
		return { name: title, value: value, inline: inline}
	}
}