var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    //.when('/nav', {
    //  templateUrl: '/views/templates/index.html',
    //  controller: 'NavController'
    //})
    //.when('/footer', {
    //  templateUrl: '/views/templates/footer.html',
    //})
    //.when('/about', {
    //  templateUrl: '/views/templates/about.html',
    //  controller: 'AboutController'
    //})
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController'
    })
    //.when('/services', {
    //  templateUrl: '/views/templates/services.html',
    //  controller: 'ServicesController'
    //})
    .otherwise({
      redirectTo: 'home',
    })





}]);