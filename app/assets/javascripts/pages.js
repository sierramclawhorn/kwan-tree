$(document).ready(function () {

	var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);

    // player.on('play', function() {
    //     console.log('played the video!');
    // });
    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });


	var initialVideo = "https://player.vimeo.com/video/199619694";
	var replacementVideo = "https://player.vimeo.com/video/199619376";
	var playTime = "";
	
	$('#btnClick').on('click', function() {
		player.getCurrentTime().then(function(seconds) {
		    // seconds = the current playback position
		    playTime = seconds
		}).catch(function(error) {
		    // an error occurred
		});		

		// changes the video
		$('#video iframe').attr('src', replacementVideo);
		
		player.setCurrentTime(30.456).then(function(seconds) {
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
	});
})
