const fade = document.querySelectorAll('.fade-in')

const options = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(
    function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                return
            }
            else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, 
    options
);

fade.forEach(fade => {
    appearOnScroll.observe(fade);
});