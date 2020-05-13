$(function () { 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) { 
            $('.navbar .navbar-brand img').attr('src','img/kremlin_logo.png');
        }
        if ($(this).scrollTop() < 50) { 
            $('.navbar .navbar-brand img').attr('src','img/kremlin_logo_light.png');
        }
    })
});