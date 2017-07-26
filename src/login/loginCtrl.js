(function(){
    angular.module('myApp.login')
        .controller('loginCtrl', function( mathService, $filter){

            var vm = this;
            console.log('login controller loaded');
            console.log('mathService', mathService)
            mathService.square(2);
            vm.name= $filter('reverseMe')('Sandip Ghadge');
            vm.val = 'saa';
            return vm;
        })
})();