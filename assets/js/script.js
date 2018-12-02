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

    $('.card .footer:first').append('<p class="tag_add"> ¡Últimos cupos! </p>'); //index card - append
    $('.card .title:last').prepend('<p class="tag">Nuevo: </p> ');  //index card -  preppend

    /* Noticias - ver más noticias  */
    $('#select_mas').click(function(e){
        e.preventDefault();
        $('.articulo').removeClass('hidden');
        $(this).css('opacity', '0.5');
        $(this).removeClass('mas_art');
    });

    /* filtro gris galería */
    $('.example-image').on('mouseover', function(){
        $(this).toggleClass('filtro');
    });

    /* alert inscripción terminada */
    $('.modal-footer').on ('click', '.clase-button', function(){
        alert("Gracias por su inscripción, nos contactaremos contigo a la brevedad");
        $('#exampleModal-final').removeClass('hidden');
        $('#exampleModal').addClass('hidden');


    });


    $('#cargar_mas').click (function(){
        console.log('Gracias por su inscripción, nos contactaremos contigo a la brevedad');
        $('#mas_cursos').removeClass('hidden');
    });






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
