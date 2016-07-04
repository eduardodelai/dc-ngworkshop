(function(){
	'use strict';

	angular.module('presidency')
		.controller('presidencyController', presidencyController);

		presidencyController.$inject = [
			'$scope',
			'presidencyResource'
		];

		function presidencyController($scope, presidencyResource) {
			$scope.president = {};
			$scope.presidents = presidencyResource.getPresidents();

			$scope.cleanForm = function() {
				$scope.president = {};
			};

			$scope.savePresident = function() {
				if(angular.isDefined($scope.president.id)){
					angular.forEach($scope.presidents, function(p) {
						if(p.id === $scope.president.id){
							angular.copy($scope.president, p);
						}
					});
				} else {			
					$scope.president.id = $scope.presidents.length;
					$scope.presidents.push($scope.president);
				}
				$scope.cleanForm();
			};

			$scope.editPresident = function(president) {
				angular.copy(president, $scope.president);
			};

			$scope.removePresident = function(index) {
				$scope.presidents.splice(index, 1);
			};
		}

})();