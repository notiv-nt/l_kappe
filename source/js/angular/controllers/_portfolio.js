
;(function() {
	'use strict';

	angular
		.module('app')
		.controller('PortfolioCtrl', PortfolioCtrl)
		.controller('PortfolioSingleCtrl', PortfolioSingleCtrl);


	PortfolioCtrl.$inject = [ '$scope', '$rootScope', 'Data' ];
	function PortfolioCtrl($scope, $rootScope, Data) {
		$rootScope.page = 'portfolio';
		$rootScope.title = 'Portfolio';

		$scope.data = Data.get({
			url: 'portfolio'
		});

		$scope.data.$promise.finally(() => {
			$scope.$emit('pageUpdate');

			$scope.data.works.forEach((work) => {
				work.tags.forEach((tag) => {

					if ($rootScope.tags.indexOf(tag) === -1) {
						$rootScope.tags.push(tag);
					}
				});
			});
		});
	}

	PortfolioSingleCtrl.$inject = [ '$scope', '$rootScope', '$routeParams', 'DataSingle' ];
	function PortfolioSingleCtrl($scope, $rootScope, $routeParams, DataSingle) {
		$rootScope.page = 'portfolio-single';
		$rootScope.title = 'Portfolio';

		$scope.data = DataSingle.get({
			type: 'portfolio',
			url: $routeParams.id
		});

		$scope.data.$promise
			.finally(() => $scope.$emit('pageUpdate'))
			.catch((err) => {
				if (err) {
					$scope.error = err.status + ' ' + err.statusText;
				}
			});
	}

})();
