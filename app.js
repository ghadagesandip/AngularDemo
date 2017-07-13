(function(){
    angular.module('myApp', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .when('/', '/login')
                .otherwise('/login');

            $stateProvider

                .state('login', {
                    url: '/login',
                    templateUrl: 'login/login.html'
                })


        }])
})();