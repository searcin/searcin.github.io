
import { AdminRequest } from "./http-request/admin-request";

export function DataServices(HttpService, ApiConfig) {
    'ngInject';
    let DI = {
        HttpService,
        ApiConfig
    };
    return {
        info: function() {
            return DI.HttpService.get(ApiConfig.INFO);
        },
        login: function(payload) {
            let url = ApiConfig.LOGIN + "?username=" + payload.username + "&password=" + payload.password;
            return DI.HttpService.get(url);
        },
        details: function(username) {
            let url = ApiConfig.DETAILS.replace("%uname%", username);
            return DI.HttpService.get(url);
        },
        getCategories: function (page, size) {
            let url = ApiConfig.GET_CATEGORIES.replace("%page%", page-1);
            url = url.replace("%size%", size);
            return DI.HttpService.get(url);
        },
        getCategory: function (id) {
            let url = ApiConfig.GET_CATEGORY.replace("%id%", id);
            return DI.HttpService.get(url);
        },
        saveCategory: function(payload) {
            return DI.HttpService.post(ApiConfig.SAVE_CATEGORY, payload);
        },
        deleteCategory: function(id) {
            let url = ApiConfig.DELETE_CATEGORY.replace("%id%", id);
            return DI.HttpService.get(url);
        },
        getSubCategories: function(id) {
            let url = ApiConfig.GET_SUB_CATEGORIES.replace("%id%",id);
            return DI.HttpService.get(url);
        },
        getSubCategory: function(id) {
            let url = ApiConfig.GET_SUB_CATEGORY.replace("%id%",id);
            return DI.HttpService.get(url);
        },
        saveSubCategory: function(id, payload) {
            let url = ApiConfig.SAVE_SUB_CATEGORY.replace("%id%", id);
            return DI.HttpService.post(url, payload);
        },
        deleteSubCategory: function(id) {
            let url = ApiConfig.DELETE_SUB_CATEGORY.replace("%id%", id);
            return DI.HttpService.get(url);
        },
        getServices: function() {
            return DI.HttpService.get(ApiConfig.GET_SERVICES);
        },
        getService: function(id) {
            let url = ApiConfig.GET_SERVICE.replace("%id%", id);
            return DI.HttpService.get(url);
        },
        saveService: function(payload) {
            return DI.HttpService.post(ApiConfig.SAVE_SERVICE, payload);
        },
        deleteService: function(id) {
            let url = ApiConfig.DELETE_SERVICE.replace("%id%", id);
            return DI.HttpService.get(url);
        },
        getAreas: function() {
            return DI.HttpService.get(ApiConfig.GET_AREAS);
        },
        getArea: function(id) {
            let url = ApiConfig.GET_AREA.replace("%id%", id);
            return DI.HttpService.get(url);
        },
        saveArea: function(payload) {
            return DI.HttpService.post(ApiConfig.SAVE_AREA, payload);
        },
        deleteArea: function(id) {
            let url = ApiConfig.DELETE_AREA.replace("%id%", id);
            return DI.HttpService.get(url);
        },
        saveVendor: function(payload) {
            return DI.HttpService.post(ApiConfig.SAVE_VENDOR, payload);
        },
        getVendors: function() {
            return DI.HttpService.get(ApiConfig.GET_VENDORS);
        },
        getDetail: function(id) {
            let url = ApiConfig.GET_DETAIL.replace("%id%", id);
            return DI.HttpService.get(url);
        },
        getVendor: function(id) {
            let url = ApiConfig.GET_VENDOR.replace("%id%", id);
            return DI.HttpService.get(url);
        },
        deleteVendor: function(id) {
            let url = ApiConfig.DELETE_VENDOR.replace("%id%", id);
            return DI.HttpService.get(url);
        },
        getClassRange: function(id) {
            return DI.HttpService.get(ApiConfig.CLASS_RANGE);
        },
        getAddress: function(id) {
            let url = ApiConfig.ADDRESS_BY_VENDOR.replace("%id%", id);
            return DI.HttpService.get(url);
        },
        saveAddress: function(id, payload) {
            let url = ApiConfig.SAVE_ADDRESS.replace("%id%",id);
            return DI.HttpService.post(url, payload);
        },
        getContact: function(id) {
            let url = ApiConfig.CONTACT_BY_VENDOR.replace("%id%",id);
            return DI.HttpService.get(url);
        },
        saveContact: function(id, payload) {
            let url = ApiConfig.SAVE_CONTACT.replace("%id%", id);
            return DI.HttpService.post(url, payload);
        },
        getVendorServices: function(id) {
            let url = ApiConfig.SERVICES_BY_VENDOR.replace("%id%", id);
            return DI.HttpService.get(url);
        },
        saveVendorServices: function(id, payload) {
            let url = ApiConfig.SAVE_VENDOR_SERVICES.replace("%id%", id);
            return DI.HttpService.post(url, payload);
        },
        getLogo: function(id) {
            let url = ApiConfig.GET_LOGO.replace("%id%", id);
            return DI.HttpService.get(url);
        },
        getGallery: function(id) {
            let url = ApiConfig.GET_GALLERY.replace("%id%", id);
            return DI.HttpService.get(url);
        },
        deleteGallery: function(id, key) {
            let url = ApiConfig.DELETE_GALLERY.replace("%id%", id);
            url = url.replace("%key%", key);
            return DI.HttpService.get(url);
        },
        deleteLogo: function(id, key) {
            let url = ApiConfig.DELETE_LOGO.replace("%id%", id);
            url = url.replace("%key%", key);
            return DI.HttpService.get(url);
        }
        // },
        // deleteCategory: adminRequest.deleteCategory(DI),
        // getSubCategories: adminRequest.getSubCategories(DI),
        // saveSubCategory: adminRequest.saveSubCategory(DI),
        // deleteSubCategory: adminRequest.deleteSubCategory(DI),
        // getServices: adminRequest.getServices(DI),
        // addService: adminRequest.addService(DI),
        // updateService: adminRequest.updateService(DI),
        // deleteService: adminRequest.deleteService(DI),
        // getAreas: adminRequest.getAreas(DI),
        // addArea: adminRequest.addArea(DI),
        // updateArea: adminRequest.updateArea(DI),
        // deleteArea: adminRequest.deleteArea(DI),
        // getVendors: adminRequest.getVendors(DI),
        // addVendor: adminRequest.addVendor(DI),
        // updateVendor: adminRequest.updateVendor(DI),
        // deleteVendor: adminRequest.deleteVendor(DI),
        // vendorsList: adminRequest.vendorsList(DI),
        // vendorById: adminRequest.vendorById(DI),
        // addAddress: adminRequest.addAddress(DI),
        // findAddressByVendor: adminRequest.findAddressByVendor(DI),
        // addContact: adminRequest.addContact(DI),
        // findContactByVendor: adminRequest.findContactByVendor(DI),
        // addVendorServices: adminRequest.addVendorServices(DI),
        // findServicesByVendor: adminRequest.findServicesByVendor(DI)
    };

}
