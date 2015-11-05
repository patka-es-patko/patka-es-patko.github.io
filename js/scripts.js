$(document).ready(function() {
    // TOP SECRET CREDENTIALS 
    var USER = '';
    var PASS = '';

    // ELEMENTS
    var login = $($('.login')[0]);
    var loading = $($('.loading')[0]);
    var content = $($('.content')[0]);
    var anniversary = $($('.anniversary')[0]);

    var username = $($('.username')[0]);
    var password = $($('.password')[0]);
    var submit = $($('.submit')[0]);

    var error = $($('.error')[0]);
    var video = document.getElementById('video');

    var stopStart = $($('.stopstart')[0]);

    submit.click(function() {
        if (username.val() === USER && password.val() === PASS) {
            error.hide();
            login.fadeOut();
            loading.fadeIn();
            setTimeout(function() {
                loading.fadeOut();
                content.fadeIn();
                video.play();
            }, 3000);
        } else {
            error.fadeIn();
        }
    });

    $(video).on('ended', function() {
        content.fadeOut();
        anniversary.fadeIn();
    });

});