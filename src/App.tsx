import React from 'react'
import './App.css'
import { ReactComponent as IconStar } from './images/icon-star.svg'

function App() {
  return (
    <div className='App'>
      <div className='Icon Cercle'>
        <IconStar />
      </div>
      <div className='Header'>
        <h2>How did we do?</h2>
      </div>
      <div className='Para'>
        <p>
          Please let us know how we did with your support request. All feedback is appreciated to
          help us to improve our offering!
        </p>
      </div>
      <div className='Notes'>
        <div className='Cercle'></div>
        <div className='Cercle'></div>
        <div className='Cercle'></div>
        <div className='Cercle'></div>
        <div className='Cercle'></div>
      </div>
      <div className='Butt'>
        <p>SUBMIT</p>
      </div>
    </div>
  )
}

export default App
