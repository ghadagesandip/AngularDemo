(function(){
    angular.module('myApp', ['ui.router','myservices','myApp.login','filters'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .when('/', '/login')
                .otherwise('/login');

            $stateProvider
                .state('login', {
                    url: '/login',
                    controller:'loginCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'src/login/login.html'
                })


        }])
})();