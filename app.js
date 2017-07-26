(function(){
    angular.module('myApp', ['ui.router','myservices'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .when('/', '/login')
                .otherwise('/login');

            $stateProvider
                .state('login', {
                    url: '/login',
                    controller:'loginCtrl',
                    templateUrl: 'login/login.html'
                })


        }])
})();