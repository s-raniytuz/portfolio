import anime from "animejs/lib/anime.es.js";

export function createHoverAnimation(target: string) {
  anime({
    targets: target,
    scale: 0.95,
    opacity: 0.5,
    duration: 300,
    easing: "easeOutSine",
  });
}

export function createUnhoverAnimation(target: string) {
  anime({
    targets: target,
    scale: 1,
    opacity: 1,
    duration: 300,
    easing: "easeOutSine",
  });
}

export function handleProjectsHover() {
  // anime({
  //   targets: "#about-menu-item, #contact-menu-item",
  //   scale: 0.95,
  //   opacity: 0.5,
  //   duration: 300,
  //   easing: "easeOutSine",
  // });
  createHoverAnimation("#about-menu-item, #contact-menu-item");
}

export function handleProjectsUnhover() {
  anime({
    targets: "#about-menu-item, #contact-menu-item",
    scale: 1,
    opacity: 1,
    duration: 300,
    easing: "easeOutSine",
  });
}

export function handleAboutHover() {
  anime({
    targets: "#projects-menu-item, #contact-menu-item",
    scale: 0.95,
    opacity: 0.5,
    duration: 300,
    easing: "easeOutSine",
  });
}

export function handleAboutUnhover() {
  anime({
    targets: "#projects-menu-item, #contact-menu-item",
    scale: 1,
    opacity: 1,
    duration: 300,
    easing: "easeOutSine",
  });
}
