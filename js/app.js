const cardsleft = document.querySelectorAll('.k_grid_left');


const callback = (elements) => {
    elements.forEach(ele => {
        if(ele.isIntersecting  && !ele.target.classList.contains('showright')){
            ele.target.classList.add('showright')
        }else{
            ele.target.classList.remove('showright')
        }
    })
}

const cardsright = document.querySelectorAll('.k_grid_right');


const callback2 = (elements) => {
    elements.forEach(ele => {
        if(ele.isIntersecting  && !ele.target.classList.contains('showleft')){
            ele.target.classList.add('showleft')
        }else{
            ele.target.classList.remove('showleft')
        }
    })
}

const observer = new IntersectionObserver(callback);
cardsleft.forEach(card => observer.observe(card))

const observer2 = new IntersectionObserver(callback2);
cardsright.forEach(card => observer2.observe(card))