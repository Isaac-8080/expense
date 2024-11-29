import React from 'react'

const CardsContainer = (props) => {
  return (
    <div className='shadow border md:w-[60%] p-5 mt-5 mx-auto rounded-2xl'>
      {props.children}
    </div>
  )
}

export default CardsContainer