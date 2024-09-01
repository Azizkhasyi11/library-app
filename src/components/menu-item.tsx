"use client";

import { Button } from "./ui/button";

interface MenuItemProps {
  label: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <Button variant={"link"} onClick={onClick}>
      {label}
    </Button>
  );
};

export default MenuItem;
