export default {
	state: {
		show: false,

		editableTask: {
			id: null,
			listName: null
		},

		desc: '',
		priority: '1'
	},

	mutations: {
		openModal(state, editableTask) {
			// enable edit mode
			if (editableTask?.id && editableTask?.listName) {
				state.editableTask = {
					id: editableTask.id,
					listName: editableTask.listName
				}

				state.desc = editableTask.desc
				state.priority = editableTask.priority
			}
			
			state.show = true
		},

		saveTask(state) {
			if (this.getters.isEdit) {
				this.commit('editTask', {
					oldTask: state.editableTask,

					newTask: {
						desc: state.desc,
						priority: state.priority
					}
				})
			} else {
				this.commit('addTask', {
					desc: state.desc,
					priority: state.priority,
				})
			}

			this.commit('closeModal')
		},

		// v-model modal inputs
		updateDesc(state, value) {
			state.desc = value
		},

		updatePriority(state, value) {
			state.priority = value
		},
		//

		closeModal(state) {
			state.show = false
			this.commit('clearModal')
		},

		clearModal(state) {
			state.desc = ''
			state.priority = '1'

			state.editableTask = {
				id: null,
				listName: null
			}
		}
	},

	getters: {
		// edit mode
		isEdit(state) {
			return state.editableTask.id && state.editableTask.listName
		}
	}
}