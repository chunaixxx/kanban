<template>
	<transition name="modal-animation">
		<div v-if="showModal" @click="closeModal" class="modal">
			<form @click.stop @submit.prevent="addTask" class="modal__inner">
				<ch-input
					v-model="desc"
					label="Descripition"
					class="modal__input"
					autofocus
				/>

				<ch-select v-model="priority" label="Priority" class="modal__select">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</ch-select>

				<div class="modal__btns">
					<ch-button @click="closeModal" class="modal__btn modal__btn--white">
						Cancel
					</ch-button>

					<ch-button type="submit" @click="saveTask" class="modal__btn modal__btn--dark">
						Save
					</ch-button>
				</div>
			</form>
		</div>
	</transition>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
	methods: {
		...mapMutations(['closeModal', 'saveTask'])
	},

	computed: {
		// v-model with vuex
		desc: {
			get() {
				return this.$store.state.modal.desc
			},
			
			set(value) {
				this.$store.commit('updateDesc', value)
			}
		},

		priority: {
			get() {
				return this.$store.state.modal.priority
			},

			set(value) {
				this.$store.commit('updatePriority', value)
			}
		},
		//

		showModal() {
			return this.$store.state.modal.show
		},
	}
}
</script>

<style lang="scss" scoped>
.modal {
	position: fixed;
	top: 0;
	left: 0;

	height: 100vh;
	width: 100vw;

	background-color: rgba(0, 0, 0, 0.4);
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--primary-color);

	&__inner {
		padding: 30px 70px;
		max-width: 400px;
		width: 100%;
		font-size: 1.1em;

		box-shadow: var(--box-shadow) 0px 8px 24px;
		background-color: var(--primary-bg);
		border-top: 3px solid var(--green);

		cursor: default;
	}

	&__input {
		margin-bottom: 20px;
	}

	&__select {
		margin-bottom: 20px;
	}

	&__btns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}

	&__btn {
		&--white {
			background-color: #fff;
			color: #222;

			border: 1px solid #111;
		}

		&--dark {
			background-color: #fff;
			color: #222;

			border: 1px solid #111;
		}
	}
}

// Vue transition
.modal-animation-enter-active,
.modal-animation-leave-active {
	transition: opacity .3s ease;
}

.modal-animation-enter-from,
.modal-animation-leave-to {
	opacity: 0;
}

.modal-animation-enter-active .modal__inner,
.modal-animation-leave-active .modal__inner {
	transition: all .3s ease;
}

.modal-animation-enter-from .modal__inner {
	transform: translateY(-20px);
	border-top: 3px solid #fff;
}

.modal-animation-leave-to .modal__inner {
	transform: translateY(20px);
	border-top: 3px solid #fff;
}
</style>
