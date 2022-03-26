$(function () {

    
   
    
    $(".preloder-wrap .loader").fadeOut(1000, function () {

    $(this).parent().fadeOut(1000, function () {

      $(this).remove();
    });

  });
    

    $(window).scroll(function () {

        var scrolltop = $(".scroll-top");

        if ($(window).scrollTop() > 700) {

            scrolltop.fadeIn(1000);
        } else {

            scrolltop.fadeOut(1000);
        }

    });

    $(".scroll-top").click(function () {

        $("html , body").animate({

            scrollTop: 0
        }, 1000);

    });


    $('#owl-client').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navigation: true,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 1
            },

            1000: {
                items: 2
            }

        }
    })


    var winh = $(window).height(),
        toph = $(".top-bar").innerHeight(),
        linkh = $(".top-links").innerHeight(),
        navh = $(".navbar").innerHeight();

    $(".slide-example .carousel-item").height(winh - (toph + navh + linkh));

    $(".btn-toggler").on("click", function () {

        $(this).toggleClass("close");

    });

    $(".btn-toggler").on("click", function () {

        $(".collapse").slideToggle(500);

    });


    $('#mu-search-icon').on('click', function (event) {
        event.preventDefault();
        $('#mu-search').addClass('mu-search-open');
        $('#mu-search form input[type="search"]').focus();
    });

    $('.mu-search-close').on('click', function (event) {
        $("#mu-search").removeClass('mu-search-open');
    });

    $('.counter').counterUp({
        delay: 30,
        time: 5000
    });

    $(".boxs").snakeify({
        speed: 200
    });

    $('.fancybox').fancybox();

    $(".our-work .m-btn ").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

    });

    /* video */

    $('#mu-video').on('click', function (event) {
        event.preventDefault();
        $('body').append("<div id='about-video-popup'><span class='fa fa-close'></span><iframe id='mutube-video' name='mutube-video' frameborder='0' allowfullscreen></iframe></div>");
        $("#mutube-video").attr("src", $(this).attr("href"));
    });

    // WHEN CLICK CLOSE BUTTON

    $(document).on('click', '#mu-video-close', function (event) {
        $(this).parent("div").fadeOut(1000);
    });

    // WHEN CLICK OVERLAY BACKGROUND
    $(document).on('click', '#about-video-popup', function (event) {
        $(this).remove();
    });

    $('#owl-price').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navigation: true,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 2
            },

            1000: {
                items: 3
            }

        }
    })


    $('#brand-company').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navigation: true,
        responsive: {
            0: {
                items: 2
            },

            600: {
                items: 3
            },

            1000: {
                items: 5
            }

        }
    })

    var switchvar = $(".switcher .switch-box");
    var pricingTab = $(".price-table");
    var tablist = $(".switcher .switcher-wrap");

    switchvar.on("click", function () {
        var $this = $(this);
        $this.find(".switch-slide").toggleClass("pricing-slide-off");
        pricingTab.children(".price-grid").toggleClass("active-price");
        tablist.children("span").toggleClass("active");
    })


});