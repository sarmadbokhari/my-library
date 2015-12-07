'use strict';

bookApp.controller("detailCtrl", function ($scope, $http, $rootScope, $routeParams) {
    if (typeof $rootScope.bookData == 'undefined') {
        $http.get('js/books.json').success(function (response) {
            $scope.bookData = response;
            $rootScope.bookData = $scope.bookData;
            angular.forEach($scope.bookData, function (el, index) {
                el.index = index;
            })
            $scope.currentBook = $rootScope.bookData[$routeParams.Id];
        });
    } else {
        $scope.currentBook = $rootScope.bookData[$routeParams.Id];
    }

    //console.log($scope.currentBook);    
});