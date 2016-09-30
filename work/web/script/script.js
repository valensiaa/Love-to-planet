//     function sendPar(s) {
//     var position = s.getBoundingClientRect();
//     console.log(position);
// }
$(document).ready(function() {
    $('.btn-matrix').mousedown(function () {
        $(this).css('backgroundColor', '#FFF');
        $(this).css('color', '#FF0000');
        $(this).css('borderColor', '#FF0000');
        $(this).css('outline', 'none');
    })
    $('.btn-game').mousedown(function () {
        $(this).css('backgroundColor', '#FFF');
        $(this).css('color', '#FF7F00');
        $(this).css('borderColor', '#FF7F00');
        $(this).css('outline', 'none');
    })
    $('.btn-yoga').mousedown(function () {
        $(this).css('backgroundColor', '#FFF');
        $(this).css('color', '#F6EC13');
        $(this).css('borderColor', '#F6EC13');
        $(this).css('outline', 'none');
    })
    $('.btn-shop').mousedown(function () {
        $(this).css('backgroundColor', '#FFF');
        $(this).css('color', '#3a53a4');
        $(this).css('borderColor', '#3a53a4');
        $(this).css('outline', 'none');
    })
     $('.nav-link').mousedown(function () {
        $(this).css('outline', 'none');
    });
    

    $('.game, .game-path, .greenleft').addClass("hidden-animation").viewportChecker({
    classToAdd: 'visible-animation animated slideInLeft',
    offset: 100
    });
    $('.matrix-road, .matrix-path').addClass("hidden-animation").viewportChecker({
    classToAdd: 'visible-animation animated zoomInRight',
    offset: 100
    });
    $('.yoga-path').addClass("hidden-animation").viewportChecker({
    classToAdd: 'visible-animation animated zoomIn',
    offset: 100
    });
    $('.greenright').addClass("hidden-animation").viewportChecker({
    classToAdd: 'visible-animation animated slideInRight',
    offset: 100
    });
    $('.aboutus-p').addClass("hidden-animation").viewportChecker({
    classToAdd: 'visible-animation animated flipInX',
    offset: 100
    });
    $('.header').addClass("hidden-animation").viewportChecker({
    classToAdd: 'visible-animation animated fadeInRight',
    offset: 100
    });



    });
    // $('#content').scrollspy({ target: '#navbar-spy' })


    // $('.btn-matrix').mouseover(function () {
    //     $(this).css('color', '#FF0000');
    //     $(this).css('borderColor', '#FF0000');
    // })
    // $('.btn-matrix').mousemove(function () {
    //     $(this).css('color', '#333333');
    //     $(this).css('borderColor', '#e1e1e1');
    // })
