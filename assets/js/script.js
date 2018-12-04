/* Initialize Swiper */
$(document).ready(function(){
    /* slider */
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    /* scroll de menú */
    $( window ).scroll(function() {
        $('.navbar').toggleClass( 'navbar-academia', $(this).scrollTop() > 50);
    });

    //index card - append
    $('.card .footer:first').append('<p class="tag_add"> ¡Últimos cupos! </p>');

    //index card -  preppend
    $('.card .title:last').prepend('<p class="tag">Nuevo: </p> ');

    //Noticias - ver más noticias
    $('#select_mas').click(function(e){
        e.preventDefault();
        var mas = $(this);
        $('.articulo').removeClass('hidden');
        mas.removeClass('mas_art').css('opacity', '0.5');
    });

    //cursos - ver más cursos
    $('#select_mas').click(function(e){
        e.preventDefault();
        var mas = $(this);
        $('#mas_cursos').removeClass('hidden');
        mas.removeClass('mas_art').css('opacity', '0.5');
    });

});
