import React from 'react'
import Header from '../header'

function LayOut({children}) {
  return (
    <>
    <Header />
    <main className='main'>
      {children}
    </main>
    </>

  )
}

export default LayOut