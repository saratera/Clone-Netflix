$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
function abrirMenu(){
const itensMenuMobile = document.getElementById('itensMenuM');
    if(itensMenuMobile.style.display == 'none'){
        itensMenuMobile.style.display = 'block'
    }else{
        itensMenuMobile.style.display = 'none' 
    }
}
const menuMoile = document.getElementById('mobile');
menuMoile.addEventListener('click', abrirMenu);
    
