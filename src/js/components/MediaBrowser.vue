<template>
	
	<div id="media-browser" class="highlight-bc">
		<div class="label row">Media Browser</div>
		<div id="drop-zone" class="drop-zone row highlight-bc gray-bg" @dragover="dragOver" @drop="addFile"><p>Drop Files Here</p></div>
		<output id="file-list">
			<ul v-if="files">
				<li v-for="(f, index) in files" :key="index" draggable="true"
				@dragstart="dragStart" >
					<strong>{{f.name}}</strong>
					{{f.type || 'n/a'}} - {{(f.size/1024/1024).toFixed(2)}} MBs, <!-- last modified: {{f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a'}} -->
				</li>
			</ul>
			
		</output>
		<!-- <div>
			<input id="startNumber" type="number" name="start" />
			<input id="stopNumber" type="number" name="stop" />
			<button id="update">Update</button>
			<button id="process">Process</button>
		</div>
		<div id="byte_range"></div>
		<div id="byte_content"></div> -->
	</div>

</template>

<script>
export default {
	data() {
	  return {
	  	// files: null
	  }
	},
	methods:{
		addFile(event) {
			event.stopPropagation();
			event.preventDefault();

			// this.files = event.dataTransfer.files;
			this.$store.commit('addFile', event.dataTransfer.files[0]);

		},
		dragOver(event) {
			event.stopPropagation();
			event.preventDefault();

			event.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
		},
		dragStart(event) {
			console.log(event.targetVM);
			console.log(event.target);
			// ev.targetVM
   //         this._dragNode = ev.target
			event.dataTransfer.setData('text/plain',null);
		}
	},
	computed:{
	  files() {
	    return this.$store.getters.files;
	  },
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
	#media-browser {
		flex: 0 1 auto;
		display: flex;
		flex-direction: column;
		border-right-width: 1px;
		border-right-style: solid;
		padding: 4px 20px;
		width: 40%;

		.drop-zone {
			width: 100%;
			height: 75px;
			border-width: 4px;
			border-style: dashed;
			display: flex;

			p {
				margin: auto;
				text-align: center;
			}
		}

	}
</style>