angular
	.module("ngClassifieds", ["ngMaterial"])
	.config(function($mdThemingProvider) {
		$mdThemimgProvider.theme('default')
			.primaryPalette('teal')
			.accentPallette('orange')
	})
