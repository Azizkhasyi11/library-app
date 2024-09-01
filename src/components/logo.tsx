"use client";

import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center cursor-pointer gap-2"
      aria-label="Navigate to homepage"
    >
      <span className="travball">Library App</span>
    </div>
  );
};

export default Logo;
