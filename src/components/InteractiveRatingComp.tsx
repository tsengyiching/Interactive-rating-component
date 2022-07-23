import React from 'react'
import RatingButton from './RatingButton'
import { ReactComponent as IconStar } from './images/icon-star.svg'
import { ReactComponent as ThankYou } from './images/illustration-thank-you.svg'

function InteractiveRatingComp() {
  const arr = [1, 2, 3, 4, 5]
  const menu: JSX.Element[] = []
  const [ratingValue, setRatingValue] = React.useState(0)
  const [submit, setSubmit] = React.useState(false)

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
      <RatingButton
        key={num}
        active={active}
        ratingValue={ratingValue}
        value={num}
        handleClick={handleClick}
      />,
    )
  })

  const handleSubmit = () => {
    if (ratingValue === 0) {
      return
    }
    setSubmit(!submit)
  }

  return (
    <div className='App rating'>
      {!submit ? (
        <>
          <header className='icon circle'>
            <IconStar />
          </header>
          <main className='rating-main'>
            <h1>How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All feedback is appreciated
              to help us to improve our offering!
            </p>
            <div className='menu'>{menu}</div>
            <button className='butt' onClick={handleSubmit}>
              SUBMIT
            </button>
          </main>
        </>
      ) : (
        <>
          <header className='thankyou'>
            <ThankYou />
          </header>
          <main className='rating-main-thankyou'>
            <div className='select'>
              <p>You selected {ratingValue} out of 5</p>
            </div>
            <div>
              <h1>Thank you!</h1>
            </div>
            <div className='para para-thank-you'>
              <p>We appreciate you taking the time to give a rating. </p>
              <p>If you ever need more support, don&apos;t hesitate to get in touch!</p>
            </div>
          </main>
        </>
      )}
    </div>
  )
}

export default InteractiveRatingComp
