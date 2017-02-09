(function(){
	"use strict"

	angular
		.module('ngClassifieds')
		.controller('newClassifiedsCtrl', function($scope, $mdSidenav, $timeout, $mdDialog, classifiedsFactory){

			var vm = this;

			$timeout(function(){
				$mdSidenav('left').open();
			})
			$scope.$watch('vm.valueToChange', function(value){
				if(value === 2){
					console.log('value changed to 2');
				}
			})
			vam.valueToChange = 1;

			$timeout(function(){
				vm.valueToChange = 2
			}, 2000)
		})
})();