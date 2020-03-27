$(function () { // DOM ready for jQuery??
    //write your code below

    $(window).on('load', function () {
        console.log("pre");
        $('.preloader').fadeOut('slow');
    });

    (function ($) {

    })(jQuery);

    //The two go to debugging tools: alert & console.log - uncomment them using // or /* .... */
    //alert("hey");
    console.log('hi there from "js/scripts.js" - good to see you');
    //console.error('Just checking if YOU are checking the console. You should always open Chrome DevTools and check the console when doing web development. \n\nPlease uncomment or delete these messages from the js-file. \n\nBUT remember the syntax for alert and console.log \(e.g. by keeping then in the comments in the file\). \n\n//Lasse');
}); //END DOM ready


$(function () {
    console.log("insta");

    $.instagramFeed({
        'username': 'cajsaphoebe',
        'container': "#my-instagram-feed",
        'iamge_size': [150, 240, 320, 480, 640],
        'display_profile': false,
        'display_biography': true,
        'display_igtv': false,
        'items': 8,
        'items_per_row': 4,
        'margin': 0.5,
        'styling': true,
        'display_gallery': true,
    });
})

$(function () { // DOM ready for jQuery??
    $('.parallax-window').parallax({});
}); //END DOM ready


//$(function () { // DOM ready for jQuery??
//            function isMobile() {
//                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//            }
//            if (!isMobile()) {
//                //alert('hello');
//                $('.parallax-window').parallax({});
//            } else {
//                alert("hello");
//            }
