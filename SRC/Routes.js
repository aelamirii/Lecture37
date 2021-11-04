(function () {
'use strict';
console.log("Before ");
angular.module('ShoppingList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig( $stateProvider, $urlRouterProvider) {
console.log("Before ");
  //  Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');
console.log("111111111111111111111111");
  //  Set up UI states
  $stateProvider
  //  Home page
  .state('home', {
    url: '/',
    templateUrl: 'SRC/ShoppingList/Templates/home.template.html'

  })

  // premade page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'SRC/ShoppingList/Templates/main-shoppingList.template.html'
  });





}



})();
