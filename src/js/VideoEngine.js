

import MP4Box from './mp4box.all.min.js';

class VideoEngine {
	constructor() {
		console.log("Video Engine Created");
		console.log(MP4Box);
	}

	processVideo(videoFile) {
		this._processWithMP4Box(videoFile);
	}

	_processWithMP4Box(file) {
		console.log("Begin MP4 Processing");

		var mp4boxfile = MP4Box.createFile();

		mp4boxfile.onError = function(e) {
			console.log("MP4Box had an error.");
			console.log(e);
		}
		mp4boxfile.onReady = function(info) {
			console.log("MP4Box onReady!!!");
			console.log(info);
		}

		var reader = new FileReader();

		reader.onload = function(event) {
			var arrayBuffer = this.result;
			arrayBuffer.fileStart = 0;
			mp4boxfile.appendBuffer(arrayBuffer);
		}
		reader.readAsArrayBuffer(file);
	}
}

export default VideoEngine;