angular
	.module("ngClassifieds", ["ngMaterial"])
	.config(function($mdThemingProvider) {
		$mdThemimgProvider.theme('default')
			.primaryPalette('teal')
			.accentPallette('orange')
	})
	.directive("helloWorld", function(){
		return {
			template: "<h1>Hello, world!</h1>"
		}
	});
