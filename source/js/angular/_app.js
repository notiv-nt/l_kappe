
;(function() {
	'use strict';

	angular
		.module('app', [
			'ngRoute',
			'ngResource',
			'ngAnimate'
		])
		.config(config)
		.factory('Data', Data)
		.factory('DataSingle', DataSingle);


	config.$inject = [ '$routeProvider' ];
	function config($routeProvider) {

		$routeProvider
			.when('/portfolio', {
				templateUrl: 'app/views/portfolio.html',
				controller: 'PortfolioCtrl'
			})
			.when('/portfolio/:id', {
				templateUrl: 'app/views/single.html',
				controller: 'PortfolioSingleCtrl'
			})

			.when('/blog', {
				templateUrl: 'app/views/blog.html',
				controller: 'BlogCtrl'
			})
			.when('/blog/:id', {
				templateUrl: 'app/views/single.html',
				controller: 'BlogSingleCtrl'
			})

			.when('/contact', {
				templateUrl: 'app/views/contact.html',
				controller: 'ContactCtrl'
			})
			.when('/about', {
				templateUrl: 'app/views/about.html',
				controller: 'AboutCtrl'
			})
			.otherwise({
				redirectTo: '/portfolio'
			})

	}

	Data.$inject = [ '$resource' ];
	function Data($resource) {

		return $resource('app/data/:url:format', { format: '.json' })
	}

	DataSingle.$inject = [ '$resource' ];
	function DataSingle($resource) {

		return $resource('app/data/:type/:url:format', { format: '.json' })
	}

})();

