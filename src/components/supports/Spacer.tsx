import React from 'react'

interface SpacerProps {
    maxHeight?: string,
    maxWidth?: string,
}

const Spacer: React.FC<SpacerProps> = () => {
  return (
    <div>Spacer</div>
  )
}

export default Spacer