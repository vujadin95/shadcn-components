import LocaleSwitch from "./LocaleSwitch";
import Logo from "./Logo/Logo";
import { ModeToggle } from "./ModeToggle";
import { Navbar } from "./Navbar";

const Header = () => {
  return (
    <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4 px-5">
      {/* <div className="w-[250px] h-12 bg-red-500 rounded-md"></div> */}
      <Logo />
      <Navbar />
      <LocaleSwitch />
      <ModeToggle />
    </div>
  );
};
export default Header;
