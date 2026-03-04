export type HamburgerBurgerProps = {
  handleMenuToggle: () => void;
  menuOpen: boolean;
};

export default function HamburgerButton({
  handleMenuToggle,
  menuOpen,
}: HamburgerBurgerProps) {
  return (
    <button
      onClick={handleMenuToggle}
      className="fixed top-6 right-6 z-50 w-12 h-12 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:cursor-pointer group"
      aria-label="Toggle menu"
    >
      <span
        className={`w-6 h-0.5 bg-[#6366F1] transition-all duration-300 ease-in-out group-hover:w-7 ${
          menuOpen ? "rotate-45 translate-y-1" : ""
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-[#6366F1] transition-all duration-300 ease-in-out group-hover:w-7 ${
          menuOpen ? "-rotate-45 -translate-y-1" : ""
        }`}
      />
    </button>
  );
}
