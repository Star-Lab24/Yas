/* =========================================================
   CANTINHO DA YASMIN
   script.js
========================================================= */


/* =========================================================
   CONTADOR DE VIDA
   Data de nascimento: 18/03/2009
========================================================= */

const birthDate = new Date(2009, 2, 18, 0, 0, 0);


function updateLifeCounter() {

    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();

    let months = now.getMonth() - birthDate.getMonth();

    let days = now.getDate() - birthDate.getDate();


    /*
       Ajusta os meses quando o dia atual
       ainda não chegou ao dia do nascimento.
    */

    if (days < 0) {

        months--;

        const previousMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }


    /*
       Ajusta os anos quando o aniversário
       ainda não aconteceu neste ano.
    */

    if (months < 0) {

        years--;

        months += 12;
    }


    /*
       Calcula horas, minutos e segundos.
    */

    const lastBirthday = new Date(
        now.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
    );


    if (lastBirthday > now) {

        lastBirthday.setFullYear(
            now.getFullYear() - 1
        );
    }


    const difference = now - lastBirthday;

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    /*
       Atualiza a tela.
    */

    document.getElementById("years").textContent = years;

    document.getElementById("months").textContent = months;

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


/*
   Atualiza imediatamente
   e depois a cada segundo.
*/

updateLifeCounter();

setInterval(updateLifeCounter, 1000);


/* =========================================================
   FRASES DA YASMIN
========================================================= */

const quotes = [

    "É algo a se pensar.",

    "Uau.",

    "Sou livre."

];


const quoteElement =
    document.getElementById("quote");

const quoteButton =
    document.getElementById("new-quote");


let lastQuote = -1;


function changeQuote() {

    let randomQuote;


    /*
       Evita repetir a mesma frase
       duas vezes seguidas.
    */

    do {

        randomQuote =
            Math.floor(Math.random() * quotes.length);

    } while (
        randomQuote === lastQuote &&
        quotes.length > 1
    );


    lastQuote = randomQuote;


    /*
       Pequena animação.
    */

    quoteElement.style.opacity = "0";

    quoteElement.style.transform =
        "translateY(10px)";


    setTimeout(() => {

        quoteElement.textContent =
            `"${quotes[randomQuote]}"`;

        quoteElement.style.opacity = "1";

        quoteElement.style.transform =
            "translateY(0)";

    }, 250);
}


quoteButton.addEventListener(
    "click",
    changeQuote
);


/* =========================================================
   ANIMAÇÃO DAS FRASES
========================================================= */

quoteElement.style.transition =
    "opacity 0.25s ease, transform 0.25s ease";


/* =========================================================
   EFEITO DE APARECER AO ROLAR A PÁGINA
========================================================= */

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.12
        }
    );


sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(30px)";

    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});


/* =========================================================
   CORAÇÕES AO CLICAR NA PÁGINA
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        /*
           Não cria coração quando clicar
           nos botões ou links.
        */

        if (
            event.target.closest("button") ||
            event.target.closest("a")
        ) {
            return;
        }


        const heart =
            document.createElement("span");


        heart.textContent = "♥";


        heart.style.position = "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex = "9999";

        heart.style.color =
            Math.random() > 0.5
                ? "#ff174c"
                : "#a855f7";

        heart.style.fontSize =
            (15 + Math.random() * 15) + "px";


        heart.style.animation =
            "heartFloat 1.2s ease-out forwards";


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 1200);

    }
);


/* =========================================================
   ADICIONA A ANIMAÇÃO DOS CORAÇÕES
========================================================= */

const heartAnimation =
document.createElement("style");


heartAnimation.textContent = `

@keyframes heartFloat {

    0% {

        opacity: 1;

        transform:
            translate(-50%, -50%)
            scale(1);

    }

    100% {

        opacity: 0;

        transform:
            translate(
                -50%,
                calc(-50% - 100px)
            )
            scale(1.5);

    }

}

`;


document.head.appendChild(heartAnimation);


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "❤️ Cantinho da Yasmin carregado!"
);
