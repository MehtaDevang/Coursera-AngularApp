(function () {
  "use strict";

  angular
    .module("MenuCategoriesApp", [])
    .controller("MenuCategoriesController", MenuCategoriesController)
    .service("MenuCategoriesService", MenuCategoriesService);

  MenuCategoriesController.$inject = ["MenuCategoriesService"];
  function MenuCategoriesController(MenuCategoriesService) {
    var menu = this;
    var promise = MenuCategoriesService.getMenuCategories();

    promise
      .then(function (response) {
        menu.categories = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  MenuCategoriesService.$inject = ["$http"];
  function MenuCategoriesService($http) {
    var service = this;

    service.getMenuCategories = function () {
      var response = $http({
        url: "http://davids-restaurant.herokuapp.com/categories.json"
      });
      return response;
    };
  }
})();
