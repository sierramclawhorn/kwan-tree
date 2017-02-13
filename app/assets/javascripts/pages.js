$(document).ready(function() {

	var iframe = $('#video');
	var player = new Vimeo.Player(iframe);
    var initialVideo = '199619694'; //change to digits in initial video's link (https://player.vimeo.com/video/199619694)
    var replacementVideo = '199619376'; //change to digits in replacement video's link
    var playTime = '';

    var findPlaybackTime = function () {
    	player.getCurrentTime().then(function(seconds) {
    		playTime = seconds;
    	}).catch(function(error) {
    	});
    };

    var setNewVideo = function() {
    	player.setCurrentTime(playTime).then(function(seconds) {
    	}).catch(function(error) {
    	});
    };

    $('#initialBtn').click(function() {
    	findPlaybackTime();

    	player.loadVideo(replacementVideo).then(function(id) {
    		setNewVideo();
    	}).catch(function(error) {
    	});

    	$('.btnClick').toggle();
    });

    $('#replacementBtn').click(function() {
    	findPlaybackTime();

    	player.loadVideo(initialVideo).then(function(id) {
    		setNewVideo();
    	}).catch(function(error) {
    	});

    	$('.btnClick').toggle();
    });

});