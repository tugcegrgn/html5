
function gotDevices(deviceInfos) {
  
  for (var i = 0; i !== deviceInfos.length; ++i) {
	var audioInputSelect = $('#audioInput');
	var videoSelect = $('#videoInput');
	var audioOutputSelect = $('#audioOutput');
    var deviceInfo = deviceInfos[i];
    var option;
    if (deviceInfo.kind === 'audioinput') {
		option = new Option( deviceInfo.label ||
        'Microphone ' + (audioInputSelect.children().length + 1),deviceInfo.deviceId);
		audioInputSelect.append(option);
    } else if (deviceInfo.kind === 'audiooutput') {
		option = new Option(deviceInfo.label ||
        'Speaker ' + (audioOutputSelect.children().length + 1),deviceInfo.deviceId);
		audioOutputSelect.append(option);
    } else if (deviceInfo.kind === 'videoinput') {
		option = new Option(deviceInfo.label || 'Camera ' +
        (videoSelect.children().length + 1),deviceInfo.deviceId);
		videoSelect.append(option);
    }
  }
}
navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(errorCallback);
  
function errorCallback(e){
	console.log(e);
}