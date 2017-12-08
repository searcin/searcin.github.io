export class HomeService {
    constructor(DataServices, $q, $rootScope, $filter) {
        'ngInject';
        let vm = this;
        vm.DI = () => ({
            DataServices,
            $q,
            $rootScope,
            $filter
        });
    }

    get info() {
        return this._info;
    }

    set info(info) {
        this._info = info;
    }

}
