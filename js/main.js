const searchEl = document.querySelector('.search'); 
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색'); 
});



searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder',''); 
});


// disapper-side-popup//

const badgeEl = document.querySelector('header .badges');
const toTopEl =document.querySelector('#to-top');

window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY); 
    if(window.scrollY > 500){
        // gsap.to(요소, 지속시간,옵션); 
        gsap.to(badgeEl, .6, {
            opacity:0, 
            display:'none'
        });
        gsap.to(toTopEl,.2,{
            x:0
        });
    } else { gsap.to(badgeEl,.6,{
        opacity:1,
        display:'block'
    });
    gsap.to(toTopEl,.2,{
        x:100
    });
        
    }
},300)); 



toTopEl.addEventListener('click',function(){
    gsap.to(window, .7,{
        scrollTo: 0
    });
})




// disapper-side-popup-end//



// disapper-fade-in//


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
        delay:(index+1) *.7, 
        opacity:1 
    });
});

// disapper-fade-in-end//


// attention menu//

new Swiper('.notice-line .swiper-container',{
    direction:'vertical',
    autoplay: true,
    loop: true
});


new Swiper('.promotion .swiper-container',{
    slidesPerView: 3, 
    spaceBetween: 10,
    centeredSlides: true, 
     loop:true,
    // autoplay:{
    //     delay:5000
    // }

    pagination:{
        el:'.promotion .swiper-pagination',
        clickable: true
    }, 
    navigation: {
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});



new Swiper('.awards .swiper-container',{
    
    autoplay:{
        delay:1000 
    },
    slidesPerView: 5,
    spaceBetween:30. ,
    centeredSlides:true,
    loop:true, 
    navigation:{
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }

});

//promotion slide-control//

const promotionEl = document.querySelector('.promotion');

const promotionToggleBtn = document.querySelector('.togglepromotion'); 

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion
    if (isHidePromotion){
        //hide//
        promotionEl.classList.add('hide');
    }else{
        promotionEl.classList.remove('hide');
    }
});



//youtube-Icon//

function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }




function floatingObeject(selector,delay,size){
    gsap.to(selector,random(1.5,2.5),{
        y:size,
        repeat:-1,
        yoyo:true,
        ease:Power1.easeInOut,
        delay: random(0, delay)
    });
}

floatingObeject('.floating1',1,15);

floatingObeject('.floating2',.5,15);

floatingObeject('.floating3',1.5,20);


// scroll-magic//

const spyEls =document.querySelectorAll('section.scroll-spy'); 


spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement:spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});


// footer///


const thisYear =document.querySelector('.this-year');

thisYear.textContent = new Date().getFullYear();


// scroll-btn//