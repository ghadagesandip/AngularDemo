(function(){
    angular.module('myApp', ['ui.router','myservices','myApp.login'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .when('/', '/login')
                .otherwise('/login');

            $stateProvider
                .state('login', {
                    url: '/login',
                    controller:'loginCtrl',
                    templateUrl: 'src/login/login.html'
                })


        }])
})();