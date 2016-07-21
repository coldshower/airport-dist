app.directive('airportInput', function (airportFactory, mapFactory) {
	return {
		restrict: 'E',
		templateUrl: 'js/airport-input/airport-input.html',
		link: function (scope) {
			scope.allAirports = airportFactory;

			scope.select = function ($item, ngModel) {
				scope[ngModel] = $item;
				scope.airport[ngModel] = $item.name;
			};

			scope.invalidForm = function () {
				return scope.errorMessage;
			};

			scope.realAirport = function (input) {
				for (var i = 0; i < scope.allAirports.length; i++) {
					if (scope.allAirports[i].name === input) {
						return true;
					}
				}
				return false;
			};

			scope.validate = function () {
				scope.errorMessage = null;
				
				if ( scope.airportForm.origin.$error.required || !scope.realAirport(scope.airport.origin)) {
					scope.errorMessage = 'Please fill out Airport 1\'s input field with a valid airport.';
					return false;
				} else if (scope.airportForm.destination.$error.required || !scope.realAirport(scope.airport.destination)) {
					scope.errorMessage = 'Please fill out Airport 2\'s input field with a valid airport.';
					return false;
				}

				return true;
			};

			scope.calculate = function () {
				if (scope.validate()) {
					var marker1 = mapFactory.createMarker({lat: +scope.origin.lat, lng: +scope.origin.lon}, 'Origin');
					var marker2 = mapFactory.createMarker({lat: +scope.destination.lat, lng: +scope.destination.lon}, 'Destination');
					mapFactory.clearMarkers();
					mapFactory.addMarker(marker1);
					mapFactory.addMarker(marker2);
					mapFactory.recenterMap();
					mapFactory.drawLine();
					scope.distance = mapFactory.calcDistance();
				}
			};

		}
	};
});

