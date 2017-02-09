(function() {

  "use strict";

  angular
    .module('ngClassifieds')
    .controller('classifiedsController', function($scope, $state, $mdSidenav, $mdDialog, $mdToast, classifiedsFactory) {

      var vm = this;

      vm.openSidebar = openSidebar;
      vm.closeSidebar = closeSidebar;
      vm.saveClassified = saveClassified;
      vm.editClassified = editClassified;
      vm.saveEdit = saveEdit;
      vm.deleteClassified = deleteClassified;

      vm.classifieds;
      vm.categories;
      vm.editing;
      vm.classified;
      vm.status;

      classifiedsFactory.getClassifieds().then(function(data) {
        $vm.classifieds = data.data;
        $vm.categories = getCategories($vm.classifieds);
      });

      var contact = {
        name: "Robin Dykema", 
        phone: "(555) 555-5555",
        email: "robindykema@gmail.com"
      }

      function showToast(message) {
        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position('top, right')
            .hideDelay(3000)
        );
      }

      function openSidebar() {
        $state.go('classifieds.new')
      }

      function closeSidebar() {
        $mdSidenav('left').close();
      }

      function saveClassified(classified) {
        if(classified) {
          vm.classified.contact = contact;
          vm.classifieds.push(classified);
          vm.classified = {};
          closeSidebar();
          showToast('Classified Saved');
        }
      }

      function editClassified(classified) {
        vm.editing = true;
        openSidebar();
        vm.classified = classified;
      }

      function saveEdit() {
        vm.editing = false;
        vm.classified = {};
        closeSidebar();
        showToast('Edit Saved');
      }

      function deleteClassified(event, classified) {
        var confirm = $mdDialog.confirm()
            .title('Are you sure you want to delete ' + classified.title + '?')
            .targetEvent(event)
            .ok('Yes')
            .cancel('No');
        $mdDialog.show(confirm).then(function() {
          var index = vm.classifieds.indexOf(classified);
          vm.classifieds.splice(index, 1);
          showToast('Classified Deleted');
      });
    };
    
    function getCategories(classifieds) {

        var categories = [];

        angular.forEach(classifieds, function(ad) {
          angular.forEach(ad.categories, function(category) {
            categories.push(category);
          });
        });

        return _.uniq(categories);
      }
})();