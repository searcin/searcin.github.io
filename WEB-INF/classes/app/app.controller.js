
export class AppController {
	constructor($scope, $rootScope, $state, $location, $uibModal, AuthConfig, CommonService) {
		'ngInject';
		let vm = this;
		vm.DI = () => ({$scope, $rootScope, $state, $location, $uibModal, AuthConfig, CommonService});
		vm.user = AuthConfig.USER.get();
		
	}

	login() {
		let vm = this;
		let { $uibModal } = vm.DI();
		var modalInstance = $uibModal.open({
			templateUrl: 'modals/login/login.html',
			controller: "LoginController",
			controllerAs: 'login',
			resolve: {
				
			},
			size: "md",
			backdrop: "static"
		});

		modalInstance.result.then(function(params) {
			vm.user = params.data;
		}, function() {
			console.log("modal dismissed");
		});
	}

	logout() {
		let vm = this;
		let { $rootScope, $state } = vm.DI();
		vm.user = null;
		
		$rootScope.$emit("logout");
		$state.go("home");
	}
}
