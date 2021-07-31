import Menu from "../icons/Menu";
import Close from "../icons/Close";
import "twin.macro";

export default function MenuButton({ open, toggle }) {
  return (
    <button
      tw="inline-flex sm:hidden items-center bg-yellow-300 rounded-lg py-3 px-6 text-lg font-bold transition duration-300 ease-in-out transform hocus:(scale-110 bg-yellow-400 outline-none) relative z-10"
      onClick={(e) => {
        toggle();
      }}
    >
      {open ? <Close /> : <Menu />}
    </button>
  );
}
