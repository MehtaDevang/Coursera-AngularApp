(function () {
  "use strict";

  angular
    .module("nameCalculator", [])
    .controller("NameCalculatorController", NameCalculatorController);
  NameCalculatorController.$inject = ["$scope", "$filter"];
  function NameCalculatorController($scope, $filter) {
    $scope.name = "";
    $scope.totalValue = 0;
    $scope.displayNumeric = function () {
      var totalNameValue = calculateNumericForString($scope.name);
      $scope.totalValue = totalNameValue;
    };

    function calculateNumericForString(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }

      return totalStringValue;
    }

    $scope.upper = function () {
      var upCase = $filter("uppercase");
      $scope.name = upCase($scope.name);
    };
  }
})();
