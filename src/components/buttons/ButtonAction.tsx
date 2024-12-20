import type { ButtonActionType } from "@/types/ButtonTypes";
import React from "react";

interface ButtonActionProps extends ButtonActionType {
  children: React.ReactNode;
}

const ButtonAction: React.FC<ButtonActionProps> = ({ url, children }) => {
  const btnClicked = () => {
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div onClick={btnClicked} className="cursor-pointer">
      {children}
    </div>
  );
};

export default ButtonAction;
