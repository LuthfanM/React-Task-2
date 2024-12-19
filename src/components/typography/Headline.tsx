import React from 'react'

type HeadlineProps = {
    text: string,
    kicker?: string
    subhead?: string
    style?: string
}

const Headline: React.FC<HeadlineProps> = () => {
  return (
    <div>Headline</div>
  )
}

export default Headline