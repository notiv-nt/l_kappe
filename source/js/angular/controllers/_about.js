
;(function() {
	'use strict';

	angular
		.module('app')
		.controller('AboutCtrl', AboutCtrl);


	AboutCtrl.$inject = [ '$scope', '$rootScope', 'Data' ];
	function AboutCtrl($scope, $rootScope, Data) {
		$rootScope.page = 'about';
		$rootScope.title = 'About Us';

		$scope.data = Data.get({ url: 'about' });

		$scope.data.$promise.finally(() => {
			$scope.$emit('pageUpdate');
		});
	}

})();