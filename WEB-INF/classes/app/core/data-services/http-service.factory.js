export function HttpService($http, ApiConfig) {
    'ngInject';
    let DI = {
        $http,
        ApiConfig
    };
    return {
        get: function (getUrl) {
            let url = DI.ApiConfig.BASEURL + DI.ApiConfig.WEBURL + getUrl;
            return DI.$http.get(url, {headers: {'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnYXV0aGFtIiwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJpYXQiOjE1MDk3OTM1NjV9.DD2i1KtxIpKb-mv-Qnxe-1Uiq7f2owccMOWgn-QntUk','Content-Type':'application/json'}}).then(function (response) {
                return response;
            }, function (error) {
                alert(error.data.error + "\n" + error.data.message);
                return error;
            });
        },
        post: function (postUrl, data) {
            let url = DI.ApiConfig.BASEURL + DI.ApiConfig.WEBURL + postUrl;
            return DI.$http.post(url, data).then(function (response) {
                return response;
            }, function (error) {
                alert(error.data.message);
                return error;
            });
        }
        // other $http wrappers
    };
}