export
    function SetMinheight() {
    return {
        scope: false,
        link: function (scope, element, attr) {
            attr.$set('style', 'min-height:' + window.innerHeight + 'px');
            $(window).on('resize', function () {
                attr.$set('style', 'min-height:' + window.innerHeight + 'px');
            });
        }
    };
}