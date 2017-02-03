(function(){
	"use strict";

	angular
		.module("ngClassifieds")
		.controller("classifiedsCtrl", function($scope){
			$scope.dog = {
				first: "banana",
				last: "Dykema"
			}
		})
})();