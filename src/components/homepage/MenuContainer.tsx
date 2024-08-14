import {
  createHoverAnimation,
  createUnhoverAnimation,
} from "./menuAnimations.ts";

export default function MenuContainer() {
  return (
    <div
      id="menu-container"
      className="w-full h-[16rem] grid grid-cols-12 grid-rows-9"
    >
      <div
        onMouseEnter={() =>
          createHoverAnimation("#about-menu-item, #contact-menu-item")
        }
        onMouseLeave={() =>
          createUnhoverAnimation("#about-menu-item, #contact-menu-item")
        }
        id="projects-menu-item-container"
        className="col-start-1 col-end-13 row-start-1 row-end-5 flex items-center cursor-pointer"
      >
        <p
          id="projects-menu-item"
          className="text-prtf-main-dark font-nohemi font-[200] text-[9rem] mt-[1.6rem] tracking-[4.87rem] cursor-pointer select-none"
        >
          PROJECTS
        </p>
      </div>
      <div
        onMouseEnter={() =>
          createHoverAnimation("#projects-menu-item, #contact-menu-item")
        }
        onMouseLeave={() =>
          createUnhoverAnimation("#projects-menu-item, #contact-menu-item")
        }
        id="about-menu-item-container"
        className="col-start-1 col-end-6 row-start-5 row-end-10 flex items-center"
      >
        <p
          id="about-menu-item"
          className="text-prtf-main-dark font-nohemi font-[200] text-[11.5rem] mt-[2rem] -tracking-[1.3rem] select-none cursor-pointer"
        >
          ABOUT
        </p>
      </div>
      <div
        onMouseEnter={() =>
          createHoverAnimation("#projects-menu-item, #about-menu-item")
        }
        onMouseLeave={() =>
          createUnhoverAnimation("#projects-menu-item, #about-menu-item")
        }
        id="contact-menu-item-container"
        className=" col-start-6 col-end-13 flex items-center row-start-6 row-end-10"
      >
        <p
          id="contact-menu-item"
          className="text-prtf-main-dark font-nohemi font-thin text-[9.3rem] mt-[1.6rem] tracking-[0.75rem] select-none cursor-pointer"
        >
          CONTACT
        </p>
      </div>
    </div>
  );
}
