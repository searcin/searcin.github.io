import { FileUploadDirective } from './file-upload.directive';
import { FileUploadController } from './file-upload.controller';
import { FileUploadService } from './file-upload.service';

angular.module('searcin.fileupload', [])
    .controller('FileUploadController', FileUploadController)
    .directive('fileUpload', FileUploadDirective)
    .service('FileUploadService', FileUploadService);