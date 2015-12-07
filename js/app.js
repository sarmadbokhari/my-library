var bookApp = angular.module("bookApp", ['timeagoFilter', 'ngRoute', 'ngAnimate']);

bookApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeCtrl'
        })
        .when('/book/:Id', {
            templateUrl: 'pages/detail.html',
            controller: 'homeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })

})
