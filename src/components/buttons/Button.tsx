import React from 'react'
import { ButtonAction, ButtonDisplay } from '@/types/ButtonTypes'

type ButtonProps = {
    display: ButtonDisplay,
    action: ButtonAction
}

const Button: React.FC<ButtonProps> = () => {
  return (
    <div>Button</div>
  )
}

export default Button