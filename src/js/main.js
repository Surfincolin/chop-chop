// require main CSS file to cause webpack to bundle
require('../css/main.scss');

import Vue from 'vue';
import AppComponent from './components/App.vue';
import store from './Store.js';
import VideoEngine from './VideoEngine.js';


window.addEventListener('load', () => {
	var videoEngine = window.engine = new VideoEngine();

	var vm = window.vm = new Vue({
		render: createElement => createElement(AppComponent),
		el: '#app', // attach to this element
		store // vuex
	});
});


console.log("Hello Chop Chop!")

// var Edit = {
// 	capture: function() {
// 		var canvas =  document.getElementById('videocanvas')
// 		var video =  document.getElementById('videoplayer')
// 		// canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
// 		canvas.getContext('2d').drawImage(video, 0, 0, 854, 480)
// 	}	
// }
// var dropped = null;

// console.log(MP4Box);

// function processWithMP4Box() {
// 	if (!dropped) return;
// 	console.log("Begin MP4 Processing");

// 	var mp4boxfile = MP4Box.createFile();
// 	mp4boxfile.onError = function(e) {
// 		console.log("MP4Box had an error.");
// 		console.log(e);
// 	}
// 	mp4boxfile.onReady = function(info) {
// 		console.log("MP4Box onReady!!!");
// 		console.log(info);
// 	}

// 	var reader = new FileReader();
// 	reader.onload = function(event) {
// 		var arrayBuffer = this.result;
// 		// console.log("Result length:", arrayBuffer.byteLength);
// 		// console.log(this.result);
// 		arrayBuffer.fileStart = 0;
// 		mp4boxfile.appendBuffer(arrayBuffer);
// 	}
// 	reader.readAsArrayBuffer(dropped[0]);


// }

// function readBlob(files, opt_startByte, opt_stopByte) {
// 	if (!dropped) return;

// 	var file = files[0];
// 	var start = parseInt(opt_startByte) || 0;
// 	var stop = parseInt(opt_stopByte) || file.size - 1;

// 	var reader = new FileReader();

// 	// if using onloadend, we need to check the readyState
// 	reader.onloadend = function(ev) {
// 		if (ev.target.readyState == FileReader.DONE) { // DONE == 2

// 			document.getElementById('byte_content').textContent = ev.target.result;
// 			document.getElementById('byte_range').textContent = ['Read bytes: ', start + 1, ' - ', stop + 1, ' of ', file.size, ' byte file'].join('');

// 			var result = ev.target.result;
// 			var output = '';
// 			for (var i = 0; i < result.length; i++) {
// 				output += result[i].charCodeAt(0).toString(16) + "";
// 			}
// 			// console.log(output);
// 			console.log(parseInt(output, 16));
// 		}
// 	};

// 	var blob = file.slice(start, stop + 1);
// 	reader.readAsBinaryString(blob);
// }

// function updateReadout(ev) {
// 	ev.stopPropagation();
// 	ev.preventDefault();

// 	var start = ~~document.getElementById('startNumber').value;
// 	var stop = ~~document.getElementById('stopNumber').value;

// 	readBlob(dropped, start, stop);
// }




// var canvas = document.getElementById('videocanvas');
// var ctx = canvas.getContext('2d');
// var video = document.getElementById('videoplayer');

// function setTime(time) {
// 	return new Promise((resolve, reject) => {
// 		video.addEventListener('seeked', function finishSeek() {
// 			video.removeEventListener('seeked', finishSeek);
// 			resolve(true);
// 		});
// 		video.currentTime = time;
// 	});
// }

// function framesToCTX(frames, interval, count, width, height, context) {
// 	if (count < frames) {
// 		setTime(count*interval).then(function() {
// 			context.drawImage(video, count*width, 0, width, height);
// 			framesToCTX(frames, interval, count+1, width, height, context);
// 		});
// 	} else {
// 		setTime(0);
// 	}
// }

// function buildTimeline(id) {
// 	var track = document.getElementById(id);
// 	var w = track.offsetWidth;
// 	var h = track.offsetHeight;

// 	var thumbCan = document.createElement('canvas');
// 	thumbCan.width = w;
// 	thumbCan.height = h;

// 	var ratio = video.videoWidth / video.videoHeight;
// 	var width = ratio * h;
// 	var numOfThumbs = ~~(w/width);
// 	var interval = video.duration / numOfThumbs;

// 	var thumbCtx = thumbCan.getContext('2d');
	
// 	framesToCTX(numOfThumbs, interval, 0, width, h, thumbCtx);

// 	track.appendChild(thumbCan); 

// }


// video.addEventListener('loadedmetadata', function(meta) {
// 	console.log("meta ready")
// 	canvas.width = 854;
// 	canvas.height = 480;

// 	console.log(video.duration);
// 	// buildTimeline('thumbnail-track');
// });

// var flag = false;
// video.addEventListener('canplay', function() {
// 	if (!flag) {
// 		flag = !flag;
// 		console.log("play ready")
// 		console.log(video.frameRate)
// 	    // this.currentTime = 200;
// 	    buildTimeline('thumbnail-track');
// 	}
// });

// // video.addEventListener('play', function() {
// // 	var that = this;
// // 	(function loop() {
// // 		if (!that.paused && !that.ended) {
// // 			ctx.drawImage(that, 0, 0, 854, 480);
// // 			setTimeout(loop, 1000 / 30);
// // 		}
// // 	})();
// // }, 0);

// function vidToCan(timestamp) {
// 	if (!video.paused && !video.ended) {
// 		ctx.drawImage(video, 0, 0, 854, 480);
// 		window.requestAnimationFrame(vidToCan);
// 	}
// }

// video.addEventListener('play', function() {
// 	window.requestAnimationFrame(vidToCan);
// }, 0);