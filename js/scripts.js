$(document).ready(function() {
    // TOP SECRET CREDENTIALS 
    var USER = 'patka';
    var PASS = 'patkavagyok';

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

    var loginActive = false;

    login.hide();
    content.hide();
    anniversary.hide();

    username.focus();

    password.keypress(function(e) {
        var key = e.which;
        if (key == 13) {
            submit.click();
            return false;
        }
    });

    setTimeout(function() {
        login.fadeIn();
        loginActive = true;
    }, 2300);

    submit.click(function() {
        if (username.val() === USER && password.val() === PASS) {
            error.hide();
            login.css('-webkit-transform', 'translateY(-100%)');
            setTimeout(function() {
                login.fadeOut();
            }, 500);
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
