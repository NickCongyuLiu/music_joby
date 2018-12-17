;(function(angular){
    angular
        .module('musicApp')
        .controller('HomeController',['$scope','$http',function($scope,$http){
            $scope.music={};
        }])
})(angular)