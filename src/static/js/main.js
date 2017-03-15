/* globals angular */

//angular.module('seoangular', []).controller('seoangularController',function($scope,$ngRoute) {
	
var seoangular = angular.module('seoangular', ['ngRoute','ngMeta']);

seoangular.config(function($routeProvider, $locationProvider, ngMetaProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'pages_home.html',
			controller: 'mainController',
			data: {
				meta: {
					'title':'Home page',
					'description':'This is the home page'
				}
			}
		})
		.when('/test', {
			templateUrl: 'pages_test.html',
			controller: 'testController',
			data: {
				meta: {
					'title':'Test page',
					'description':'This is not the home page, it is the test page'
				}
			}
		})
		.otherwise({
			redirectTo:'/'
		});
	// use the HTML5 History API
	$locationProvider.html5Mode(true);
})
.run(['ngMeta', function(ngMeta){
	//https://github.com/vinaygopinath/ngMeta
	ngMeta.init();
}]);

seoangular.controller('mainController',function($scope){
	$scope.pagetitle = 'Home';
	$scope.message = 'This is Home';
});

seoangular.controller('testController',function($scope){
	$scope.pagetitle = 'Test';
	$scope.message = 'This is Test';
});
