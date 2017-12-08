
export class HistoryService {
    constructor($rootScope, DataServices, $q, BrowserConfig) {
        'ngInject';
        let vm = this;
        vm.DI = () => ({
            $rootScope,
            DataServices,
            $q,
            BrowserConfig
        });
    }

    save(state, params) {
        let vm = this;
        let { BrowserConfig } = vm.DI();
        let obj = (BrowserConfig.STATE.get() === null)?{}:BrowserConfig.STATE.get();
        obj[state] = params;
        BrowserConfig.STATE.set(obj);
    }

    get(state) {
        let vm = this;
        let { BrowserConfig } = vm.DI();
        let obj = BrowserConfig.STATE.get();
        if(obj)
            return obj[state];        
        else
            return null;
    }

    clear() {
        let vm = this;
        let { BrowserConfig } = vm.DI();
        BrowserConfig.STATE.clear();
    }
}