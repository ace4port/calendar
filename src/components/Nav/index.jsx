import React from 'react'

const Nav = ({ children }) => {
  return (
    <div className="nav">
      <div className="nav--top"></div>
      <div className="nav--side"></div>
      <div className='body'>
      {children}
      </div>
    </div>
  )
}

export default Nav
