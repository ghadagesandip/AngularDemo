(function(){
    angular.module('filters',[])
        .filter('reverseMe', function(){
            return function (input){
                return input.toUpperCase();
            }
        })
})();