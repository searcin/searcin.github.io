export class CommonService {
    constructor(DataServices, $q, $rootScope, $filter) {
        'ngInject';
        let vm = this;
        vm.DI = () => ({
            DataServices,
            $q,
            $rootScope,
            $filter
        });

        vm._info = {};
    }

    get info() {
        return this._info;
    }

    set info(info) {
        this._info = info;
    }

    init() {
        let vm = this;
        let { DataServices, $q } = vm.DI();
        return $q(function (resolve, reject) {
            DataServices.info().then(function (response) {
                if (response.status === 200) {
                    vm.info = response.data;
                    resolve(vm.info);
                }                    
            });
        });

    }

}

