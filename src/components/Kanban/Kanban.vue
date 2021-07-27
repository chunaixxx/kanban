<template>
	<div class="kanban">
		<kanban-modal />
		<button @click="openModal" class="kanban__open-modal-btn">+</button>

		<div class="kanban__columns">
			<kanban-column listName="plan" />
			<kanban-column listName="work" />
			<kanban-column listName="ready" />
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'

import KanbanModal from './KanbanModal'
import KanbanColumn from './KanbanColumn'

export default {
	components: { 
		KanbanModal, 
		KanbanColumn 
	},

	methods: {
		...mapMutations(['openModal'])
	}
}
</script>

<style lang="scss" scoped>
.kanban {
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 20px;

	&__open-modal-btn {
		padding: 3px 50px;
		margin-bottom: 20px;

		font-size: 1.6em;
		color: #fff;
		background-color: var(--green);

		border-radius: 20px;
		cursor: pointer;

		user-select: none;
		border: none;
	}

	&__columns {
		height: 100%;
		width: 100%;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 30px;
	}
}

@media screen and (max-width: 900px) {
	.kanban {
		&__columns {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr;
		}
	}
}
</style>
