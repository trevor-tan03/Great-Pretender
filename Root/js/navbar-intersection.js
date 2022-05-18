const aboutSection = document.querySelector('.flex-container');
const header = document.querySelector('header')

aboutSectionOptions = {
    rootMargin: '-600px 0px 0px 0px'
};

const observer = new IntersectionObserver(
function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            header.classList.add('show');
        }
        else{
            header.classList.remove('show');
        }
    });
}, aboutSectionOptions);

observer.observe(aboutSection)