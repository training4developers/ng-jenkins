(function(angular) {

	'use strict';

	filterFactory.$inject = [];

	function filterFactory() {

		return function capitalize(value) {
			var str = String(value);
			return str.charAt(0).toUpperCase() + str.substring(1);
		}

	}

	angular.module('WidgetApp.Filters')
		.filter('capitalize', filterFactory);

})(angular);
