
;(function() {
	'use strict';

	angular
		.module('app')
		.directive('appAside', appAside)
		.directive('appComment', appComment);

	function appAside() {
		return {
			templateUrl: 'app/views/aside.html',
			replace: true
		}
	}

	function appComment() {
		return {
			templateUrl: 'app/views/comment-template.html',
			restrict: 'E',
			scope: {
				comment: '='
			},
			replace: true
		}
	}

})();
