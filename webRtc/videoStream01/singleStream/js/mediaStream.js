


var constraints = {
	audio: true,
	video: true
};

function handleSuccess(stream) {
  var videoEl = $('video');
  stream.oninactive = function() {
    console.log('Stream inactive');
  };
  window.stream = stream; // make variable available to browser console
  if(videoEl && videoEl.length>0){
		videoEl[0].srcObject = stream;
  }
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
navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);