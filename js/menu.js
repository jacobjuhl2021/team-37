/* menubar js */
/* Acess - hvilke elementer skal aktiveres */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const mobileMenu = document.querySelector(".nav-menu--mobile");
const menuListe = document.querySelector(".li_liste");

mobileMenu.style.top = "-555px";


/* animering af x i menu + udfold af menu punkter */
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");

    if(mobileMenu.style.top == "-555px") {
        mobileMenu.style.top = "0px";
    } else {
        mobileMenu.style.top = "-555px";
    }
})

    //array
    const menuPunkter = [
        {
            link: "https://pentia.dk/stratecution/",
            text: "Stratecution"
        },
        {
            link: "cases.html",
            text: "Cases"
        },
        {
            link: "https://pentia.dk/services/",
            text: "Services"
        },
        {
            link: "karriere.html",
            text: "Karriere"
        },
        {
            link: "https://pentia.dk/nyt/",
            text: "Nyt"
        },
        {
            link: "https://pentia.dk/events/",
            text: "Events"
        },
        {
            link: "https://pentia.dk/om-pentia/",
            text: "Om Pentia"
        }
    ]
    //forEach Loop
    menuPunkter.forEach(function(menupunkt) {
        const menuItem = document.createElement('li');
        menuItem.classList.add('nav-item');
    
        const atag = document.createElement('a');
        atag.classList.add('nav-link');
        atag.setAttribute('href', menupunkt.link)
        atag.innerText = menupunkt.text;

        menuItem.appendChild(atag);
        menuListe.appendChild(menuItem);
    });