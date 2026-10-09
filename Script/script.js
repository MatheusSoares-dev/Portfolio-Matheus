gsap.registerPlugin(ScrollTrigger, SplitText)


const tlHero = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        strat: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1
    }
})

tlHero.to(".esquerda", {
    x: "-100%",
    ease: "ease.inOut",
    duration: 1
})

tlHero.to(".direita", {
    x: "100%",
    ease: "ease.inOut",
    duration: 1
}, "<")

tlHero.from(".nome h1", {
    y: 300,
    opacity: 0,
    scale: .5,
    duration: 1,
    ease: "back.inOut"
},"-=1")

tlHero.from(".nome h2", {
    x: 100,
    opacity: 0,
    scale: .5,
})


