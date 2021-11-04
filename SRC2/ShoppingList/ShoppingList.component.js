(function () {
'use strict';

angular.module('ShoppingList')
.component('shoppingList', {
  templateUrl : 'SRC2/ShoppingList/Templates/shoppingList.template.html',
  bindings: {
    items : '<'
  }
});



})();
