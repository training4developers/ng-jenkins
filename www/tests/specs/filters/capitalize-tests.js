// http://localhost:8080/tests/index.html

describe("capitalize filter tests", function() {

	var capitalizeFlt;

	beforeEach(angular.mock.module("WidgetApp"));

	beforeEach(angular.mock.inject(function($filter) {

		capitalizeFlt = $filter("capitalize");

	}));

	it("capitalize a string", function() {

		var
			testValue = "blue",
			expectedValue = "Blue",
			result = capitalizeFlt(testValue);

		expect(result).toEqual(expectedValue);

	});

});
