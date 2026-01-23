"use client";
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMovile from "./NavbarMovile";


const Navbar = () => {
  return (
    <nav id="navbar-main" className="w-full bg-black">
      {/* 💻 Navbar Desktop */}
      <div id="navbar-desktop-wrapper" className="hidden mx-auto md:block">
        <NavbarDesktop />
      </div>

      {/* 📱 Navbar Mobile */}
      <div id="navbar-mobile-wrapper" className="md:hidden">
        {/* <NavbarMovile /> */}
        <NavbarMovile />
      </div>
    </nav>
  );
};

export default Navbar;
