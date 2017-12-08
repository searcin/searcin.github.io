export
    function ScrollPos() {
    return {
        scope: {
            onScroll: '&'
        },
        link: function (scope, element, attr) {
            element.on("scroll", function () {
                scope.onScroll({ pos: this.scrollTop });
            });
        }
    };
}