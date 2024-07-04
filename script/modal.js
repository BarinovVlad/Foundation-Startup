$('.modal-overlay').on('click', function(e){
    if($(e.target).closest('.modal').length ==0){
        $(this).fadeOut()
    }
})

$('.close').on('click', function(){
    $(this).parents('.modal-overlay').fadeOut()
})
$('.modal-button').on('click', function(){
    $('.modal-overlay').fadeIn();
})
$(window).scroll(function(){
    if($(this).scrollTop() > 500){
      $('#up').fadeIn()
    }else{
        $('#up').fadeOut();
    }
})

$('#up').on('click', function(){
    $('html,body').animate({scrollTop: 0}, 600)
})

$('#home').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop: $('#header').offset().top}, 400)
})

$('#Stories').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop: $('#people-carusel').offset().top}, 400)
})
$('.second-modal-overlay').on('click', function(e){
    if($(e.target).closest('.modal2').length ==0){
        $(this).fadeOut()
    }
})

$('.close2').on('click', function(){
    $(this).parents('.second-modal-overlay').fadeOut()
})
$('.button-start').on('click', function(){
    $('.second-modal-overlay').fadeIn();
})