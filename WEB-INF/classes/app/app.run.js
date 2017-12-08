export function AppRun($rootScope, $http, ApiConfig, AuthConfig, $location) {
    ApiConfig.BASEURL = window.env.BASE_URL;
    ApiConfig.WEBURL = window.env.WEB_SERVICE;
    $rootScope.$on('login', (event, params) => {
        $http.defaults.headers.common.Authorization = params.token;
        AuthConfig.USER.set(params);
    });
    $rootScope.$on('logout', (event, params) => {
        $http.defaults.headers.common.Authorization = "";        
        AuthConfig.USER.clear();
    });

    let user = AuthConfig.USER.get();
    if (user) {
        $rootScope.$emit('login', user);
    }
    else {
        $rootScope.$emit('logout');
    }    
}



AppRun.$inject = ['$rootScope', '$http', 'ApiConfig', 'AuthConfig', '$location'];
