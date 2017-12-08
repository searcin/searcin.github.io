
import { HomeController } from './home.controller';
import { HomeRouter } from './home.route';
import { HomeService } from './home.service';


angular.module('searcin.home', [])
	.config(HomeRouter)
	.controller('HomeController', HomeController)
	.service('HomeService', HomeService);
