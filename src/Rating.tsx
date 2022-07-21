import React from 'react'

interface RatingProps {
  active: string
  ratingValue: number
  value: number
  handleClick: (event: any) => void
}

function Rating({ ...props }: RatingProps) {
  const circle = 'circle'

  return (
    <option className={`${circle} ${props.active}`} value={props.value} onClick={props.handleClick}>
      {props.value}
    </option>
  )
}

export default Rating
