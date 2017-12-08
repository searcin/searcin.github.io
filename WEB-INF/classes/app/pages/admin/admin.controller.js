
export class AdminController {
	constructor($scope, $rootScope, $state, $stateParams, $location, $translate, AdminConstants, DataServices, $q, ApiConfig, $uibModal, AuthConfig, CommonService) {
		'ngInject';
		let vm = this;
		vm.DI = () => ({ $scope, $rootScope, $state, $stateParams, $location, $translate, AdminConstants, DataServices, $q, ApiConfig, $uibModal, AuthConfig, CommonService });

		// check the authority
		vm.user = AuthConfig.USER.get();
		if (vm.user == null || (vm.user != null && vm.user.roles.indexOf("ROLE_ADMIN") == -1))
			$state.go("home");

		$scope.flag = true;
		$scope.$emit("initAdminService");
		vm.menu = AdminConstants.menu;
		vm.active = $stateParams.page;
		vm.index = parseInt($stateParams.index);
		vm.url = "pages/admin/html/" + vm.active + ".html";
		vm.data = {};
		vm.current = AuthConfig.USER.get();
		vm.selected = $stateParams.selected;
		$scope.emailPattern = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;


	}

	saveCategory() {
		let vm = this;
		let { DataServices, $state, $scope } = vm.DI();
		if ($scope.flag) {
			$scope.flag = false;
			DataServices.saveCategory(vm.category).then(function (response) {
				$scope.flag = true;
				if (response.status === 200) {
					alert("success");
					if (vm.selected === '') {
						vm.category = {};
					}
					else {
						vm.category = response.data;
						vm.user = vm.current;
					}
				}
			});
		}
	}

	getCategory() {
		let vm = this;
		let { DataServices } = vm.DI();
		DataServices.getCategory(vm.category.id).then(function (response) {
			if (response.status === 200) {
				vm.category = response.data;
			}
		});
	}

	getCategories() {
		let vm = this;
		let { DataServices } = vm.DI();
		DataServices.getCategories(vm.page, vm.size).then(function (response) {
			if (response.status === 200) {
				vm.categories = response.data;
			}
		});
	}

	deleteCategory() {
		let vm = this;
		let { DataServices } = vm.DI();
		if (confirm("Are you sure want to delete?")) {
			DataServices.deleteCategory(vm.category.id).then(function (response) {
				if (response.status === 200) {
					angular.forEach(vm.categories, function (item, $index) {
						if (item.id === vm.category.id) {
							vm.categories.splice($index, 1);
						}
					});
					alert("deleted");
				}
			});
		}
	}


	//sub categories


	getSubCategories() {
		let vm = this;
		let { DataServices } = vm.DI();
		if (vm.category.id) {
			DataServices.getSubCategories(vm.category.id).then(function (response) {
				if (response.status === 200)
					vm.subcategories = response.data;
			});
		}
	}

	getSubCategory() {
		let vm = this;
		let { DataServices } = vm.DI();
		DataServices.getSubCategory(vm.subcategory.id).then(function (response) {
			if (response.status === 200)
				vm.subcategory = response.data;
		});
	}

	saveSubCategory() {
		let vm = this;
		let { DataServices, $scope } = vm.DI();
		if ($scope.flag) {
			$scope.flag = false;
			DataServices.saveSubCategory(vm.category.id, vm.subcategory).then(function (response) {
				$scope.flag = true;
				if (response.status === 200) {
					alert("success");
					if (vm.selected.indexOf(",") === -1) {
						vm.subcategory = {};
					}
					else {
						vm.subcategory = response.data;
						vm.user = vm.current;
					}
				}
			});
		}
	}

	deleteSubCategory() {
		let vm = this;
		let { DataServices } = vm.DI();
		if (confirm("Are you sure want to delete?")) {
			DataServices.deleteSubCategory(vm.subcategory.id).then(function (response) {
				if (response.status === 200) {
					angular.forEach(vm.subcategories, function (item, $index) {
						if (item.id === vm.subcategory.id) {
							vm.subcategories.splice($index, 1);
						}
					});
					alert("deleted");
				}
			});
		}
	}


	//services

	getServices() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		DataServices.getServices().then(function (response) {
			vm.services = response.data;
		});
	}

	getService() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		DataServices.getService(vm.service.id).then(function (response) {
			vm.service = response.data;
		});
	}

	saveService() {
		let vm = this;
		let { DataServices, $scope } = vm.DI();
		if ($scope.flag) {
			$scope.flag = false;
			DataServices.saveService(vm.service).then(function (response) {
				$scope.flag = true;
				if (response.status === 200) {
					alert("success");
					if (vm.selected === '') {
						vm.service = {};
					}
					else {
						vm.service = response.data;
						vm.user = vm.current;
					}
				}
			});
		}
	}

	deleteService() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		if (confirm("Are you sure want to delete?")) {
			DataServices.deleteService(vm.service.id).then(function (response) {
				if (response.status === 200) {
					angular.forEach(vm.services, function (item, $index) {
						if (item.id === vm.service.id) {
							vm.services.splice($index, 1);
						}
					});
					alert("deleted");
				}
			});
		}
	}

	getAreas() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		DataServices.getAreas().then(function (response) {
			vm.areas = response.data;
		});
	}

	getArea() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		DataServices.getArea(vm.area.id).then(function (response) {
			vm.area = response.data;
		});
	}

	saveArea() {
		let vm = this;
		let { DataServices, $q, $scope } = vm.DI();
		if ($scope.flag) {
			$scope.flag = false;
			DataServices.saveArea(vm.area).then(function (response) {
				$scope.flag = true;
				if (response.status === 200) {
					alert("success");
					if (vm.selected === '') {
						vm.area = {};
					}
					else {
						vm.area = response.data;
						vm.user = vm.current;
					}
				}
			});
		}
	}

	deleteArea() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		if (confirm("Are you sure want to delete?")) {
			DataServices.deleteArea(vm.area.id).then(function (response) {
				if (response.status === 200) {
					angular.forEach(vm.areas, function (item, $index) {
						if (item.id === vm.area.id) {
							vm.areas.splice($index, 1);
						}
					});
					alert("deleted");
				}
			});
		}
	}


	getVendors() {

		let vm = this;
		let { DataServices, $q } = vm.DI();
		DataServices.getVendors().then(function (response) {
			vm.vendors = response.data;
		});
	}

	getVendor() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		DataServices.getVendor(vm.vendor.id).then(function (response) {
			vm.vendor = response.data;
		});
	}

	saveVendor() {
		let vm = this;
		let { DataServices, $state, $scope } = vm.DI();

		angular.forEach(vm.categories, function (item, $index) {
			if (vm.vendor.category.id === item.id) {
				vm.vendor.category = item;
			}
		});

		angular.forEach(vm.subcategories, function (item, $index) {
			if (vm.vendor.subCategory.id === item.id) {
				vm.vendor.subCategory = item;
			}
		});

		angular.forEach(vm.classRanges, function (item, $index) {
			if (vm.vendor.classRange.id === item.id) {
				vm.vendor.classRange = item;
			}
		});

		if ($scope.flag) {
			$scope.flag = false;
			DataServices.saveVendor(vm.vendor).then(function (response) {
				$scope.flag = true;
				if (response.status === 200) {
					alert("success");
					vm.vendor = response.data;
					vm.user = vm.current;
					$state.go("admin", { index: 2, selected: vm.vendor.id });
				}
			});
		}
	}

	deleteVendor() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		if (confirm("Are you sure want to delete?")) {
			DataServices.deleteVendor(vm.vendor.id).then(function (response) {
				if (response.status === 200) {
					angular.forEach(vm.vendors, function (item, $index) {
						if (item.id === vm.vendor.id) {
							vm.vendors.splice($index, 1);
						}
					});
					alert("deleted");
				}
			});
		}
	}

	getAddress() {
		let vm = this;
		let { DataServices } = vm.DI();
		DataServices.getAddress(vm.vendor.id).then(function (response) {
			vm.address = response.data;
		});
	}


	saveAddress() {
		let vm = this;
		let { DataServices, $q, $state } = vm.DI();
		DataServices.saveAddress(vm.vendor.id, vm.address).then(function (response) {
			if (response.status === 200) {
				alert("success");
				vm.address = response.data;
				vm.user = vm.current;
				$state.go("admin", { index: 3 });
			}
		});
	}

	getDetail(id) {
		let vm = this;
		let { DataServices, $state } = vm.DI();
		DataServices.getDetail(id).then(function (response) {
			if (response.status === 200) {
				vm.openDetail(response.data);
			}
		});
	}

	openImage(title, src) {
		let vm = this;
		let { $uibModal, $uibModalInstance } = vm.DI();
		var modalInstance = $uibModal.open({
			templateUrl: 'pages/admin/modal/image-popup.html',
			controller: "ModalInstanceCtrl",
			controllerAs: 'detail',
			resolve: {
				params: {
					title: title,
					src: src
				}
			},
			size: "lg",
			backdrop: "static"
		});
	}

	openDetail(data) {
		let vm = this;
		let { $uibModal, $uibModalInstance, CommonService } = vm.DI();
		data.host = CommonService.info.assetsHost;
		var modalInstance = $uibModal.open({
			templateUrl: 'pages/admin/modal/vendor-detail.html',
			controller: "ModalInstanceCtrl",
			controllerAs: 'detail',
			resolve: {
				params: function () {
					return data;
				}
			},
			size: "lg",
			backdrop: "static"
		});
	}


	getClassRange() {
		let vm = this;
		let { DataServices } = vm.DI();
		DataServices.getClassRange().then(function (response) {
			vm.classranges = response.data;
		});
	}

	getContact() {
		let vm = this;
		let { DataServices } = vm.DI();
		DataServices.getContact(vm.vendor.id).then(function (response) {
			vm.contact = response.data;
		});
	}


	saveContact() {
		let vm = this;
		let { DataServices, $q, $state } = vm.DI();
		DataServices.saveContact(vm.vendor.id, vm.contact).then(function (response) {
			if (response.status === 200) {
				alert("success");
				$state.go("admin", { index: 4 });
			}
		});
	}

	setServicesSelected() {
		let vm = this;
		angular.forEach(vm.services, function (i, $index) {
			angular.forEach(vm.vendor.services, function (j, $index) {
				if (i.id === j.id) {
					i.selected = true;
				}
			});
		});
	}

	getVendorServices() {
		let vm = this;
		let { DataServices } = vm.DI();
		vm.selectedServices = [];
		vm.selectedServiceId = [];
		DataServices.getServices().then(function (response) {
			if (response.status === 200) {
				vm.services = response.data;
				DataServices.getVendorServices(vm.vendor.id).then(function (response) {
					if (response.status === 200) {
						let selected = response.data;
						angular.forEach(vm.services, function (item, $index) {
							if (selected.indexOf(item.id) !== -1) {
								item.selected = true;
								vm.selectedServices.push(item.name);
								vm.selectedServiceId.push(item.id);
							}
							else {
								item.selected = false;
							}
						});
					}
				});
			}
		});

	}

	addVendorService(item) {
		let vm = this;
		if (item.selected) {
			vm.vendor.services.push(item);
		}
		else {
			angular.forEach(vm.vendor.services, function (service, $index) {
				if (item.id === service.id) {
					vm.vendor.services.splice($index, 1);
				}
			});
		}
	}

	saveVendorServices() {
		let vm = this;
		let { DataServices, $state } = vm.DI();
		DataServices.saveVendorServices(vm.vendor.id, vm.selectedServiceId).then(function (response) {
			if (response.status === 200) {
				alert("success");
				$state.go("admin", { index: 5 });
			}
		});
	}

	getLogo() {
		let vm = this;
		let { DataServices, CommonService } = vm.DI();
		vm.logo = {};
		vm.logo.host = CommonService.info.assetsHost;
		DataServices.getLogo(vm.vendor.id).then(function (response) {
			if (response.status === 200) {
				vm.logo.images = response.data;
			}
		});
	}

	setLogoUrl() {
		let vm = this;
		let { ApiConfig } = vm.DI();
		vm.logoUrl = ApiConfig.BASEURL + ApiConfig.WEBURL + ApiConfig.UPLOAD_LOGO.replace("%id%", vm.vendor.id);
	}

	deleteLogo(key) {
		let vm = this;
		let { DataServices } = vm.DI();
		DataServices.deleteLogo(vm.vendor.id, key).then(function (response) {
			if (response.status === 200) {
				alert("deleted");
				vm.getLogo();
			}
		});
	}

	deleteGallery(key) {
		let vm = this;
		let { DataServices } = vm.DI();
		DataServices.deleteGallery(vm.vendor.id, key).then(function (response) {
			if (response.status === 200) {
				alert("deleted");
				vm.getGallery();
			}
		});
	}

	getGallery() {
		let vm = this;
		let { DataServices, CommonService } = vm.DI();
		vm.gallery = {};
		vm.gallery.host = CommonService.info.assetsHost;
		DataServices.getGallery(vm.vendor.id).then(function (response) {
			if (response.status === 200) {
				vm.gallery.images = response.data;
			}
		});
	}

	setGalleryUrl() {
		let vm = this;
		let { ApiConfig } = vm.DI();
		vm.galleryUrl = ApiConfig.BASEURL + ApiConfig.WEBURL + ApiConfig.UPLOAD_GALLERY.replace("%id%", vm.vendor.id);
	}

	getByUsername() {
		let vm = this;
		let { DataServices } = vm.DI();
		DataServices.details(vm.user.username).then(function (params) {
			if (params.status === 200) {
				vm.user = params.data;
			}
		});
	}

	getLocation() {
		let vm = this;
		let { $scope } = vm.DI();
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				vm.address.lat = position.coords.latitude;
				vm.address.lng = position.coords.longitude;
				$scope.$apply();
			});
		}
		else {
			alert("Your browser didn't support geolocation!");
		}
	}
}