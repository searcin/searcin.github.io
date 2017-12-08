
export function AdminRouter($stateProvider, $httpProvider) {
	'ngInject';
	$stateProvider
		.state('admin', {
			url: '/admin/:page?index&selected',
			parent: 'searcin',
			params: {
				page:"categories",
				index: "0",
				selected: ""
			},
			templateUrl: 'pages/admin/admin.html',
			controller: 'AdminController',
			controllerAs: 'admin'
		});
}


AdminRouter.$inject = ['$stateProvider','$httpProvider'];
