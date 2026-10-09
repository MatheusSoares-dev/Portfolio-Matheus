gsap.registerPlugin(ScrollTrigger, SplitText)


const tlHero = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        strat: "top top",
        end: "+=150%",
        pin: true,
        scrub: 2
    }
})

tlHero.to(".hero-esquerda", {
    x: "-100%",
    ease: "ease.inOut",
    duration: 1.5
})

tlHero.to(".hero-direita", {
    x: "100%",
    ease: "ease.inOut",
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
        end: "bottom bottom",
        scrub: 3,
        markers: true
    }
})


tlFrase.fromTo(".frase-esquerda", {
    x: -20,

}, {
    x: 15,
    ease: "power.inOut",
    duration: 1
})

tlFrase.fromTo(".frase-direita", {
    x: 20,

}, {
    x: -15,
    ease: "power.inOut",
    duration: 1

}, "<")

