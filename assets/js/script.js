/* Initialize Swiper */
$(document).ready(function(){
    /* Initialize Swiper */
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
        $( '.navbar' ).toggleClass( 'navbar-academia', $(this).scrollTop() > 50);
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



    /* filtro gris galería
    $('.example-image').on('mouseover', function(){
        $(this).toggleClass('filtro');
    });
    function mostrar_ocultar(){
        var color = document.getElementsByClassName('example-image')

        if (color.mouseover) {
            color.addClass('filtro');
        }
        else {
            color.removeClass('filtro');

        }
    }*/









    /* alert inscripción terminada
    $('#confirmar').on ('click', function(){
        alert('Gracias por su inscripción, nos contactaremos contigo a la brevedad');
        $('#exampleModal-final').removeClass('hidden');


    });

    $( "#select_cursos" ).click(function() {
      $( "div.first" ).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
      $( "div.second" ).slideUp( 300 ).fadeIn( 400 );
    });*/

//$('#myModal').modal(options)







    /* .card p:first


    $('.footer').on('click', 'button', function(){
        event.stopPropagation();
        $(this).parent().fadeOut(500);
    });

    $(document).on('click','#contact_tools li a',function(){

        $('#contact_tools li').removeClass('active');
        $(this).parent('li').addClass('active');

    });*/

});
