import React from 'react'
import style from './Button.module.css'

const Button = ({name}) => {

  // console.log(style)
  return (
    <button className={style.btn}>{name}</button>
  )
}

export default Button