(function () {
'use strict';


angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService);

ShoppingListService.$inject = ['$q','$timeout'];
function ShoppingListService($q, $timeout) {

  var service = this;

  var Items = [];

  Items.push({
    name: "flour",
    quantity: "2 bags",
    description: "Sugar used for baking delicious ... baked goods"
  });

  Items.push({
    name: "Sugar",
    quantity: "1 bag",
    description: "High quality wheat flour."
  });

  Items.push({
    name: "Chocolate chips",
    quantity: "3 bag",
    description: "Put these in the dough."
  });


  service.getItems = function () {

    var deferrer = $q.defer();

    $timeout(function () {

      deferrer.resolve(Items);

    } , 500);

     return deferrer.promise;

  };

};



})();
