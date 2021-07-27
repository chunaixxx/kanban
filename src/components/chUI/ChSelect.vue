<template>
	<div class="container">
		<label class="label">
			<span class="tag">{{ label }}</span>

			<select class="select" @change="updateSelect" :value="modelValue">
				<slot></slot>
			</select>

			<div class="border"></div>
		</label>
	</div>
</template>

<script>
export default {
	name: 'ch-select',

	props: {
		modelValue: String,
		placeholder: String,

		type: {
			type: String,
			default: 'text'
		},

		label: String,
	},

	emits: ['update:modelValue'],

	methods: {
		updateSelect(event) {
			this.$emit('update:modelValue', event.target.value)
		}
	},
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

.select {
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
