import React, { ReactNode } from 'react'

interface GridContainerProps {
    content: ReactNode[],
    minColumns: number,
    maxColumns: number,
    columnsWrap: number
}

const GridContainer: React.FC<GridContainerProps>  = (props) => {

  const { content, minColumns, maxColumns, columnsWrap } = props;

  return (
    <div>GridContainer</div>
  )
}

export default GridContainer