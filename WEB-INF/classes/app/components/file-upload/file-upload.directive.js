export
    function FileUploadDirective() {
    let directive = {
        restrict: 'AE',
        templateUrl: 'components/file-upload/file-upload.html',
        scope: {
            apiUrl: '=',
            onComplete: '&'
        },
        controller: 'FileUploadController',
        controllerAs: 'fileupload',
        bindToController: true
        
    };
    return directive;
}