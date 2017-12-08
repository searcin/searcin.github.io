
import { AdminController } from './admin.controller';
import { AdminRouter } from './admin.router';
import { AdminConfig } from './admin.config';




angular.module('searcin.admin', [
])
	.config(AdminRouter)
	.constant('AdminConstants', AdminConfig)
	.controller('AdminController', AdminController)
	.controller('ModalInstanceCtrl', function ($uibModalInstance, params) {
		var $ctrl = this;
		$ctrl.params = params;
		$ctrl.cancel = function () {
			$uibModalInstance.close();
		};
	});
