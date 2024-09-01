"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className={"bg-secondary w-full flex justify-center py-4"}>
      <p>
        Made with love by{" "}
        <Link
          href={"https://github.com/Azizkhasyi11"}
          rel="noopener noreferrer"
          target="_blank"
        >
          Aziz Khasyi
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
