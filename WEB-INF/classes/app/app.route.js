
export function AppRouter($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('searcin', {
      templateUrl: 'app.html',
      controller: 'AppController',
      controllerAs: 'app',
      url: ''
  });
  $urlRouterProvider.otherwise('/');
}

AppRouter.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
