app.factory('mapFactory', function (mainMap) {
	var markers = [];

	return {
		getMap: function () {
			return mainMap;
		},

		createMarker: function (pos, type) {
			return new google.maps.Marker({
				position: pos,
				map: mainMap,
				title: type
			});
		},

		addMarker: function (marker) {
			markers.push(marker);
			marker.setMap(mainMap);
		},

		recenterMap: function () {
			var bounds = new google.maps.LatLngBounds();
			markers.forEach(function (elem) {
				bounds.extend(elem.getPosition());
			});
			mainMap.fitBounds(bounds);
		},

		drawLine: function () {
			var coords = markers.map(function (marker) {
				return {
					lat: marker.position.lat(),
					lng: marker.position.lng()
				};
			});
			var newPath = new google.maps.Polyline({
				path: coords,
				geodesic: true,
				strokeColor: '#00ff00',
				strokeOpacity: 1.0,
				strokeWeight: 3.0
			});
			newPath.setMap(mainMap);
		},

		calcDistance: function () {
			var p1 = new google.maps.LatLng(markers[0].position.lat(), markers[0].position.lng());
			var p2 = new google.maps.LatLng(markers[1].position.lat(), markers[1].position.lng());

			return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
		},

		clearMarkers: function () {
			markers.forEach(function (elem) {
				elem.setMap(null);
			});
			markers = [];
		}
	};
});