(function () {
'use strict';

angular.module('ShoppingList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'SRC2/ShoppingList/Templates/home.template.html'
  })
  .state('mainList', {
    url: '/main-List',
    templateUrl: 'SRC2/ShoppingList/Templates/main-shoppingList.template.html',
    controller: 'MainShoppingListController as mainlist'
  })



}





})();
