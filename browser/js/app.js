var app = angular.module('AirportDist', ['ui.bootstrap']);

app.value('mainMap', new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.704593, lng: -74.009577},
		zoom: 16
	})
);
