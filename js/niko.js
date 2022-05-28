//Javascript af Nikolai


window.addEventListener('scroll',function(){
    let content = document.querySelector('.k_bundgrid_right')
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active_bund')
    }else{
        content.classList.remove('active_bund');
    }
});

window.addEventListener('scroll',function(){
    let content = document.querySelector('.k_bundgrid_left')
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active_bund')
    }else{
        content.classList.remove('active_bund');
    }
});