
;(function() {
	'use strict';

	angular
		.module('app')
		.controller('MainCtrl', MainCtrl);


	MainCtrl.$inject = [ '$scope', '$rootScope', 'Data', '$timeout' ];
	function MainCtrl($scope, $rootScope, Data, $timeout) {
		$scope.data = Data.get({
			url: 'main'
		});

		$rootScope.title = 'Site Name';

		$rootScope.$on('pageUpdate', () => {
			$timeout(onPageReload, 50);

			$rootScope.filterQuery = '';
			$rootScope.tags = [];
		});

		$scope.chooseTag = (tag) => {
			$rootScope.filterQuery = tag || '';
		};
	}

})();

