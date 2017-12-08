
export class HomeController {
	constructor($scope, $rootScope, $state, $stateParams, $location, $translate)  {
        'ngInject';
		let vm = this;
		vm.DI = () => ({ $scope, $rootScope, $state, $stateParams, $location, $translate});
		
    }
}