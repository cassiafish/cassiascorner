$(document).ready(function () {

    $("li.home-nav").click(function () {
        changeUrl("home", "/");
        goToByScroll(".top-container");
    });

    $("li.design-nav").click(function () {
        changeUrl("design", "#design");
        goToByScroll(".design-container");
    });

    $("li.about-nav").click(function () {
        changeUrl("about", "#about");
        goToByScroll(".about-container");
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
        scrollTop: $(id).offset().top
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