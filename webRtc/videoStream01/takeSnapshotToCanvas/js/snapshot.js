
var constraints = {
	video : true,
	audio : false
}

var videoPlayer = $('#videoPlayer')[0];

function handleStream(stream){
	
	if(videoPlayer){
		videoPlayer.srcObject = stream;
	}
	window.videoPlayer = videoPlayer;
	
}

function handleError(err){
	if(err){
		if(err.name){
			console.log('error -->' + err.name);
		}else{
			console.log(err);
		}
	}else{
		console.log('error! no definition');
	}
}

var button = $('button')[0];

button.onclick = function(){
	var height = videoPlayer.videoHeight;
	var width = videoPlayer.videoWidth;
	var canvas = $('canvas#snapshot')[0]; 
	canvas.height=videoPlayer.videoHeight;
	canvas.width=videoPlayer.videoWidth;
	canvas.getContext('2d').drawImage(videoPlayer, 0,0);
	
}

navigator.mediaDevices.getUserMedia(constraints).then(handleStream).catch(handleError);