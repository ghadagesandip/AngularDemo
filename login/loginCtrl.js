(function(){
    angular.module('myApp')
        .controller('loginCtrl', function($scope, mathService){
            console.log('login controller loaded');
            console.log('mathService', mathService)
            var a = mathService.square(2);
            $scope.val = a;
        })
})();