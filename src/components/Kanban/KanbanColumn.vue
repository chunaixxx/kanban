<template>
	<draggable
		class="column"
		group="tasks"
		v-model="list"
		item-key="id"
		animation="200"
		:setData="modifyDragItem"
	>
		<template #header>
			<h3 class="column__title">
				{{ title }} ({{ amount }})
			</h3>
		</template>
			
		<template #item="{ element }">
			<kanban-task 
				:task="element" 
				:listName="listName" 
				:key="element.id"
			/>
		</template>
	</draggable>
</template>

<script>
import draggable from 'vuedraggable'
import KanbanTask from './KanbanTask'

export default {
	props: {
		listName: String
	},
	
	components: { 
		KanbanTask, 
		draggable 
	},

	methods: {
		// Display none ghost of task
		modifyDragItem: e => e.setDragImage(document.createElement('div'), 0, 0),
	},

	computed: {
		list: {
			get() {
				return this.$store.state.tasks[this.listName]
			},

			set(list) {
				this.$store.commit('updateList', {
					list,
					listName: this.listName
				})
			}
		},

		title() {
			return this.listName[0].toUpperCase() + this.listName.slice(1)
		},

		amount() {
			return this.list.length
		}
	}
}
</script>

<style lang="scss" scoped>
// Vue transition
.modal-animation-enter-active,
.modal-animation-leave-active {
	transition: opacity .3s ease;
}

.modal-animation-enter-from,
.modal-animation-leave-to {
	opacity: 0;
}

.column {
	background-color: var(--column-bg);
	display: flex;
	flex-direction: column;
	gap: 20px;

	padding: 25px;
	height: 100%;
	min-height: 300px;

	&__title {
		font-weight: 700;
		text-align: center;
		color: var(--primary-color)
	}
}

@media screen and (max-width: 900px) {
	.column {
		padding: 15px;
	}
}
</style>
