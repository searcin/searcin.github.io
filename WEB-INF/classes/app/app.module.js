/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/

import { AppController } from "./app.controller";
import { AppRouter } from "./app.route";
import { AppConfig } from "./app.config";
import { AppRun } from "./app.run";
import { AppConstants } from './app.constants';
import { CommonService } from "./common.service";


angular.module("searcin", ["ui.router",
	"ui.bootstrap",
	"angularFileUpload",
	"pascalprecht.translate",
	"searcin.data-service",
	"searcin.home",
	"searcin.admin",
	"searcin.components",
	"searcin.common",
	"searcin.login"
])
	.constant("AppConstants", AppConstants)
	.controller("AppController", AppController)	
	.service("CommonService", CommonService)
	.config(AppRouter)
	.config(AppConfig)
	.run(AppRun);
