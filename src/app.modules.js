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

                .state('dashboard',{
                    url: '/dashboard',
                    //controller:'DashboardCtrl',
                    //controllerAs: 'dashboard',
                    //templateUrl: 'src/login/dashboard.html',
                    views: {
                        'header': {
                            templateUrl: 'src/templates/header.html',
                            controller: function($scope){

                            }
                        },
                        'content': {
                            templateUrl: 'src/templates/content.html',
                            controller: 'loginCtrl',
                            controllerAs: 'vm'

                        },
                        'footer': {
                            templateUrl: 'src/templates/footer.html',
                            controller: function($scope){

                            }
                        }
                    }
                })


        }])
})();