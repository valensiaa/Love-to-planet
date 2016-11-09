

$(document).ready(function() {

//hover effects for buttons
    $('.btn-matrix').mouseover(function () {
        $(this).css('backgroundColor', '#FFF');
        $(this).css('color', '#FF0000');
        $(this).css('borderColor', '#FF0000');
        $(this).css('outline', 'none');
    })
    $('.btn-game').mouseover(function () {
        $(this).css('backgroundColor', '#FFF');
        $(this).css('color', '#FF7F00');
        $(this).css('borderColor', '#FF7F00');
        $(this).css('outline', 'none');
    })
    $('.btn-yoga').mouseover(function () {
        $(this).css('backgroundColor', '#FFF');
        $(this).css('color', '#F6EC13');
        $(this).css('borderColor', '#F6EC13');
        $(this).css('outline', 'none');
    })
    $('.btn-shop').mouseover(function () {
        $(this).css('backgroundColor', '#FFF');
        $(this).css('color', '#3a53a4');
        $(this).css('borderColor', '#3a53a4');
        $(this).css('outline', 'none');
    })
      $('.btn-shop, .btn-yoga, .btn-game, .btn-matrix').mouseout(function () {
        $(this).css('backgroundColor', '#FFF');
        $(this).css('color', '#333333');
        $(this).css('borderColor', '#e1e1e1');
        $(this).css('outline', 'none');
    })
     $('.nav-link').mousedown(function () {
        $(this).css('outline', 'none');
    });


    

    $('.game, .game-path, .greenleft').addClass("hidden-animation").viewportChecker({
    classToAdd: 'visible-animation animated slideInLeft',
    offset: 100
    });
    $('.matrix-road, .matrix-path, .shop-path').addClass("hidden-animation").viewportChecker({
    classToAdd: 'visible-animation animated zoomInRight',
    offset: 100
    });
    $('.yoga-path, .product-card div').addClass("hidden-animation").viewportChecker({
    classToAdd: 'visible-animation animated zoomIn',
    offset: 100
    });
    $('.greenright').addClass("hidden-animation").viewportChecker({
    classToAdd: 'visible-animation animated slideInRight',
    offset: 100
    });
    $('.aboutus-p, .game-path-btn, .btn-product').addClass("hidden-animation").viewportChecker({
    classToAdd: 'visible-animation animated flipInX',
    offset: 100
    });
    $('.header').addClass("hidden-animation").viewportChecker({
    classToAdd: 'visible-animation animated fadeInRight',
    offset: 100
    });

  $('.stickers div').mouseover(function() {
    $(this).css('z-index', '999');
  });
  $('.stickers div').mouseout(function() {
    $(this).css('z-index', '1');
  });
    

    $('#fix-nav > li').hover( function () {
        $('a',$(this)).stop().animate({'marginLeft':'10px'}, 250);
            
    },
    function() {
        $('a',$(this)).stop().animate({'marginLeft':'-200px'},250);
    });

    var hash = window.location.hash.substr(1);
    var href = $('.btn').each(function(){
        var href = $(this).attr('href');
        if(hash==href.substr(0,href.length-5)){
            var toLoad = hash+'.html #content';
            $('#content').load(toLoad);
        }                                           
    });
    
    $('.btn, .calendar-btn').click(function(){
        var url = $(this).attr('href'); 
        window.open(url, '_blank');                         
        // var toLoad = $(this).attr('href')+' #content';
        // $('#content, #left-block').hide('fast',loadContent);
        // $('#load').remove();
        // $('.wrapper').append('<span id="load">LOADING...</span>');
        // $('#load').fadeIn('normal').css('opacity','1');
        // window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
        // function loadContent() {
        //     $('#content').css('width','100%').load(toLoad,'',showNewContent());
        // }
        // function showNewContent() {
        //     $('#content, #logo').show('normal',hideLoader());
        //     $('#content').css('width','100%');
        // }
        // function hideLoader() {
        //     $('#load').fadeOut('normal');
        // }
        return false;       
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


$(document).ready(function() {
    $('#bubbles-img img').addClass('hidden-animation');
    $('#bubbles-img img').each(function(i) {
        var self = this;
        var time = i + '00';
        setTimeout(function() {
            $(self).viewportChecker({
            classToAdd: 'visible-animation animated zoomIn',
            offset: 100
            });
        }, time);
    });

$('.panel').click(function(){
    $('#bubbles-img img').hide();

});



    (function() {
  if (window.pluso)if (typeof window.pluso.start == "function") return;
  if (window.ifpluso==undefined) { window.ifpluso = 1;
    var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
    s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
    s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
    var h=d[g]('body')[0];
    h.appendChild(s);
  }})();

  $('.sign-product').hide();
  $('.show-sign').mouseover(function() {
    $(this).css('borderColor', '#3a53a4');
    $(this).next('.sign-product').show();
  });
  $('.show-sign').mouseout(function() {
    $(this).css('borderColor', '#e1e1e1');
    $(this).next('.sign-product').hide();
  });



//Изменение активного пункта меню при прокрутке страницы
$(document).on("scroll", onScroll);
 
    $("a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 300, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
 
    });

  


})
var menu_selector = ".nav-categories"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
function onScroll(){
    var scroll_top = $(document).scrollTop()+350;
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}

  $("#mobile-menu-open").click(function() {
        $(this).toggleClass('active');
        $(this).parents().toggleClass('open');
    })




