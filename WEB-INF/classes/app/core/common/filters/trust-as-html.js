export function trustAsHtml($sce) {
    return function (input) { 
        return $sce.trustAsHtml(input);
    };
}


trustAsHtml.$inject = ['$sce'];