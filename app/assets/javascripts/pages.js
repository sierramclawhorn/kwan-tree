$(document).ready(function() {

	var iframe = $('#video');
    var player = new Vimeo.Player(iframe);
    var replacementVideo = '199619376';
    var playTime = "";

    $('#btnClick').click(function() {
    	player.getCurrentTime().then(function(seconds) {
			playTime = seconds;
			console.log('grab time ' + playTime);
		});

		player.loadVideo(replacementVideo).then(function(id) {
			console.log('switch video');
		});

		player.setCurrentTime(playTime).then(function(seconds) {
			console.log('new video set to ' + seconds);
		});
	});

})




// $(document).ready(function() {
	
// 	var iframe = $('#video');
//     var player = new Vimeo.Player(iframe);
// 	var initialVideo = "https://player.vimeo.com/video/199619694";
// 	var replacementVideo = "https://player.vimeo.com/video/199619376";
// 	var playTime = "";


// 		var findPlayTime = function() {
// 			player.getCurrentTime().then(function(seconds) {
// 			    playTime = seconds;
// 			    console.log("in findplaytime funct " + playTime);
// 			    updateLink();
// 			}).catch(function(error) {
// 			    // an error occurred
// 			});
// 		};

// 		var buttonListener = function() {
// 			console.log("before findplaytime");
// 			findPlayTime();
// 		};

// 		var updateLink = function(){
// 			$('#videoDiv #video').attr('src', replacementVideo);
// 			startPlayTime();
// 			console.log('after findPlayTime');
// 			console.log('in switcher ' + playTime);
// 		};

// 		var startPlayTime = function() {
// 			player.setCurrentTime(playTime).then(function(seconds) {
// 	    		// seconds = the actual time that the player seeked to
// 	    		console.log(iframe.attr('src'));
// 	    		console.log('in new video playTime ' + seconds);
// 			}).catch(function(error) {
// 	    		switch (error.name) {
// 	        		case 'RangeError':
// 	            		// the time was less than 0 or greater than the video’s duration
// 	            		break;
// 	        		default:
// 	            		// some other error occurred
// 	            		break;
// 	    		}
// 			});
// 		};

// 	$('#btnClick').click(function() {
// 		buttonListener();
// 	});

// });