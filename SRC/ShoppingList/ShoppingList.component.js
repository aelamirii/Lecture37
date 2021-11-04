(function () {
'use strict';

angular.module('ShoppingList')
.component('shoppingList', {
  templateUrl: 'SRC/ShoppingList/Templates/shoppingList.template.html',
  bindings: {
    items: '<'
  }
});



})();
