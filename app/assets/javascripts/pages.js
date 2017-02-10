$(document).ready(function() {

	var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);
	var initialVideo = "https://player.vimeo.com/video/199619694";
	var replacementVideo = "https://player.vimeo.com/video/199619376";
	var playTime = "";

	var findPlayTime = function() {
		player.getCurrentTime().then(function(seconds) {
		    playTime = seconds;
		    console.log(playTime);
		}).catch(function(error) {
		    // an error occurred
		});
	};

	var videoSwitchListener = function() {
		$('#btnClick').click(function() {
			findPlayTime();
			$('#video iframe').attr('src', replacementVideo);

			console.log(playTime);
			console.log("playing");
		});
	};

	var startPlayTime = function() {
		player.setCurrentTime(playTime).then(function(seconds) {
    		// seconds = the actual time that the player seeked to
		}).catch(function(error) {
    		switch (error.name) {
        		case 'RangeError':
            		// the time was less than 0 or greater than the video’s duration
            		break;
        		default:
            		// some other error occurred
            		break;
    		}
		});
	};



  	videoSwitchListener(function() {
    	startPlayTime(function() {
    	});
	});

});