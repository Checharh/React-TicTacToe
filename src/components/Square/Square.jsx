import React from 'react'
import './style.css'

const Square =({value,onClick})=>{
  // const[value,onClick]=
  const style = value ? `button ${value}` : `button`;
  return (
    <>
    {/* <div className='square'> */}
      <button className={style} onClick={onClick}>{value}</button>
    {/* </div> */}
    </>
  )
}

export default Square