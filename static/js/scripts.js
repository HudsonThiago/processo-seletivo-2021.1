function scrollHeader() {
    const nav = document.getElementById('header');

    if (this.scrollY >= 50) nav.classList.add('active-header'); 
    else nav.classList.remove('active-header');
}

window.addEventListener('scroll', scrollHeader)

// MENU MOBILE

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }
}

showMenu('bx', 'menu-mobile');


// SLIDE
let time = 4000,
    currentCardIndex = 0,
    cards = document
                .querySelectorAll("#slide div")
    max = cards.length;

function nextCard() {

    cards[currentCardIndex]
        .classList.remove("selected")

    currentCardIndex++

    if(currentCardIndex >= max) 
        currentCardIndex = 0
    

    cards[currentCardIndex]
        .classList.add("selected")
    
}

function start () {
    setInterval(() => {
        // Troca card
        nextCard()
    }, time)
}

window.addEventListener("load", start);
