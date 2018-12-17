;(function(angular){
    angular
        .module('musicApp')
        .controller('ItemController', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
            
            $scope.data = window.songs[parseInt($routeParams.itemId)];
            
            //item routing with audio autoplay setup
            console.log($scope.data);
            window.audio && window.audio.pause()
            const audio = window.audio = new Audio();
            audio.autoplay = true;
            audio.loop = true;
            audio.src = "https://s3.amazonaws.com/Syntaxxx/bigger-picture.mp3";
            console.log(audio);
            audio.load();
            audio.addEventListener('play',()=>{
                $scope.data.playing=true;
            })
           
        }])
})(angular)