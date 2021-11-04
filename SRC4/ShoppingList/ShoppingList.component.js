(function () {
'use strict';

angular.module('ShoppingList')
.component('shoppingList', {
  templateUrl : 'SRC4/ShoppingList/Templates/shoppingList.template.html',
  bindings: {
    items: '<'
  }
});


})();
