// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

var is_open = false;

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');

    if (is_open) {
        document.body.style.overflow = "visible";
        is_open = false;
    } else {
        document.body.style.overflow = "hidden";
        is_open = true;
    }
}

// navLinkClick function
function navLinkClick() {
    if(navMenu.classList.contains('open')) {
        navToggler.click();
        document.body.style.overflow = "visible";
    }
}