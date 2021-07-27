<template>
	<div class="container">
		<label class="label">
			<span class="tag">{{ label }}</span>
			<input 
				class="input" 
				:placeholder="placeholder"

				:value="modelValue"
				:type="type"
				@input="updateInput"
				v-bind="$attrs"
				ref="input"
			/>
			<div class="border"></div>
		</label>
	</div>
</template>

<script>
export default {
	name: 'ch-input',

	props: {
		modelValue: String,
		placeholder: String,
		label: String,
		type: {
			type: String,
			default: 'text'
		},
		autofocus: Boolean
	},

	emits: ['update:modelValue'],

	methods: {
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value)
		}
	},

	mounted() {
		if (this.autofocus)
			this.$refs.input.focus()
	}
}
</script>

<style lang="scss" scoped>
.container {
	position: relative;
}

.label {
	display: flex;
	flex-direction: column;
}

.input {
	padding: 7px 10px;

	outline: none;
	background-color: #f1f1f1;
	border: 0;

	font-weight: 400;
	font-size: inherit;
	font-family: inherit;

	&:focus + .border:after {
		transform: rotateY(0deg);
	}
}

.tag {
	margin-bottom: 5px;
}

.border {
	position: absolute;
	width: 100%;
	bottom: 0;
	left: 0;

	&:before,
	&:after {
		display: block;
		position: absolute;
		content: '';
		bottom: 0;
		left: 0;

		width: 100%;
		height: 2px;
	}

	&:before {
		background-color: #333;
	}

	&:after {
		transition: transform 0.25s ease;
		transform: rotateY(90deg);
		background-color: #4bb543;
	}
}
</style>
