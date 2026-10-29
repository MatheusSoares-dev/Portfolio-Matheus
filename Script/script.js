gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, SplitText)

ScrollTrigger.config({ ignoreMobileResize: true });

const tlPreloader = gsap.timeline()

gsap.set(".conteudo h1", {
    autoAlpha: 1
})

const letraPreloader = SplitText.create(".conteudo h1", {
    type: "chars",
    charsClass: "letraPreloader"
}
)

const loaderContador = letraPreloader.chars.length

tlPreloader.to(letraPreloader.chars, {
    autoAlpha: 1,
    duration: .5,
    stagger: {
        amount: 2.6,
        each: 1,

        onStart: function () {
            const indiceAtual = letraPreloader.chars.indexOf(this.targets()[0])


            if (indiceAtual !== loaderContador - 1) {
                gsap.to(this.targets(), {
                    autoAlpha: 0,
                    delay: .2,
                    duration: .3
                })
            }
        }
    }
})

tlPreloader.to(letraPreloader.chars, {
    autoAlpha: 1,
    duration: .2,
    stagger: .08
})

tlPreloader.to(letraPreloader.chars, {
    autoAlpha: 0,
    duration: .2,
})

tlPreloader.to(".coluns", {
    scaleX: 0,
    stagger: {
        amount: 1,
        from: "start"
    },
    duration: .5
})


/* Hero */
const tlHero = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=170%",
        pin: true,
        pinType: "fixed",
        invalidateOnRefresh: true,
        scrub: 1.5,
        anticipatePin: 1,
    }
});

tlHero.to(".hero-esquerda", {
    xPercent: -100,
    ease: "power1.inOut",
    duration: 1.5
});

tlHero.to(".hero-direita", {
    xPercent: 100,
    ease: "power1.inOut",
    duration: 1.5
}, "<");

tlHero.from(".nome h1", {
    y: 300,
    autoAlpha: 0,
    scale: 0.5,
    duration: 1.2,
    ease: "back.out(1.4)"
}, 0.4);

const letrasSobrenome = new SplitText(".nome h2", {
    type: "chars",
    charsClass: "split-char"
});

tlHero.from(letrasSobrenome.chars, {
    y: 50,
    autoAlpha: 0,
    stagger: 0.05,
    duration: 0.5,
    ease: "power2.out"
}, 0.85);

const palavrasNome = new SplitText(".sessao-nome > p", {
    type: "words",
    wordsClass: "split-word"
});

tlHero.from(palavrasNome.words, {
    y: 80,
    autoAlpha: 0,
    duration: 0.6,
    stagger: 0.06,
    ease: "back.out(1.2)"
}, 1.1);


/* Frases */
const tlFrase = gsap.timeline({
    scrollTrigger: {
        trigger: ".sessao-frases",
        start: "top 85%",
        end: "bottom 20%",
        scrub: 1,
    }
});

tlFrase.fromTo(".frase-esquerda", {
    x: -30
}, {
    x: 40,
    ease: "none",
    duration: 1
});

tlFrase.fromTo(".frase-direita", {
    x: 30
}, {
    x: -40,
    ease: "none",
    duration: 1
}, "<");


/* Apresentação */
let digitacaoMatheus = new SplitText(".frase-Matheus p", {
    type: "chars",
    charsClass: "split-char"
});

const tlMatheus = gsap.timeline({
    scrollTrigger: {
        trigger: ".sessao-Matheus",
        start: "-10% bottom",
        end: "center center",
        scrub: 1,
    }
});

tlMatheus.from(digitacaoMatheus.chars, {
    y: 12,
    autoAlpha: 0,
    duration: 0.5,
    stagger: 0.03,
    ease: "power2.out"
});


tlMatheus.to(".matheus img", {
    rotate: 10,
    scale: 1.2,
    duration: 1,
    ease: "none"
}, "<");

digitacaoMatheus = new SplitText(".sobre p", {
    type: "words",
});

const tlFade = gsap.timeline({
    scrollTrigger: {
        trigger: ".apresentacao",
        start: "-20% 40%",
        end: "125% bottom",
        scrub: 2,

    }
})

tlFade.to(digitacaoMatheus.words, {
    x: 20,
    autoAlpha: .1,
    ease: "sine.inOut",
    stagger: .1,
    duration: .5,
}, "<")

    .to(digitacaoMatheus.words, {
        x: 0,
        autoAlpha: 1,
        ease: "sine.inOut",
        stagger: .1,
        duration: .5,
    }, "<.2")




/* Cards dos trabalhos */
const cards = document.querySelectorAll(".conteudo");

cards.forEach((card, i) => {
    if (i === cards.length - 1) return;

    const proximoCard = cards[i + 1];

    gsap.to(card, {
        scale: 0.88,
        y: -32,
        rotate: 4,
        autoAlpha: 0.2,
        transformOrigin: "center top",
        ease: "none",
        scrollTrigger: {
            trigger: proximoCard,
            start: "top 85%",
            end: "top 28%",
            scrub: true,
        }
    });
});


/* CTA */
const palavrasCta = new SplitText(".cabecalho-cta p", {
    type: "words",
    wordsClass: "split-word"
});

gsap.to(palavrasCta.words, {
    autoAlpha: 0,
    y: 100,
    duration: 1,
    stagger: {
        from: "random",
        each: 0.3
    },
    ease: "power1.in",
    scrollTrigger: {
        trigger: ".cta",
        start: "top 30%",
        end: "top top",
        scrub: 1,
    }
});

gsap.from(".mao img", {
    xPercent: -110,
    autoAlpha: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".frase-cta",
        start: "top 80%",
        end: "top 35%",
        scrub: 1,
    }
});

const palavrasFrase = new SplitText(".frase p", {
    type: "words",
    wordsClass: "split-word"
});

gsap.from(palavrasFrase.words, {
    autoAlpha: 0,
    x: 100,
    y: 40,
    duration: 1,
    ease: "back.out(1.2)",
    stagger: 0.08,
    scrollTrigger: {
        trigger: ".frase-cta",
        start: "top 78%",
        end: "top 35%",
        scrub: 1,
    }
});

gsap.from(".computador img", {
    scale: 0.35,
    rotation: 30,
    autoAlpha: 0,
    y: 100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".computador-cta",
        start: "top 80%",
        end: "bottom 45%",
        scrub: 1.5,
    }
});

const palavrasComputador = new SplitText(".frase-computador", {
    type: "words",
    wordsClass: "split-word"
});

gsap.from(palavrasComputador.words, {
    y: 80,
    autoAlpha: 0,
    ease: "back.out(1.2)",
    duration: 1,
    stagger: 0.06,
    scrollTrigger: {
        trigger: ".computador-cta",
        start: "top 92%",
        end: "bottom 42%",
        scrub: 1,
    }
});


/* Jornal */
gsap.to(".img-jornal", {
    clipPath: "circle(100% at 50% 50%)",
    scale: 1.08,
    duration: 1,
    ease: "none",
    scrollTrigger: {
        trigger: ".sessao-jornal",
        start: "top top",
        end: "+=100%",
        pin: true,
        pinType: "fixed",
        invalidateOnRefresh: true,
        scrub: 1.5,
        anticipatePin: 1,
    }
});



window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});


function whats(event) {
    event.preventDefault();
    const telefone = 31987097928
    const msn = "Oi Matheus, tudo bom? Vim pelo seu Portfolio, quero saber mais sobre os projetos?"
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(msn)}`
    window.open(url, '_blank')
}
