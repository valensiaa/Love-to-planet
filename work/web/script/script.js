//     function sendPar(s) {
//     var position = s.getBoundingClientRect();
//     console.log(position);
// }
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
    
$(document).ready(function() {
    $('.game, .game-path').addClass("hidden-animation").viewportChecker({
    classToAdd: 'visible-animation animated slideInLeft',
    offset: 100
    });
    $('.matrix-road, .matrix-path').addClass("hidden-animation").viewportChecker({
    classToAdd: 'visible-animation animated zoomInRight',
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
