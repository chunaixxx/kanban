import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import theme from './modules/theme'
import modal from './modules/modal'
import tasks from './modules/tasks'


export default createStore({
	modules: {
		theme,
		modal,
		tasks
	},

	plugins: [createPersistedState({
		paths: ['theme', 'tasks'],
		key: 'storage',
		storage: window.localStorage
	})],
})
