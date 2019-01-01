<template>
	
	<div id="timeline" class="highlight-bc">
		<div class="label row">Timeline</div>
		<!-- <div id="thumbnail-track" class="track"></div> -->
		<div id="tracks" class="row">
			<div v-for="(t, key) in tracks" :key="key" class="track" >
				<div class="header highlight-bc">
					<p><strong>{{t.title}}</strong></p>
				</div>
				<div class="content gray-bg" @dragover="dragOver" @drop="addToTrack"></div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	data() {
	  return {
	  	tracks: [{title: "v1", content: []}]
	  }
	},
	methods:{
		addToTrack(event) {
			event.stopPropagation();
			event.preventDefault();

			console.log(event);
			// this.files = event.dataTransfer.files;

		},
		dragOver(event) {
			event.stopPropagation();
			event.preventDefault();

			event.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
		}
	},
	computed:{
	  
	},
	created(){
	  
	},
	mounted(){
	 
	},
	beforeDestroy(){
	  
	},
	watch:{
	}
}
</script>

<style lang="scss">
	#timeline {
		display: flex;
		flex-direction: column;
		border-top-width: 1px;
		border-top-style: solid;
		padding: 4px 20px;

		#tracks {
			width: 100%;
		}

		.track {
			width: 100%;
			height: 50px;
			position: relative;
			display: flex;

			.header {
				flex: 0 1 auto;
				height: 100%;
				width: 40px;
				display: flex;
				border-width: 1px;
				border-style: solid;

				p {
					text-align: center;
					margin: auto;
				}
			}

			.content {
				flex: 1 1 auto;
				height: 100%;
			}
		}
	}
</style>