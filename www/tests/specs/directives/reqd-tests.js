describe("reqd directive Test", function() {

	var compileSvc, mockScope;

	beforeEach(angular.mock.module('WidgetApp'));

	beforeEach(angular.mock.inject(function($compile, $rootScope) {

		mockScope = $rootScope;

		mockScope.widget = {
			name: "Test Widget"
		};

		compileSvc = $compile;

	}));

	it("check the validation of the input", function() {

		var
			linkingFn = compileSvc("<form name='form'><input ng-model='widget.name' reqd name='widgetName'></form>"),
			element = linkingFn(mockScope);

		mockScope.$digest();
		expect(element.find("input").hasClass("ng-valid-reqd")).toEqual(true);

		mockScope.form.widgetName.$setViewValue("");
		expect(element.find("input").hasClass("ng-invalid-reqd")).toEqual(true);
	});

});
