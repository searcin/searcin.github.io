/***************************************************************
* Proprietary & Confidential  |  © 2016 PhaseZero Ventures LLC 
* 
* This file is part of Tire Advisor project
* 
* This file cannot be copied and/or distributed without 
* the express permission of PhaseZero Ventures LLC
***************************************************************/
export function AppConfig($translateProvider, $httpProvider, AppConstants) {
    //$httpProvider.defaults.headers.common.access_token = "";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    angular.forEach(AppConstants.localization,(language)=>{
        $translateProvider.translations(language.langName, language.data);
        if(language.langName === AppConstants.defaultLang){
             $translateProvider.preferredLanguage(language.langName);
        }
    }); 
    $translateProvider.useSanitizeValueStrategy('escape');
}


AppConfig.$inject = ['$translateProvider', '$httpProvider','AppConstants'];
