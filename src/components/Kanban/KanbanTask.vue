<template>
	<div class="task" ref="taskEl">
		<header class="task__header">
			<h4 class="task__title">Task #{{ task.id }}</h4>
			
			<div class="task__priority" :class="'task__priority--' + task.priority">
				{{ task.priority }}
			</div>
		</header>

		<main class="task__main">
			<div class="task__desc">{{ task.desc }}</div>
			<div class="task__date">{{ task.date }} </div>
		</main>

		<footer class="task__footer">
			<button v-if="listName !== 'plan'" @click="transferPrev" class="task__btn">
				<span>Prev</span>
			</button>

			<button v-if="listName !== 'ready'" @click="transferNext" class="task__btn">
				<span>Next</span>
			</button>

			<button @click="openModal({ ...task, listName})" class="task__btn" >
				<img
					:src="darkTheme ? require('@/assets/icons/gearDarkTheme.svg') : require('@/assets/icons/gear.svg')"
					class="task__icon"
					alt="Gear"
				/>
			</button>

			<button @click.stop="deleteTask" class="task__btn">
				<img
					:src="darkTheme ? require('@/assets/icons/deleteDarkTheme.svg') : require('@/assets/icons/delete.svg')"
					class="task__icon"
					alt="Delete"
				/>
			</button>
		</footer>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	props: {
		task: Object, 
		listName: String 
	},

	methods: {
		deleteTask() {
			this.$refs.taskEl.classList.add('animate');

			setTimeout(() => {
				this.$refs.taskEl.classList.remove('animate');
				this.$store.commit('deleteTask', { 
					task: this.task,
					listName: this.listName
				})
			}, 300)
		},

		transferPrev() {	
			const to = this.listName === 'ready' ? 'work' : 'plan'
			
			this.$store.commit('transferTask', { 
				task: this.task, 
				from: this.listName, 
				to
			})	
		},

		transferNext() {
			const to = this.listName === 'plan' ? 'work' : 'ready'

			this.$store.commit('transferTask', { 
				task: this.task, 
				from: this.listName, 
				to
			})			
		},

		...mapMutations([ 'openModal' ])
	},

	computed: {
		darkTheme() {
			return this.$store.state.theme.darkTheme
		}
	},
}
</script>

<style lang="scss" scoped>
.task {
	background-color: var(--task-bg);
	color: var(--primary-color);
	
	padding: 15px 20px;

	display: flex;
	flex-direction: column;
	justify-content: stretch;
	cursor: grab;

	transition: opacity .3s ease;
	&.animate {
		opacity: 0;
	}

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

	&__main {
		margin-bottom: 20px;
	}

	&__footer {
		display: flex;
		justify-content: flex-end;
	}

	&__control {
		display: flex;
		justify-content: space-between;
	}

	&__title {
		font-size: 1.3em;
		font-weight: 600;
	}

	&__priority {
		width: 25px;
		height: 25px;
		border-radius: 50%;

		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;

		&--1 {
			background-color: var(--priority-green);
		}

		&--2 {
			background-color: var(--priority-yellow);
		}

		&--3 {
			background-color: var(--priority-red);
		}
	}

	&__desc {
		margin-bottom: 10px;
	}

	&__date {
		font-size: 0.9em;
	}

	&__btn {
		padding: 7px;

		text-align: center;
		font-weight: 100;
		
		background-color: transparent;
		color: var(--primaery-color);
		
		cursor: pointer;
		border: none;
	}

	&__icon {
		width: 20px;
	}
}
</style>
