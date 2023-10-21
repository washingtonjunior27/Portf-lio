// FUNCTIONS
const openMenuMobile = () => document.querySelector('.navbar').classList.toggle('active');

const writteText = (element) => {
    const newEl = element.innerHTML.split('');
    element.innerHTML = "";
    newEl.forEach((letter, i) => {
        setTimeout(() => {
            element.innerHTML += letter;
        }, 75 * i);
    });
}

const closeMobileMenuOnClick = () => {
    const navItems = document.querySelectorAll('.navbar ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.navbar').classList.toggle('active');
        })
    })
}

// EVENTS
document.getElementById('toggle').addEventListener('click', () => openMenuMobile())
writteText(document.querySelector('.hero-title'));
closeMobileMenuOnClick();

window.addEventListener('scroll', () => {
    window.scrollY > 0 
            ? document.querySelector('.header').classList.add('active') 
            : document.querySelector('.header').classList.remove('active')
})