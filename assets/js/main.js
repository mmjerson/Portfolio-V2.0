const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const list = document.querySelector('.list');
    const navLinks = document.querySelectorAll('.list li');

    hamburger.addEventListener('click', () => { 
                //toggle nav
        list.classList.toggle('nav-active');

                //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //hamburger anim
        hamburger.classList.toggle('toggle');

    });


}

navSlide();
