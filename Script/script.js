gsap.registerPlugin(ScrollTrigger, SplitText)


const tlHero = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        strat: "top top",
        end: "+=200%",
        pin: true,
        scrub: 2
    }
})

tlHero.to(".esquerda", {
    x: "-100%",
    ease: "ease.inOut",
    duration: 1.5
})

tlHero.to(".direita", {
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
},"-=1")

const letraSobrenome = new SplitText(".nome h2", {type: "chars"})

tlHero.from(letraSobrenome.chars, {
    opacity: 0,
    stagger:.5
})

const palavraNome = new SplitText(".sessao-nome p", {type: "words"})

tlHero.from(palavraNome.words, {
    y: 100, 
    opacity: 0,
    duration: 1,
    stagger: .5,
    ease: "back.out"
}, "<")


