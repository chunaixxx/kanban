export default {
	state: {
		darkTheme: false
	},

	mutations: {
		toggleTheme(state, value) {
			if (value)
				document.querySelector('html').classList.add('dark')
			else
				document.querySelector('html').classList.remove('dark')

			state.darkTheme = value
		}
	},

	actions: {
		initTheme(state) {
			const cachedTheme = JSON.parse(localStorage.getItem('storage'))?.theme?.darkTheme || false

			state.commit('toggleTheme', cachedTheme)
		}
	}
}
