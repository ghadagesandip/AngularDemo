(function(){
    angular.module('myservices',[])
        .service('mathService', function(){
            this.square = function (a) {
                console.log('a called');
                return a*a;
            };
        })
})();