(function(angular) {

	directive.$inject = [];

	function directive() {

		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, element, attrs, ctrl) {

				function validate(value) {

					if (value == null || String(value).length === 0) {
						ctrl.$setValidity('reqd', false);
						return;
					} else {
						ctrl.$setValidity('reqd', true);
						return value;
					}

				}

				ctrl.$formatters.push(validate);
				ctrl.$parsers.push(validate);

			}
		}

	}

	angular.module('WidgetApp.Directives')
		.directive('reqd', directive);

})(angular);
