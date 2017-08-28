$(document).ready(function () {
    $('.swipebox').swipebox();

    $(".logo-wrapper").click(function () {
        $(".gallery-graphics-container").hide();
        $(".gallery-image-container").show();
        goToByScroll("body");
    });

    $("li.photography-nav").click(function () {
        $(".gallery-graphics-container").hide();
        $(".gallery-image-container").show();
        goToByScroll(".gallery-image-container");
    });

    $("li.graphics-nav").click(function () {
        $(".gallery-image-container").hide();
        $(".gallery-graphics-container").show();
        goToByScroll(".gallery-graphics-container");
    });

    $("li.contact-nav").click(function () {
        changeUrl("contact", "#contact");
        goToByScroll(".contact-container");
    });

    // Set current menu item as active
    $('.navbar li').click(function (e) {
        // var $this = $(this);
        // $('.navbar li.active').removeClass('active');
        // if (!$this.hasClass('active')) {
        //     $this.addClass('active');
        // }

        // Remove dropdown window on click
        if ($(".navbar-toggle").is(":visible")) {
            $(".navbar-collapse").removeClass("in").addClass("collapse");
        }
    });
});

/**
 * Detect mobile browser
 *
 * @param userAgent
 * @returns {boolean}
 */
function isMobile(userAgent) {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
}

/**
 * Scroll to div
 *
 * @param id
 */
function goToByScroll(id) {
    $('html,body').animate({
        scrollTop: $(id).offset().top - 60
    }, 'slow', function () {
    });
}

/**
 * Update browser url without reloading
 *
 * @param page
 * @param url
 */
function changeUrl(page, url) {
    if (typeof (history.pushState) != "undefined") {
        var obj = {Page: page, Url: url};
        history.pushState(obj, obj.Page, obj.Url);
    }
}

/**
 * Scroll listener
 */
$(window).scroll(function () {

});