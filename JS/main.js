let btn = document.getElementById("darkmode");
let darkMode = false;
let darkmode = document.getElementById("darkmode");

darkmode.innerHTML = '<i class="fas fa-moon"></i>';

function handleDarkMode() {
    let r = document.querySelector(":root");
    if (darkMode == false) {
        r.style.setProperty("--primary-color", "#111");
        r.style.setProperty("--secondary-color", "#fff");
        r.style.setProperty("--tirtiary-color", "rgba(35, 35, 35, 1)");
        r.style.setProperty("--light-color", "#aaaaaa");
        darkmode.innerHTML = '<i class="fas fa-sun"></i>';
        darkMode = true;
    } else {
        r.style.setProperty("--primary-color", "#fff");
        r.style.setProperty("--secondary-color", "#111");
        r.style.setProperty("--tirtiary-color", "rgba(236, 236, 236, 1)");
        r.style.setProperty("--light-color", "rgb(114, 114, 114)");
        darkmode.innerHTML = '<i class="fas fa-moon"></i>';
        darkMode = false;
    }
}

VanillaTilt.init(document.querySelectorAll("#profile-pic"), {
    max: 25,
    speed: 200,
    glare: true,
    "max-glare": 0.5,
});

VanillaTilt.init(document.querySelectorAll(".project-cards"), {
    max: 25,
    speed: 10,
    glare: true,
    "max-glare": 0.5,
});

VanillaTilt.init(document.querySelectorAll(".icon"), {
    max: 25,
    speed: 200,
    glare: true,
    "max-glare": 0,
});

VanillaTilt.init(document.querySelectorAll(".square"), {
    max: 25,
    speed: 50,
    glare: true,
    "max-glare": 0.5,
});

// For the hamburger icon

const menu = document.getElementById('menu');
const button = document.getElementById('button');
let menuOpen = false;


function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}

button.addEventListener('click', () => {
    if (!menuOpen) {
        button.classList.add('open');
        menuOpen = true;
        menu.style.transform = 'translateX(0%)';
        disableScroll();
    } else {
        button.classList.remove('open');
        menuOpen = false;
        menu.style.transform = 'translateX(-100%)'
        enableScroll();
    }
})

// QUESTION | ANSWER

let que = document.getElementById('que')
let ans = document.getElementById('answer')
let arrow = document.getElementById('arrow')
let ansShown = false;

function showAnswer() {
    if (ansShown === false) {
        ans.style.display = 'block';
        arrow.classList.remove('fa-chevron-down')
        arrow.classList.add('fa-chevron-up')
        que.style.opacity = '.9';
        ansShown = true;
    } else {
        ans.style.display = 'none';
        arrow.classList.remove('fa-chevron-up')
        arrow.classList.add('fa-chevron-down')
        que.style.opacity = '1';
        ansShown = false;
    }
}