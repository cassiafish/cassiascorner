$(document).ready(function () {

    $('.nav-container .design').hover(function(e) {
        $('.design h3').css("color", "#2e5a64");
    }, function() {
        $('.design h3').css("color", "#fff1df");
    }).click(function(e) {
        goToByScroll(".nav-container");
    });

    $('.nav-container .about').hover(function(e) {
        $('.about h3').css("color", "#2e5a64");
    }, function() {
        $('.about h3').css("color", "#fff1df");
    }).click(function(e) {
        goToByScroll(".about-container");
    });


    $('.nav-container .contact').hover(function(e) {
        $('.contact h3').css("color", "#2e5a64");
    }, function() {
        $('.contact h3').css("color", "#fff1df");
    }).click(function(e) {
        goToByScroll(".contact-container");
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