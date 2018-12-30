<template>

	<div id="app">
		<Menu></Menu>
		<div class="row">
			<MediaBrowser></MediaBrowser>
			<Output></Output>
		</div>
		<div class="row">
			<Timeline></Timeline>			
		</div>
	</div>

</template>

<script>
import Menu from './Menu.vue';
import MediaBrowser from './MediaBrowser.vue';
import Output from './Output.vue';
import Timeline from './Timeline.vue';

export default {
	data() {

	},
	computed: {

	},
	components: {
		Menu,
		MediaBrowser,
		Output,
		Timeline
	},
	methods: {

	},
	created() {

	},
	watch: {

	}
}

</script>

<style scoped lang="scss">
	#app {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		position: relative;
	}

	.row {
		width: 100%;
		flex: 1 1 40%;
		display: flex;
	}
	
</style>