export default {
	async calc (marchcap, percent) {
		return Math.round(marchcap * percent / 100)
	}
}