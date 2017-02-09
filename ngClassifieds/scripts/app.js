angular
    .module('ngClassifieds', ['ngMaterial', 'ui.router'])
    .config(function($mdThemingProvider, $stateProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');
      $stateProvider
      	.state('stateone', {
      		url: '/stateone',
      		template: '<h1>{{ stateone.message }}</h1>',
      		controller: 'stateOneCtrl as stateone'
      	})
      	.state('statetwo', {
      		url: '/statetwo',
      		template: '<h1>State Two</h1> <md-button ui-sref="statetwo.more">Go to nested state</md-button>'
      	})
      	.state('statetwo.more', {
      		url: '/more',
      		template: '<p>This is the deeper state</p>'
      	});
    })
    .controller('stateOneCtrl', function($scope){
    	var vm = this;
    	vm.message = 'Hey from state one';
    })
