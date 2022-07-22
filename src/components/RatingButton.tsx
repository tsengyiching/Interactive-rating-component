import React from 'react'

interface RatingProps {
  active: string
  ratingValue: number
  value: number
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function RatingButton({ ...props }: RatingProps) {
  const circle = 'circle'

  return (
    <button className={`${circle} ${props.active}`} value={props.value} onClick={props.handleClick}>
      {props.value}
    </button>
  )
}

export default RatingButton
