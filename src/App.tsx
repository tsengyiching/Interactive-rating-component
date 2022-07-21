import React from 'react'
import './App.css'
import { ReactComponent as IconStar } from './images/icon-star.svg'
import Rating from './components/Rating'

function App() {
  const arr = [1, 2, 3, 4, 5]
  const menu: JSX.Element[] = []
  const [ratingValue, setRatingValue] = React.useState(0)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const button: HTMLButtonElement = event.currentTarget
    setRatingValue(Number(button.value))
  }

  arr.forEach((num) => {
    let active = 'not-active'

    if (ratingValue == num) {
      active = 'active'
    }
    menu.push(
      <Rating
        key={num}
        active={active}
        ratingValue={ratingValue}
        value={num}
        handleClick={handleClick}
      />,
    )
  })

  return (
    <div className='App'>
      <div className='icon circle'>
        <IconStar />
      </div>
      <div className='header'>
        <h2>How did we do?</h2>
      </div>
      <div className='para'>
        <p>
          Please let us know how we did with your support request. All feedback is appreciated to
          help us to improve our offering!
        </p>
      </div>
      <div className='rating'>{menu}</div>
      <button className='butt'>SUBMIT</button>
    </div>
  )
}

export default App
