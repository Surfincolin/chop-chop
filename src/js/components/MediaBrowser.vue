<template>
	
	<div id="media-browser" class="highlight-bc">
		Media Browser
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
	</div>

</template>

<style lang="scss">
	#media-browser {
		flex: 0 1 auto;
		display: flex;
		border-right-width: 1px;
		border-right-style: solid;
		padding: 4px 20px;

	}
</style>