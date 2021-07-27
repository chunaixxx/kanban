<template>
	<button class="ch-button" :type="type">
		<div class="ch-button__inner" @click.stop v-bind="$attrs">
			<slot></slot>
		</div>
	</button>
</template>

<script>
export default {
	name: 'ch-button',

	props: {
		type: {
			type: String,
			default: 'button'
		}
	}
}
</script>

<style lang="scss">
.ch-button {
	font-weight: 400;
	font-size: inherit;
	font-family: inherit;

	cursor: pointer;
	position: relative;
	
	outline: none;
	border: none;

	transition: color .25s ease;

	&:before {
		height: 0%;
		width: 100%;
		left: 0;
		bottom: 0;
		content: '';
		position: absolute;

		background-color: var(--ch-btn);
		transition: height .25s ease;
	}

	&:hover {
		color: #fff;
	}

	&:hover:before, &:focus:before {
		height: 100%;
	}

	&__inner {
		position: relative;
		z-index: 2;
		padding: 4px 30px;
	}
}
</style>
