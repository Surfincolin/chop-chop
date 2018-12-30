<template>
	
	<div id="output" class="highlight-bc">
		<div class="video">
			<video id="videoplayer" width="854" height="480" controls>
				<source src="soft.mp4" type="video/mp4">
			</video>
		</div>
		<div class="preview">
			<canvas id="videocanvas" width="854" height="480"></canvas>
		</div>
		<button onclick="Edit.capture()">Capture</button> <br/><br/>
	</div>

</template>

<style lang="scss">
	#output {
		flex: 0 1 auto;
		display: flex;
		border-left-width: 1px;
		border-left-style: solid;
		padding: 4px 20px;

		.video {

		}

		.preview {
			display: none;
		}

		button {
			display: none;
		}
	}
</style>