import React from 'react'

export default function Btn({txt,click_func, btn_styles }) {
  return (
    <div onClick={click_func} className={btn_styles} >{txt}</div>
  )
}
