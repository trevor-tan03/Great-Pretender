const aboutSection = document.querySelector('.hero-content');
const header = document.querySelector('header')

aboutSectionOptions = {
    rootMargin: '-200px 0px 0px 0px'
};

const observer = new IntersectionObserver(
function(entries, observer) {
    entries.forEach(entry => {
        if (!entries.isIntersecting){
            console.log(entry.target)
            header.classList.add('nav-scrolled');
        }
        else{
            header.classList.remove('nav-scrolled');
        }
    });
}, aboutSectionOptions);

observer.observe(aboutSection)