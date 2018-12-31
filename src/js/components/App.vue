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
		return {

		}
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
		if (window.File && window.FileReader && window.FileList && window.Blob) {
		  // Great success! All the File APIs are supported.
		  console.log("File APIs Supported");
		} else {
		  alert('The File APIs are not fully supported in this browser. Please switch to a more modern browser to us this app.');
		}
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