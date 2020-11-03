(function () {
  "use strict";

  angular
    .module("MenuCategoriesApp", [])
    .controller("MenuCategoriesController", MenuCategoriesController)
    .service("MenuCategoriesService", MenuCategoriesService)
    .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com");

  MenuCategoriesController.$inject = ["MenuCategoriesService"];
  function MenuCategoriesController(MenuCategoriesService) {
    var menu = this;
    var promise = MenuCategoriesService.getMenuCategories();

    promise
      .then(function (response) {
        menu.categories = response.data;
        console.log(menu.categories);
      })
      .catch(function (error) {
        console.log(error);
      });

    menu.logMenuItems = function (shortName) {
      var promise = MenuCategoriesService.getMenuForCategory(shortName);
      promise
        .then(function (response) {
          menu.items = response.data;
          console.log(menu.items);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  }

  MenuCategoriesService.$inject = ["$http", "ApiBasePath"];
  function MenuCategoriesService($http, ApiBasePath) {
    var service = this;

    service.getMenuCategories = function () {
      var response = $http({
        url: ApiBasePath + "/categories.json"
      });
      return response;
    };

    service.getMenuForCategory = function (shortName) {
      var response = $http({
        method: "GET",
        url: ApiBasePath + "/menu_items.json",
        params: {
          category: shortName
        }
      });

      return response;
    };
  }
})();
