/* Grab the latest song from our Last.fm account and stick it on the homepage */

var user = 'workatworkbench',
	loader = null,
	timer = null,
	interval = 30000;

function getChoons(clear){

	// If we're already loading, don't start again
	if(loader) loader.abort()

	// get ze data
	loader = $.getJSON('http://pipes.yahoo.com/pipes/pipe.run?_id=4f81bea3947c64161d2ae9205969ae16&_render=json&_callback=?',
		{'user': user},
		function(data) {
			$.each(data.value.items, function(i,item){

				// split out the results
				artist = item.title.split(" – ")[0];
	            title = item.title.split(" – ")[1];
	            link = item.link;

	            // build & insert the HTML
            	$('span.song').html(
            		$('<span>').addClass('song').append(
						$('<a>').attr('href',link)
								.append($('<span>').addClass('title').html(title))
								.append(', ')
								.append($('<span>').addClass('artist').html(artist))
					)
				);
            	return false;
	        });

	        //refresh every 30 seconds
	        if(timer) clearTimeout(timer);
	        timer = setTimeout(getChoons, interval);
		}
	);
}

$(document).ready(function() {
	getChoons();
});
