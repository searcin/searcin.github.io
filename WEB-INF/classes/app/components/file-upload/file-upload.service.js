
export class FileUploadService {
    constructor(dataServices, $q) {
        'ngInject';
        let vm = this;
        vm.DI = () => ({
            dataServices,
            $q
        });
    }

    downloadFile(fileName) {
        let vm = this,
            {
                dataServices,
                $q
            } = vm.DI();
        
        return $q(function (resolve, reject) {
            dataServices.downloadLog(fileName).then(function(response) {
                resolve(response);
            }, function(error) {
                reject(error);
            });
        });     
    }
}