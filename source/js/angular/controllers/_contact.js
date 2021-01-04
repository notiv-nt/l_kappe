
;(function() {
	'use strict';

	angular
		.module('app')
		.controller('ContactCtrl', ContactCtrl);

	ContactCtrl.$inject = [ '$scope', '$rootScope', 'Data' ];
	function ContactCtrl($scope, $rootScope, Data) {
		$rootScope.page = 'contact';
		$rootScope.title = 'Contact Us';

		$scope.data = Data.get({
			url: 'contact'
		});

		$scope.data.$promise.finally(() => {
			$scope.$emit('pageUpdate');
		});
	}

})();
