$(function () {
    console.log("insta");

    $.instagramFeed({
        'username': 'cajsa_kea',
        'container': "#my-instagram-feed",
        'iamge_size': [150, 240, 320, 480, 640],
        'display_profile': true,
        'display_biography': true,
        'display_igtv': false,
        'items': 8,
        'items_per_row': 4,
        'margin': 0.5,
        'styling': true,
        'display_gallery': true,
    });
})
