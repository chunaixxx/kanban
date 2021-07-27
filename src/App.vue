<template>
	<header class="header">
		<a href="/" class="header__logo">chunai</a>

		<Toggle v-model="darkTheme" class="header__theme-toggle" />
	</header>

	<main class="main">
		<Kanban />
	</main>

	<footer class="footer">
		<div class="footer__social">
			<a class="social-link" href="https://t.me/chunaichunai" target="_blank">Telgram</a>
			|
			<a class="social-link" href="https://github.com/chunaixxx" target="_blank">Github</a>
		</div>
	</footer>
</template>

<script>
import Kanban from '@/components/Kanban/Kanban'
import Toggle from '@vueform/toggle'

export default {
	components: { Kanban, Toggle },

	computed: {
		darkTheme: {
			get() {
				return this.$store.state.theme.darkTheme
			},

			set(value) {
				this.$store.commit('toggleTheme', value)
			}
		}
	},

	beforeMount() {
		this.$store.dispatch('initTheme')
	},
}
</script>

<style src="@vueform/toggle/themes/default.css"></style>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:root {
	--page-bg: #fafafa;
	--header-bg: #fff;
	--task-bg: #eee;
	--modal-bg: #fff;

	--primary-bg: #fff;
	--primary-color: #222;

	--green: #4bb543;
	--column-bg: #ddd;

	--priority-green: #4bb543;
	--priority-yellow: #fcd12a;
	--priority-red: #ff313a;

	--box-shadow: rgba(99, 99, 99, 0.2);

	--ch-btn: #4bb543;
}

:root.dark {
	--page-bg: #222;
	--header-bg: #111;
	--task-bg: #111;

	--primary-bg: #111;
	--primary-color: #fff;

	--column-bg: #333;

	--box-shadow: rgba(0, 0, 0, 0.2);
}

body {
	background-color: var(--page-bg);
	font-family: 'Montserrat', 'Arial', sans-serif;
}

#app {
	min-height: 100vh;
	display: grid;
	grid-template-rows: 70px 1fr 50px;
}

a {
	text-decoration: none;
	color: inherit;
}

.header {
	padding: 0 50px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: var(--header-bg);
	color: var(--primary-color);
	box-shadow: 0px 2px 8px 0px var(--box-shadow);

	&__logo {
		font-size: 1.4em;
	}

	&__theme-toggle {
		--toggle-bg-on: #bbb;
		--toggle-bg-off: #222;
		--toggle-border-on: transparent;
		--toggle-border-off: transparent;
	}
}

.main {
	padding: 0 50px;
}

.footer {
	padding: 0 50px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	color: var(--primary-color);
}
</style>
