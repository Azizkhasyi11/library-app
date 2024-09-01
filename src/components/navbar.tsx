"use client";

import { useRouter } from "next/navigation";
import Container from "./container";
import Logo from "./logo";
import MenuItem from "./menu-item";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Left section with Logo */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Center section with Search */}
            <div className="flex-1 md:flex-none">
              <MenuItem label="Home" onClick={() => router.push("/")} />
              <MenuItem label="Books" onClick={() => router.push("/books")} />
            </div>

            {/* Right section */}
            <div className="flex items-center">
              <ModeToggle />
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
