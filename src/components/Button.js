import React from 'react'
import propTypes from 'prop-types'
const Button = ({color,text,onClick}) => {

  return (
    <div>
       <button onClick={onClick} style={{backgroundColor:color}} className='btn'>{text}</button>
    </div>
  )
}
Button.defaultProps={
    color:'steelblue'
}
Button.propTypes={
    color:propTypes.string,
    text:propTypes.string
}
export default Button
