export class AdminRequest {
    constructor() {
        let vm = this;
    }

    //categories
    saveCategory(DI) {
        return function (payload) {
            return DI.$http(DI.ApiConfig.SAVE_CATEGORY.setUrl(payload));
        };
    }
    getCategories(DI) {
        return function () {
            return DI.HttpService.get("http://localhost:8080/searcin-web/api/v1/admin/categories");
        };
    }
    deleteCategory(DI) {
        return function (payload) {
            return DI.$http(DI.ApiConfig.DELETE_CATEGORY.setUrl(payload));
        };
    }

    //get subcategories
    getSubCategories(DI) {
        return function(id) {
            return DI.$http(DI.ApiConfig.GET_SUB_CATEGORIES.setUrl(id));
        };
    }

    saveSubCategory(DI) {
        return function(payload) {
            return DI.$http(DI.ApiConfig.SAVE_SUB_CATEGORY.setUrl(payload));
        };
    }

    deleteSubCategory(DI) {
        return function(payload) {
            return DI.$http(DI.ApiConfig.DELETE_SUB_CATEGORY.setUrl(payload));
        };
    }

    //services

    getServices(DI) {
        return function() {
            return DI.$http(DI.ApiConfig.GET_SERVICES.setUrl());
        };
    }

    addService(DI) {
        return function(payload) {
            return DI.$http(DI.ApiConfig.ADD_SERVICE.setUrl(payload));
        };
    }

    updateService(DI) {
        return function(payload) {
            return DI.$http(DI.ApiConfig.UPDATE_SERVICE.setUrl(payload));
        };
    }

    deleteService(DI) {
        return function(payload) {
            return DI.$http(DI.ApiConfig.DELETE_SERVICE.setUrl(payload));
        };
    }

    getAreas(DI) {
        return function() {
            return DI.$http(DI.ApiConfig.GET_AREAS.setUrl());
        };
    }

    addArea(DI) {
        return function(payload) {
            return DI.$http(DI.ApiConfig.ADD_AREA.setUrl(payload));
        };
    }

    updateArea(DI) {
        return function(payload) {
            return DI.$http(DI.ApiConfig.UPDATE_AREA.setUrl(payload));
        };
    }

    deleteArea(DI) {
        return function(payload) {
            return DI.$http(DI.ApiConfig.DELETE_AREA.setUrl(payload));
        };
    }

    
    getVendors(DI) {
        return function() {
            return DI.$http(DI.ApiConfig.GET_VENDORS.setUrl());
        };
    }

    addVendor(DI) {
        return function(payload) {
            return DI.$http(DI.ApiConfig.ADD_VENDOR.setUrl(payload));
        };
    }

    updateVendor(DI) {
        return function(payload) {
            return DI.$http(DI.ApiConfig.UPDATE_VENDOR.setUrl(payload));
        };
    }

    deleteVendor(DI) {
        return function(payload) {
            return DI.$http(DI.ApiConfig.DELETE_VENDOR.setUrl(payload));
        };
    }

    vendorsList(DI) {
        return function() {
            return DI.$http(DI.ApiConfig.GET_VENDORS_LIST.setUrl());
        };
    }

    vendorById(DI) {
        return function(id) {
            return DI.$http(DI.ApiConfig.GET_VENDOR_BYID.setUrl(id));
        };
    }

    addAddress(DI) {
        return function(id) {
            return DI.$http(DI.ApiConfig.ADD_ADDRESS.setUrl(id));
        };
    }

    findAddressByVendor(DI) {
        return function(id) {
            return DI.$http(DI.ApiConfig.GET_ADDRESS_BY_VENDOR.setUrl(id));
        };
    }
    addVendorServices(DI) {
        return function(id) {
            return DI.$http(DI.ApiConfig.ADD_VENDOR_SERVICES.setUrl(id));
        };
    }

    findServicesByVendor(DI) {
        return function(id) {
            return DI.$http(DI.ApiConfig.GET_SERVICES_BY_VENDOR.setUrl(id));
        };
    }

    addContact(DI) {
        return function(id) {
            return DI.$http(DI.ApiConfig.ADD_CONTACT.setUrl(id));
        };
    }

    findContactByVendor(DI) {
        return function(id) {
            return DI.$http(DI.ApiConfig.GET_CONTACT_BY_VENDOR.setUrl(id));
        };
    }
}
