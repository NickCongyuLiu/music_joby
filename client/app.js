;(function(angular){
    angular
        .module('musicApp',['ngRoute'])
        .config(['$routeProvider',function($routeProvider){
            $routeProvider
                .when('/add',{
                    controller:'HomeController',
                    templateUrl: './views/add.html'
                })
                .when('/list',{
                    controller:'ListController',
                    templateUrl: './views/list.html'
                })
                .when('/item/:itemId',{
                    controller:'ItemController',
                    templateUrl: './views/item.html'
                })
                .otherwise({redirectTo: '/list'})
        }])
})(angular)
// angular.module('musicApp',[
//     'ngRoute',
//     'musicList',
//     'musicDetail'
// ]);