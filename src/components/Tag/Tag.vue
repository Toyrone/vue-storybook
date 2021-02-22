<template>
	<div class="row">
		<div class="tag">
			<span>{{ text }}</span>
			<img class="tag-close" @click="deleteTag" src="../../assets/icons/close-tag.svg" />
		</div>
	</div>
</template>

<script src="./tag.js"></script>
<style lang="scss" src="./tag.scss"></style>
