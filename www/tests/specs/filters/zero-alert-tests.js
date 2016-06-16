describe("zeroAlert filter tests", function() {

	var zeroAlertFlt;

	beforeEach(angular.mock.module("WidgetApp"));

	beforeEach(angular.mock.inject(function($filter) {

		zeroAlertFlt = $filter("zeroAlert");

	}));

	it("alert for zero", function() {

		var
			testValue = 0,
			expectedValue = '<span style="color:red;font-weight:bold;">' + String(testValue) + '</span>',
			result = zeroAlertFlt(testValue);

		expect(result.$$unwrapTrustedValue()).toEqual(expectedValue);

	});

	it("no alert for non-zero", function() {

		var
			testValue = 100,
			expectedValue = String(testValue),
			result = zeroAlertFlt(testValue);

		expect(result.$$unwrapTrustedValue()).toEqual(expectedValue);

	});

	it("zero alert for non-number", function() {

		var
			testValue = "rrrr",
			expectedValue = '<span style="color:red;font-weight:bold;">0</span>',
			result = zeroAlertFlt(testValue);

		expect(result.$$unwrapTrustedValue()).toEqual(expectedValue);

	});

});
