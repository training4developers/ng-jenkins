(function(angular) {

	"use strict";

	angular.module("WidgetApp.Constants", []);
	angular.module("WidgetApp.Services", ["WidgetApp.Constants"]);
	angular.module("WidgetApp.Filters", ["WidgetApp.Services"]);
	angular.module("WidgetApp.Directives", ["WidgetApp.Services"]);
	angular.module("WidgetApp.Controllers", ["WidgetApp.Services"]);

	angular.module("WidgetApp", [
		"ui.router",
		"WidgetApp.Services",
		"WidgetApp.Filters",
		"WidgetApp.Directives",
		"WidgetApp.Controllers"
	]);

})(angular);
