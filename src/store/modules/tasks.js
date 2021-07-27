import formateDate from '@/utils/formatDate'

export default {
	state: {
		plan: [],
		work: [],
		ready: [],

		counterTasks: 0,
	},

	mutations: {
		// v-model vuedraggable
		updateList(state, { list, listName }) {
			state[listName] = list;
		},

		addTask(state, { desc, priority}) {
			state.plan.push({
				id: state.counterTasks + 1,
				desc,
				priority,
				date: formateDate(new Date()),
			})

			this.commit('increaseСounterTasks')
		},
		
		editTask(state, { oldTask, newTask }) {
			const list = state[oldTask.listName]
			const index = list.findIndex(el => el.id === oldTask.id)

			if (index !== -1) {
				list[index].desc = newTask.desc
				list[index].priority = newTask.priority
			}
		},

		deleteTask(state, { task, listName }) {
			const list = state[listName]
			const index = list.findIndex(el => el.id === task.id)

			if (index !== -1) {
				list.splice(index, 1)
			}
		},

		transferTask(state, { task, from, to}) {
			this.commit('deleteTask', { task, listName: from})
			state[to].push(task);				
		},

		increaseСounterTasks(state) {
			state.counterTasks += 1;
		}
	},
}