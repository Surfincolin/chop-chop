<template>

	<div id="app">
		<h1>Chop Chop</h1>
		<div class="container">
			<div id="drop-zone" class="drop-zone"></div>
			<output id="file-list"></output>
			<div>
				<input id="startNumber" type="number" name="start" />
				<input id="stopNumber" type="number" name="stop" />
				<button id="update">Update</button>
				<button id="process">Process</button>
			</div>
			<div id="byte_range"></div>
			<div id="byte_content"></div>
			<div class="preview">
				<video id="videoplayer" width="854" height="480" controls>
					<source src="soft.mp4" type="video/mp4">
				</video>
			</div>
			<div id="thumbnail-track" class="track"></div>
			<div class="preview">
				<canvas id="videocanvas" width="854" height="480"></canvas>
			</div>
		</div>
		<button onclick="Edit.capture()">Capture</button> <br/><br/>
	</div>

</template>

