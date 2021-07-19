$('.container-slider').slick({
    dots: true,
    arrows:false,
    speed:1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }],
    });

var menuBtn = document.querySelector('.items-menu-mobile i');
        menuBtn.addEventListener('click',()=>{
            let itemsMenu = document.querySelector('.menu-mobile');
            if(itemsMenu.classList.contains('show')){
                itemsMenu.classList.add('hide')
                itemsMenu.classList.remove('show')
            }else{
                itemsMenu.classList.remove('hide')
                itemsMenu.classList.add('show')
            }
            
        })