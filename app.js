$(function() {


    // Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on("scroll", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll() {
        if( scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    // Smooth scroll
   $("[data-scroll]").on("click", function(event) {
       event.preventDefault();

       let elementId = $(this).data('scroll');
       let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

       $("html, body").animate ({
           scrollTop: elementOffset - 70
       }, 700);
   }) 



    //NavToggle
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    navToggle.on("click", function(event) {
    event.preventDefault();
    nav.toggleClass("show");
    });


});