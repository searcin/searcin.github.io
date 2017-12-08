export class FileUploadController {
    constructor($scope, $rootScope, $state, $timeout, FileUploader, AuthConfig) {
        'ngInject';
        let vm = this;
        vm.DI = () => ({
            $scope, $rootScope, $state, $timeout, FileUploader, AuthConfig
        });
        let uploader = $scope.uploader = new FileUploader({
            url: vm.apiUrl,
            headers: {Authorization:AuthConfig.USER.get().token}
        });
        
        $scope.$watch(() => vm.apiUrl, function (nv, ov) {
            $scope.uploader.url = nv;
        });


        // FILTERS

        // a sync filter
        uploader.filters.push({
            name: 'syncFilter',
            fn: function (item /*{File|FileLikeObject}*/, options) {
                console.log('syncFilter');
                return this.queue.length < 10;
            }
        });

        // an async filter
        uploader.filters.push({
            name: 'asyncFilter',
            fn: function (item /*{File|FileLikeObject}*/, options, deferred) {
                console.log('asyncFilter');
                setTimeout(deferred.resolve, 1e3);
            }
        });

        // CALLBACKS

        uploader.clearQueue = function() {
            //console.log(uploader.queue);
            angular.forEach(uploader.queue,(item,$index)=>{
                if(!item.isSuccess) {
                    uploader.queue.splice($index,1);
                }
            });
            //uploader.queue = [];
            //angular.element(document.getElementsByClassName("progress-bar")[0]).width = 0;
            uploader.progress = 0;
            angular.element(document.getElementById("input-file")).val("");
        };

        uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function (fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function (addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function (item) {       
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function (fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function (progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function (fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
            vm.logFileName = response.logFile;
            //vm.onSuccessUpload();
        };
        uploader.onErrorItem = function (fileItem, response, status, headers) {
            alert(response.message);
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function (fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function (fileItem, response, status, headers) {
            //console.info('onCompleteItem', fileItem, response, status, headers);
            if(status === 200) {
                vm.onComplete();
            }
        };
        uploader.onCompleteAll = function (fileItem, response, status, headers) {
            //vm.onSuccessUpload();
            alert("success");
            uploader.queue = [];
            uploader.progress = 0;
            angular.element(document.getElementById("input-file")).val("");
        };

        //console.info('uploader', uploader);

    }
}