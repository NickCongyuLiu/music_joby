;(function(angular){
    angular
        .module('musicApp')
        .controller('ListController',['$scope','$http',function($scope,$http){
            $scope.songs = []

            // http request to get list
            $http.jsonp('http://localhost:8080/list?callback=JSON_CALLBACK')
            .then((res) => {
                window.songs=$scope.songs = res.data
                console.log(res.data);
            })

        }])
})(angular)

// angular.module('musicList',[]);