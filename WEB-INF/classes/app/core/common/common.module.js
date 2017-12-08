
//filters
import restrictChar from './filters/restrict-char';
import { replaceString } from './filters/replace-string';
import { trustAsHtml } from './filters/trust-as-html';
import { capitalize } from './filters/capitalize';
import { validate } from './filters/validate';
import { makeitzero } from './filters/makeitzero';
import { operators } from './filters/operators';

//directives
import { IphoneClass } from './directives/iphone-class';
import { ScrollPos } from './directives/scroll-pos';
import { SetMinheight } from './directives/set-min-height';
import { ScrollEnd } from './directives/scroll-end';

//services
import { HistoryService } from './services/history';

angular.module('searcin.common', [])
    .filter("restrictChar", restrictChar)
    .filter("replaceString", replaceString)
    .filter("trustAsHtml", trustAsHtml)
    .filter("capitalize", capitalize)
    .filter("validate", validate)
    .filter("makeitzero", makeitzero)
    .filter("operators", operators)
    .directive("iphoneClass", IphoneClass)
    .directive("scrollPos", ScrollPos)
    .directive("setMinheight", SetMinheight)
    .directive("scrollEnd", ScrollEnd)
    .service("HistoryService", HistoryService);
