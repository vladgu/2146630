import React, { useState } from 'react'

import locales from '../../locales'

const Form = ({ addComment }) => {

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]

  const getCurrentDate = () => {
    const date = new Date()
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  }

  const keyChecker = e => {
    console.log(e)
    // if (e.keyCode == 13 && e.ctrlKey) {
    //   console.log('YAY');
    // }
  }

  const submitHandle = e => {
    e.preventDefault()
    if (name && message) {
      addComment({
        name,
        date: getCurrentDate(),
        message
      })
      e.target.parentNode.reset()
      setName('')
      setMessage('')
    }

  }

  return (
    <form className='form-wrapper' onSubmit={ e => keyChecker(e) }>
      <input className='form-input' type="text" placeholder='Ваше имя' onInput={ e => setName(e.target.value) } />
      <textarea className='form-textarea' rows='4' placeholder='Ваше сообщение' onInput={ e => setMessage(e.target.value) } />
      <button className='form-button fw-bold' onClick={ e => submitHandle(e) }>{ locales.addComment }</button>
    </form>
  )
}

export default Form