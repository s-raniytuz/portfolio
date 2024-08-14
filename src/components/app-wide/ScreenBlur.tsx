import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import "./screenblur.css";

export default function ScreenBlur() {
  useEffect(() => {
    const screenBlur: HTMLDivElement = document.querySelector(
      "#screen-blur"
    ) as HTMLDivElement;
    const screenShade: HTMLDivElement = document.querySelector(
      "#screen-shade"
    ) as HTMLDivElement;

    anime({
      targets: "#screen-blur",
      backdropFilter: "blur(0px)",
      easing: "easeOutSine",
      duration: 500,
      delay: 500,
      complete: () => {
        screenBlur.style.display = "none";
      },
    });

    anime({
      targets: "#screen-shade",
      opacity: 0,
      easing: "easeOutSine",
      duration: 400,
      delay: 300,
      complete: () => {
        screenShade.style.display = "none";
      },
    });
  }, []);

  return (
    <>
      <div id="screen-shade"></div>
      <div id="screen-blur"></div>
    </>
  );
}
