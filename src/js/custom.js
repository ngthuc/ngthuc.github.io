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
    }), (new WOW).init();

    // the "Last Work" grid is now rendered at build time by gulp-file-include
    // (see app/partials/last-work.html + lastwork-item.html), so it only
    // needs lazyload wired up here, not built from the `lastwork` object.
    $("img.lazy").lazyload();

    // Single source of truth for the navbar's transparent<->solid state:
    // a plain scroll-position check (not a one-shot waypoint at #intro),
    // so scrolling back up reverts it right near the top instead of
    // leaving the nav non-fixed (and invisible) for the whole hero height.
    var $nav = $("nav.navbar");
    function toggleFixNav() {
        $nav.toggleClass("fix-navigation", window.scrollY > 50);
    }
    $(window).on("scroll", toggleFixNav);
    toggleFixNav();
});