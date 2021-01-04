
;(function() {
	'use strict';

	angular
		.module('app')
		.filter('join', join)
		.filter('html', html)
		.filter('filterWorks', filterWorks);

	function join() {
		return function(array) {
			return array.join(', ')
		}
	}

	html.$inject = [ '$sce' ];
	function html($sce) {

		return function (text) {
			return $sce.trustAsHtml(text);
		};
	}

	function filterWorks() {

		return function(works, query) {

			if (!works)
				return true;

			return works.filter(function(work) {
				if (work.tags.indexOf(query) !== -1 || !query) {
					return true;
				}

				return false;
			});

		};

	}

})();
