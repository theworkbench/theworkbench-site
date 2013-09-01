function initializeMaps() {
	var layer = "toner";
	var mapOptions = {
			center: new google.maps.LatLng(-33.880446,151.200478),
			zoom: 17,
			panControl: false,
			mapTypeControl: false,
			zoomControl: true,
			scrollwheel: false,
			zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL

		},
		mapTypeId: layer,
		mapTypeControlOptions: {}
	};

	var map = new google.maps.Map(document.getElementById("map_canvas"),
mapOptions);
	var ctaLayer = new google.maps.KmlLayer('https://maps.google.com.au/maps/ms?ie=UTF8&authuser=0&msa=0&output=kml&msid=205453474391337276868.0004cc5ca2c3b07aad1ff',{preserveViewport: true});
	ctaLayer.setMap(map);
	map.mapTypes.set(layer, new google.maps.StamenMapType(layer));
}

$(document).ready(function(){
	initializeMaps();
	$('#nav').localScroll({duration:900});
});
