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


  window.addEventListener('keydown', e => {
    if (e.keyCode === 13 && e.ctrlKey) {
      submitHandle(e)
    }
  })

  const submitHandle = e => {
    e.preventDefault()
    if (name && message) {
      addComment({
        name,
        date: getCurrentDate(),
        message
      })
      e.target.parentNode.reset()
      // document.querySelector('.form-wrapper').reset()
      setName('')
      setMessage('')
    }

  }

  return (
    <form className='form-wrapper'>
      <input className='form-input' type="text" placeholder='Ваше имя' onInput={ e => setName(e.target.value.trim()) } />
      <textarea className='form-textarea' rows='4' placeholder='Ваше сообщение' onInput={ e => setMessage(e.target.value.trim()) } />
      <button className='form-button fw-bold' onClick={ e => submitHandle(e) }>{ locales.addComment }</button>
    </form>
  )
}

export default Form