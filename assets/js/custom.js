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
        }).sidebar("toggle")
    }), $("#intro").waypoint(function(direction) {
        $("nav").toggleClass("fix-navigation")
    }), (new WOW).init()
});

window.onscroll = function() {myFunction()};

var header = document.getElementById("home-menu");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("fixed-bar");
    } else {
        header.classList.remove("fixed-bar");
    }
}

var template_small = "";
for (var k in lastwork) {
    template_small += '<div class="col-md-3 col-sm-3 col-xs-6">' +
        '<div class="lw-item wow flipInX" data-wow-duration="2s" data-wow-delay="0.6s">' +
          '<div class="ImageWrapper" onclick="activateModal(' + "'" + lastwork[k]['key'] + "'" + ')">' +
              '<img class="img-responsive" id="' + lastwork[k]['key'] + '" alt="">' +
              '<div class="PStyleHe"></div>' +
          '</div>' +
        '</div>' +
      '</div>';
}//src="assets/images/lastwork/' + lastwork[k]['key'] + '.min.webp"
console.log(template_small);
document.getElementById("lastwork").innerHTML = template_small;