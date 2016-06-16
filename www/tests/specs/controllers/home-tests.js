describe("home controller", function() {

	"use strict";

	var mockScope, widgetsSvc, stateSvc,
		controllerSvc, qSvc, loadWidgetPromise;

	beforeEach(angular.mock.module("WidgetApp"));

	beforeEach(angular.mock.inject(function($controller, $rootScope, widgets, $state, $q) {

		controllerSvc = $controller;
		mockScope = $rootScope.$new();
		widgetsSvc = widgets;
		stateSvc = $state;
		qSvc = $q;

	}));

	beforeEach(function() {

		loadWidgetPromise = qSvc.when({ data: [
			{ id: 1, name: "Test Widget", description: "Test Widget", color: "red", size: "tiny", quantity: 23 }
		]});

		spyOn(widgetsSvc, "getAll").and.returnValue(loadWidgetPromise);

		spyOn(stateSvc, "go");

		controllerSvc("homeCtrl", {
			$scope: mockScope,
			widgets: widgetsSvc,
			$state: stateSvc
		});

	});

	it("load widgets", function(done) {

		loadWidgetPromise.then(function() {
			expect(widgetsSvc.getAll).toHaveBeenCalled();
			expect(mockScope.widgets.length).toBe(1);
			done();
		});

		mockScope.$apply();

	});

	it("view widget", function() {

		mockScope.viewWidget(1);
		expect(stateSvc.go).toHaveBeenCalledWith("view", { widgetId: 1 });

	});

	it("edit widget", function() {

		mockScope.editWidget(1);
		expect(stateSvc.go).toHaveBeenCalledWith("edit", { widgetId: 1 });

	});

	it("create widget", function() {

		mockScope.createWidget();
		expect(stateSvc.go).toHaveBeenCalledWith("create");

	});

})
