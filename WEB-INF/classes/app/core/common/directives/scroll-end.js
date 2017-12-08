export
    function ScrollEnd($window) {
    return {
        scope: {
            onReach: '&'
        },
        link: function (scope, element, attr) {
            let page = angular.element($window);
            page.unbind("scroll");
            page.bind("scroll", function (evt) {

                let offsetHeight = element[0].offsetHeight;
                let offsetTop = element[0].offsetTop;
                let windowHeight = $window.innerHeight;
                let scrollTop = ($window.scrollY === undefined)?$window.pageYOffset:$window.scrollY;
                if ((offsetTop + offsetHeight) < (scrollTop + windowHeight)) {
                    scope.onReach();
                }
            });
        }
    };
}


ScrollEnd.$inject = ['$window'];