const menuBtn = document.querySelector('.nav-menu-btn')
let menuNav = document.getElementById('mobileNav')
let overlay = document.getElementById('overlay')

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen){
        menuBtn.classList.add('open');
        menuNav.style.width = '300px';
        overlay.style.display = 'block';
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuNav.style.width = '0';
        overlay.style.display = 'none';
        menuOpen = false;
    }
});

let CaseLink = document.getElementById('cases-link');
const CaseDropdown = document.querySelector('.cases-dropdown');
const arrow = document.querySelector('.dropdown-arrow');

let showDropdown = false;

document.addEventListener('click', (evt) => {
    let clicked = evt.target;
    if(!showDropdown && clicked == CaseLink){
        CaseDropdown.classList.add('open');
        arrow.classList.add('flip');

        showDropdown = true;
    }
    else if(showDropdown){
        CaseDropdown.classList.remove('open');
        arrow.classList.remove('flip');

        showDropdown = false;
    }
    else{
        return;
    }
});

const mobileCaseLink = document.querySelector('.cases-mobile')
const mobileCaseDropdown = document.querySelector('.cases-mobile-dropdown')

mobileCaseLink.addEventListener('click', () => {
    mobileCaseDropdown.classList.toggle('open');
})