$(document).click(function(e) {
    if (!$(e.target).is('a')) {
        $('.collapse').collapse('hide');
      }
    }
);

$(document).ready(function() {
    $("#menu").click(function() {
        $(".main-nav").sidebar({
            dimPage: !1,
            transition: "push"
        }).sidebar("toggle");
    }), $("#intro").waypoint(function(direction) {
        $("nav").toggleClass("fix-navigation");
    }), (new WOW).init();

    // the "Last Work" grid is now rendered at build time by gulp-file-include
    // (see app/partials/last-work.html + lastwork-item.html), so it only
    // needs lazyload wired up here, not built from the `lastwork` object.
    $("img.lazy").lazyload();
});