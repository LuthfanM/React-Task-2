import React from "react";
import ButtonDisplay from "./ButtonDisplay";
import ButtonAction from "./ButtonAction";
import { ButtonActionType, ButtonDisplayType } from "@/types/ButtonTypes";
interface ButtonProps {
  display: ButtonDisplayType
  action: ButtonActionType;
}

const Button: React.FC<ButtonProps> = ({ display, action }) => {
  return (
    <ButtonAction url={action.url}>
      <ButtonDisplay style={display.style} text={display.text} />
    </ButtonAction>
  )
}

export default Button;