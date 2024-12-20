import type { ButtonDisplayType } from "@/types/ButtonTypes";
import React from "react";

const ButtonDisplay: React.FC<ButtonDisplayType> = ({
  style = "primary",
  text,
}) => {
  const btnStyles = {
    primary: "bg-white text-black hover:text-gray-800",
    secondary: "bg-black text-white hover:bg-gray-800",
  };

  return <button className={`text-base px-6 py-3 ${btnStyles[style]}`}>{text}</button>;
};

export default ButtonDisplay;
