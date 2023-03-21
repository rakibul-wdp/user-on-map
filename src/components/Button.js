import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, linkTo }) => {
  return (
    <div className="btn">
      <Link to={linkTo} className="link">
        {text}
      </Link>
    </div>
  )
}

export default Button;