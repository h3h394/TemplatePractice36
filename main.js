let menu = document.querySelector('.menu');
document.getElementById('burger').addEventListener('click', function () {
    menu.classList.toggle('show');
});

document.getElementById('close').addEventListener('click', function () {
    menu.classList.toggle('show');
});

let links = document.querySelectorAll('.menu a');

links.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        900,
        'linear'
    )
});

$('.menu a').on('click', function () {
    $('.menu .active').removeClass('active');
    $(this).addClass('active');
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 30) {
        $("nav").css({ "box-shadow": "0px 2px 8px 0px rgba(50, 50, 50, 0.08)", "background": "#505288" });
        $(".menu a").css('color', 'rgba(255, 255, 255, 0.7)');
        $(".menu .active").css('color', '#fff');
    }
    else {
        $("nav").css({ "box-shadow": "none", "background": "transparent" });
        $(".menu a").css('color', 'rgba(255, 255, 255, 0.7)');
        $(".menu .active").css('color', '#fff');
    }
});