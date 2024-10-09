window.addEventListener('scroll', function(){
    const content = document.querySelector('.page-body');
    const content2 = document.querySelector('.page-body-mid-content');
    const content3 = document.querySelector('.page-body-mid-video');
    const content4 = document.querySelector('#last-content');
    const navbar = document.querySelector('.navbar');

    const scrollPosition = window.scrollY;

    if (scrollPosition > 50){
        navbar.classList.add('scrolled');
    } else{
        navbar.classList.remove('scrolled');
        content.classList.remove('fade-out');
        content2.classList.remove('fade-out');
        content3.classList.remove('fade-out');
        content4.classList.remove('fade-out')

    }

    if (scrollPosition > 100){
        content.classList.add('fade-out');
    }

    if (scrollPosition > 700){
        content2.classList.add('fade-out');
    } else{
        content2.classList.remove('fade-out');
    }

    if (scrollPosition > 1400){
        content3.classList.add('fade-out');
    } else{
        content3.classList.remove('fade-out');
    }

    if (scrollPosition > 2000){
        content4.classList.add('fade-out');
    } else{
        content4.classList.remove('fade-out');
    }
}
)