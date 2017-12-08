
export class LoginController {
	constructor($scope, $rootScope, $uibModal, $uibModalInstance, DataServices) {
		'ngInject';
		let vm = this;
		vm.DI = () => ({ $scope, $rootScope, $uibModal, $uibModalInstance, DataServices });
    }

    close() {
        let vm = this;
        let { $uibModalInstance } = vm.DI();
        $uibModalInstance.close();
    }

    submit() {
        let vm = this;
        let { $rootScope, DataServices, $uibModalInstance } = vm.DI();
        DataServices.login(vm.payload).then(function(response) {
            if(response.status === 200) {
                $uibModalInstance.close({data:response.data});
                $rootScope.$emit("login", response.data);
            }
        });
    }
}
 