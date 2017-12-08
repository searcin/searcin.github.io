export
    function IphoneClass() {
    return {
        scope: false,
        link: function (scope, element, attr) {
            checkResponsive();
            $(window).on('resize', function () {
                checkResponsive();
            });
            function checkResponsive() {
                if (platform.product === 'iPhone') {
                    if (window.innerWidth > window.innerHeight) {
                        element.removeClass("welcome-iphone-portrait").addClass("welcome-iphone-landscape");
                    }
                    else {
                        element.removeClass("welcome-iphone-landscape").addClass("welcome-iphone-portrait");
                    }
                }
            }

        }
    };

}