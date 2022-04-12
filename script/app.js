let texts = ["Créatif 🖌️", "Développeur 💻", "Artiste ⭐", "Multi-casquette 🧢", "Inspiré 💡" , "Autonome 🙆‍♂️", "Curieux 🤔", "Monteur Vidéo 🎥", "Joueur 🕹️"];
let colors = ["rgba(229,79,109,1)", "rgba(248,198,48,1)"]

function textChange() {
    setInterval(function() {
        let text = texts.shift();
        let color = colors[Math.floor(Math.random() * colors.length)];
        texts.push(text);
        $("#aboutChangeText").fadeOut(1000,function() {
            $(this).text(text).fadeIn(1000);  
            $("#aboutChangeText").css("color", color);
        });
    }, 2500);
}

function launchAppearAnimation(element, animation, duration, delay) {
    let el = document.querySelector(element);
    el.style.animation = animation + " " + duration + "s " + delay + "s ease-in-out forwards";
    setTimeout(function() {
        el.style.animation = "";
        el.style.opacity = "1";
    }, duration * 1000 + 1000);
}

function hide(element) {
    let el = document.querySelector(element);
    el.style.opacity = "0";
}

function show(element) {
    let el = document.querySelector(element);
    el.style.opacity = "1";
}


function circleAppear() {
    let els = document.querySelectorAll(".circle");
    for (let i = 0; i < els.length; i++) {
        let el = els[i];
        el.style.animation = "fadeIn 2s " + i * 0.3 + "s ease-in-out forwards";
    }
}


//if scrolled to #about, show .to-top
window.onscroll = function() {
    if (window.pageYOffset >= $("#about").offset().top) {
        show(".to-top");
    } else {
        hide(".to-top");
    }
};


//when select object change value
let select = document.querySelector("#skillSelect");
select.addEventListener("change", function() {

    let pBar = document.querySelector("#progressBar");

    let value = select.value;
    if (value == "eng") {
        pBar.style.width = "90%";
    } else if (value == "front") {
        pBar.style.width = "80%";
    } else if (value == "back") {
        pBar.style.width = "10%";
    } else if (value == "ps") {
        pBar.style.width = "70%";
    } else if (value == "ae") {
        pBar.style.width = "50%";
    } else if (value == "pp") {
        pBar.style.width = "80%";
    }

});

let data = {
    cards: [
        {
            title: "Ce site",
            description: "Ce site est un projet personnel réalisé en HTML, CSS et Javascript. C'est un site de présentation de moi-même, avec un peu de contenu et beacoup de fun.",
            link: "",
            img: "",
        },
    ]
}