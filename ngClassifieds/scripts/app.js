angular
	.module("ngClassifieds", ["ngMaterial"])
	.config(funciton($mdThemingProvider) {
		$mdThemimgProvider.theme('default')
			.primaryPalette('teal')
			.accentPallette('orange')
	})
