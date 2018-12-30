<template>
	
	<div id="menu" class="highlight-bc">
		<div class="title">Chop Chop</div>
		<div class="button">File</div>
		<div class="button">Edit</div>
		<div class="button">Window</div>
		<div class="button">Help</div>
	</div>

</template>

<style lang="scss">
	#menu {
		flex: 0 1 auto;
		display: flex;
		border-bottom-width: 1px;
		border-bottom-style: solid;
		padding: 4px 20px;

		.title {
			font-weight: bold;
			flex: 0 1 auto;
		}

		.button {
			margin-left: 20px;
			flex: 0 1 auto;
			display: none;
		}
	}
</style>