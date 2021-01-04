
;(function() {
	'use strict';

	angular
		.module('app')
		.controller('BlogCtrl', BlogCtrl)
		.controller('BlogSingleCtrl', BlogSingleCtrl);


	BlogCtrl.$inject = [ '$scope', '$rootScope', 'Data' ];
	function BlogCtrl($scope, $rootScope, Data) {
		$rootScope.page = 'blog';
		$rootScope.title = 'Blog';

		$scope.data = Data.get({
			url: 'blog'
		});

		$scope.data.$promise.finally(() => {
			$scope.$emit('pageUpdate');
		});
	}

	BlogSingleCtrl.$inject = [ '$scope', '$rootScope', '$routeParams', 'DataSingle' ];
	function BlogSingleCtrl($scope, $rootScope, $routeParams, DataSingle) {
		$rootScope.page = 'blog-single';
		$rootScope.title = 'Blog';

		$scope.data = DataSingle.get({
			type: 'blog',
			url: $routeParams.id
		});

		$scope.data.$promise
			.finally(() => {
				$scope.$emit('pageUpdate');
			})
			.catch((err) => {
				if (err) {
					$scope.error = err.status + ' ' + err.statusText;
				}
			});
	}

})();
