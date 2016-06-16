(function(angular) {

	'use strict';

	filterFactory.$inject = ['$sce'];

	function filterFactory($sce) {

		return function zeroAlert(value) {

			var num = parseInt(value, 10);

			if (isNaN(num)) num = 0;

			if (num < 1) {
				return $sce.trustAsHtml('<span style="color:red;font-weight:bold;">' + String(num) + '</span>');
			} else {
				return $sce.trustAsHtml(String(num));
			}

		}

	}

	angular.module('WidgetApp.Filters')
		.filter('zeroAlert', filterFactory);

})(angular);
