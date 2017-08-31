$(document).ready(function () {
    // $('.swipebox').swipebox();
    //
    // $('.swipebox').click(function() {
    //     $(".top-container").show();
    //     $(".contact-container").hide();
    // });

    $(".logo-wrapper").click(function () {
        $(".top-container").show();
        $(".gallery-graphics-container").fadeOut();

        if (window.innerWidth <= 768) {
            $(".contact-container").hide();
        } else {
            $(".contact-container").fadeOut();
        }

        $(".gallery-image-container").fadeIn();
        goToByScroll("body");
        changeUrl("home", "/");
    });

    $("li.photography-nav").click(function () {
        $(".top-container").show();
        $(".gallery-graphics-container").hide();
        $(".contact-container").hide();
        $(".gallery-image-container").fadeIn();
        goToByScroll(".gallery-image-container");
        changeUrl("photos", "/photos");
    });

    $("li.graphics-nav").click(function () {
        $(".top-container").show();
        $(".gallery-image-container").hide();
        $(".contact-container").hide();
        $(".gallery-graphics-container").fadeIn();
        goToByScroll(".gallery-graphics-container");
        changeUrl("graphics", "/graphics");
    });

    $("li.contact-nav").click(function () {
        if (window.innerWidth <= 768) {
            $(".top-container").hide();
        } else {
            $(".top-container").show();
        }

        $(".contact-container").fadeToggle();
        goToByScroll("body");
        changeUrl("contact", "/contact");
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

    if (window.location.pathname.match(/photos$/)) {
        $(".top-container").show();
        $(".gallery-image-container").show();

    } else if (window.location.pathname.match(/graphics$/)) {
        $(".top-container").show();
        $(".gallery-graphics-container").show();

    } else if (window.location.pathname.match(/contact/)) {
        if (window.innerWidth <= 768) {
            $(".top-container").hide();
        } else {
            $(".top-container").show();
        }
        $(".gallery-image-container").fadeIn();
        $(".contact-container").fadeToggle();

    } else {
        $(".top-container").show();
        $(".gallery-image-container").fadeIn();
    }
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
 * @param speed
 */
function goToByScroll(id, speed) {
    if (speed === undefined) {
        speed = 'slow';
    }

    $('html,body').animate({
        scrollTop: $(id).offset().top - $(".nav-space").height()
    }, speed, function () {
    });
}

/**
 * Update browser url without reloading
 *
 * @param page
 * @param url
 */
function changeUrl(page, url) {
    if (typeof (history.pushState) !== "undefined") {
        var obj = {Page: page, Url: url};
        history.pushState(obj, obj.Page, obj.Url);
    }
}

// /**
//  * Scroll listener
//  */
// $(window).scroll(function () {
//
// });

$( window ).resize(function() {
    if (window.innerWidth <= 768 && $(".contact-container").is(":visible")) {
        $(".top-container").hide();
    } else {
        $(".top-container").show();
    }
});