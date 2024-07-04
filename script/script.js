$('.about-items > div ').on('click', function(){
    $(this).children('.about-icon').toggleClass('active');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor')
    $(this).next('p').slideToggle(300)
})
$('.features-items>div').on('click',function(){
    $(this).next('p').slideToggle(300);
    $(this).toggleClass('toggleColor2');
    $(this).next().next('div').toggleClass('line-color-js')
})  
$('.carusel').slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
})

const href = document.getElementById('home');
const checkbox = document.getElementById('chb')
const bg = document.getElementById('bg');
const hed = document.getElementById('header')


console.log(href);
console.log(bg);

$(href).click(function(){
    hed.style.display != 'block';
})


