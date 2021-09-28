import React from 'react'
import './styles.scss'

const Button = ({
  clickHandle,
  variant = 'primary',
  size = 'default',
  disabled = 'false',
  label = 'Button',
  children,
  ...props
}) => {
  return (
    <button
      onClick={clickHandle}
      className={`btn btn--${variant} btn--${size}`}
      // disabled={disabled === 'true' || variant === 'disabled' ? true : false}
      {...props}>
      {children || label}
    </button>
  )
}

export default Button
