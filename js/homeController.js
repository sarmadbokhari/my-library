'use strict';

bookApp.controller("homeCtrl", function ($scope, $http, $rootScope, $routeParams, $filter) {

    $scope.category = 'Non-Fiction';
    $scope.type = 'History';
    $scope.similarbooks = [];

    $scope.isStatus = function (book) {

        if (book.genre.category == $scope.category && book.genre.name == $scope.type) {
            return true;
        } else {
            return false;
        }
    }

    $scope.checksimilar = function(currentBook) {
     
        var otherBook = angular.copy($scope.bookData);
        otherBook.splice($routeParams.Id,1);
      
        var found = $filter('filter')(otherBook,{genre:{category:currentBook.genre.category}}, true);
        
        if (found.length > 3)
        {
            for (var i=0;i<3;i++)
            {
                var rndmVal = Math.floor(Math.random() * found.length)
                $scope.similarbooks.push(found[rndmVal]);
                found.splice(rndmVal,1);
            }
        }
        else
        {
            $scope.similarbooks = found;
        }
    }

    if (typeof $rootScope.bookData == 'undefined') {
        $http.get('js/books.json').success(function (response) {
            $scope.bookData = response;
            $rootScope.bookData = $scope.bookData;
            angular.forEach($scope.bookData, function (el, index) {
                el.index = index;
            })
            if (typeof $routeParams.Id != "undefined") {
                $scope.currentBook = $rootScope.bookData[$routeParams.Id];
                $scope.checksimilar($scope.currentBook );
            }
        });
    }
    else if (typeof $routeParams.Id != "undefined") {
        $scope.currentBook = $rootScope.bookData[$routeParams.Id];
        $scope.checksimilar($scope.currentBook );
    }

    $scope.timeago = function (sdate) {
        var date = new Date(sdate);
        return date;
    }

});