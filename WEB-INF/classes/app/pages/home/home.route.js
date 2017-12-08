
export function HomeRouter($stateProvider, $httpProvider) {
	'ngInject';
	$stateProvider
		.state('home', {
			url: '/',
			parent: 'searcin',
			templateUrl: 'pages/home/home.html',
			controller: 'HomeController',
			controllerAs: 'home'
		});
}


HomeRouter.$inject = ['$stateProvider','$httpProvider'];
