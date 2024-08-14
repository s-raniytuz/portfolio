import MenuContainer from "./MenuContainer";
import ScreenBlur from "../app-wide/ScreenBlur";

export default function Homepage() {
  return (
    <div
      id="homepage"
      className="w-full h-full flex justify-center bg-prtf-main-light"
    >
      <ScreenBlur />
      <div
        id="homepage-content"
        className="w-[80rem] min-h-[43.45rem] py-[5rem] flex flex-col justify-between"
      >
        <MenuContainer />
        <div
          id="homepage-name-container"
          className="flex flex-col justify-end items-end w-full h-20"
        >
          <p className="text-prtf-main-dark font-nohemi font-normal text-[1.4rem] cursor-default select-none">
            Denis Pechenkin
          </p>
          <p className="text-prtf-main-dark font-nohemi font-extralight text-[1.2rem] -mt-1 cursor-default select-none">
            Bringing Your Ideas to Life
          </p>
        </div>
      </div>
    </div>
  );
}
