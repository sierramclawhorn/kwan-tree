$(document).ready(function() {

	var iframe = $('#video');
    var player = new Vimeo.Player(iframe);
    var initialVideo = '199619694';
    var replacementVideo = '199619376';
    var playTime = '';


    $('#initialBtn').click(function() {
  		player.getCurrentTime().then(function(seconds) {
			playTime = seconds;
			console.log('grab time ' + playTime);
		}).catch(function(error) {
			console.log('Error: ${error}');
		});

		player.loadVideo(replacementVideo).then(function(id) {
			setNewVideo();
			console.log('switch video');
		}).catch(function(error) {
		    switch (error.name) {
		        case 'TypeError':
		            break;
		        case 'PasswordError':
		            break;
		        case 'PrivacyError':
		            break;
		        default:
		            break;
		    };
		    console.log(error.name + '${error}');
		});

		var setNewVideo = function() {
			player.setCurrentTime(playTime).then(function(seconds) {
				console.log('new video set to ' + seconds);
			}).catch(function(error) {
    			switch (error.name) {
    			    case 'RangeError':
    			        break;
    			    default:
    			        break;
    			};
    			console.log(error.name + '${error}');
			});
		};

		$('.btnClick').toggle();
	});


	$('#replacementBtn').click(function() {
  		player.getCurrentTime().then(function(seconds) {
			playTime = seconds;
			console.log('grab time ' + playTime);
		}).catch(function(error) {
		});

		player.loadVideo(initialVideo).then(function(id) {
			setNewVideo();
			console.log('switch video');
		}).catch(function(error) {
		    switch (error.name) {
		        case 'TypeError':
		            break;
		        case 'PasswordError':
		            break;
		        case 'PrivacyError':
		            break;
		        default:
		            break;
		    };
		});

		var setNewVideo = function() {
			player.setCurrentTime(playTime).then(function(seconds) {
				console.log('new video set to ' + seconds);
			}).catch(function(error) {
    			switch (error.name) {
    			    case 'RangeError':
    			        break;
    			    default:
    			        break;
    			};
			});
		};

		$('.btnClick').toggle();
	});

})