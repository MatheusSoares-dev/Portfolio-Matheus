gsap.registerPlugin(ScrollTrigger, SplitText)


const tlHero = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=170%",
        pin: true,
        scrub: 2,
    }
})

tlHero.to(".hero-esquerda", {
    x: "-100%",
    ease: "power1.inOut",
    duration: 1.5
})

tlHero.to(".hero-direita", {
    x: "100%",
    ease: "power1.inOut",
    duration: 1.5
}, "<")

tlHero.from(".nome h1", {
    y: 300,
    opacity: 0,
    scale: .5,
    duration: 2,
    ease: "back.inOut"
}, "-=")

const letraSobrenome = new SplitText(".nome h2", { type: "chars" })

tlHero.from(letraSobrenome.chars, {
    opacity: 0,
    stagger: .5
})

const palavraNome = new SplitText(".sessao-nome p", { type: "words" })

tlHero.from(palavraNome.words, {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: .5,
    ease: "back.out"
}, "<")

const tlFrase = gsap.timeline({
    scrollTrigger: {
        trigger: ".sessao-frases",
        start: "-70% top",
        end: "120% bottom",
        scrub: 3,
    }
})


tlFrase.fromTo(".frase-esquerda", {
    x: -30,

}, {
    x: 40,
    ease: "power.inOut",
    duration: 1
})

tlFrase.fromTo(".frase-direita", {
    x: 30,

}, {
    x: -40,
    ease: "power.inOut",
    duration: 1

}, "<")


const digitacaoMatheus = new SplitText(".frase-Matheus p", { type: "chars" })

const tlMatheus = gsap.timeline()

tlMatheus.from(digitacaoMatheus.chars, {
    display: "none",
    duration: 1,
    x: 10,
    stagger: 2,
    ease: "powe2.InOut",
    scrollTrigger: {
        trigger: ".apresentacao",
        start: "-60% top",
        end: "105% bottom",
        scrub: 1,
    }
})

tlMatheus.to(".matheus img", {
    filter: "grayscale(0%)",
    scale: 1.2,
    duration: 1,
    scrollTrigger: {
        trigger: ".sessao-Matheus",
        start: "center center",
        end: "105% bottom",
        scrub: 1,
    }

}, "<")

const cards = document.querySelectorAll('.conteudo');

cards.forEach((card, i) => {
    if (i === cards.length - 1) return;

    const proximoCard = cards[i + 1];

    const tlCards = gsap.timeline({
        scrollTrigger: {
            trigger: proximoCard,
            start: "top bottom",
            end: "top 30px",
            scrub: true
        }
    })

    tlCards.to(card, {
        scale: 0.7,
        y: -40,
        ease: "none"
    });

    tlCards.to(card, {
        rotate: 10,
        ease: "ease"
    }, "-=.4")
});




const tlCta = gsap.timeline()

let palavrasCta = new SplitText(".cabecalho-cta p", { type: "words" })

tlCta.to(palavrasCta.words, {
    autoAlpha: 0,
    y: 100,
    duration: 1,
    stagger: {
        from: "random",
        each: .3
    },
    scrollTrigger: {
        trigger: ".cta",
        start: "-20% top",
        end: "15% top",
        scrub: 2,
    }
})

tlCta.from(".mao img", {
    x: -500,
    duration: 1,
    ease: "ease",
    scrollTrigger: {
        trigger: ".cta",
        start: "top top",
        end: "top center",
        scrub: 1
    }
})

palavrasCta = new SplitText(".frase p", { type: "words" })

tlCta.from(palavrasCta.words, {
    autoAlpha: 0,
    x: 200,
    y: 50,
    duration: 1,
    ease: "back.out",
    stagger: .5,
    scrollTrigger: {
        trigger: ".cta",
        start: "top top",
        end: "center center",
        scrub: 1
    }
}, "<+5")


tlCta.from(".computador img", {
    scale: 0,
    rotation: 30,
    autoAlpha: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".computador-cta",
        start: "-60% top",
        end: "bottom bottom",
        scrub: 2,
    }
})


palavrasCta = new SplitText(".frase-computador", { type: "words" })

tlCta.from(palavrasCta.words, {
    y: 200,
    autoAlpha: 0,
    ease: "back.out",
    duration: 3,
    stagger: .5,
    scrollTrigger: {
        trigger: ".computador-cta",
        start: "-50% top",
        end: "bottom bottom",
        scrub: 2
    }
}, "+=2")

window.addEventListener("load", () => {

    const tlJornal = gsap.timeline({
        scrollTrigger: {
            trigger: ".sessao-jornal",
            start: "top top",
            end: "+=100%",
            scrub: 2,
            pin: true,
            anticipatePin: 1
        }
    })

    tlJornal.to(".coluna", {
        scaleX: 0,
        duration: .8,
        stagger: {
            each: .2,
            from: "start"
        }
    })
})