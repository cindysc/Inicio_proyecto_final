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

    /* filtro gris galería */
    $('.example-image').on('mouseover', function(){
        $(this).toggleClass('filtro');
    });

    /* alert inscripción terminada */
    $(".modal-footer").on ("click", '.clase-button', function(){
        alert("Gracias por su inscripción, nos contactaremos contigo a la brevedad");
    });
});
