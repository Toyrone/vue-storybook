<template>
	<button type="button" :class="classes" @click="onClick" :style="style">
		<img v-if="icon" class="icon" svg-inline src="../../assets/icons/angle-double-up.svg" />

		{{ label }}
	</button>
</template>

<script src="./button.js"></script>
<style lang="scss" src="./button.scss"></style>
