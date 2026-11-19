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
    // stay transparent for the whole hero background, switch to solid
    // only once it's been scrolled past (i.e. the next section is what's
    // behind the fixed nav), symmetric in both scroll directions.
    var $nav = $("nav.navbar");
    var $hero = $("#homepage");
    function toggleFixNav() {
        $nav.toggleClass("fix-navigation", window.scrollY > $hero.outerHeight());
    }
    $(window).on("scroll", toggleFixNav);
    $(window).on("resize", toggleFixNav);
    toggleFixNav();
});