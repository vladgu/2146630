import React from 'react'

import locales from '../../locales'
import avatar from '../../images/avatar.png'

const UserInfo = () => (
  <div className='userinfo-wrapper'>
    <img className='userinfo-avatar' src={ avatar } alt='avatar' />
    <div className='userinfo-info'>
      <h1 className='fs-16 lh-20 fw-bold'>{ locales.user.name }</h1>
      <p className='userinfo-position fs-12 lh-20'>{ locales.user.position }</p>
      <div className='userinfo-yellow-wrapper fs-14 lh-20'>
        <p>{ locales.user.status1 }</p>
        <p>{ locales.user.status2 }</p>
      </div>
    </div>
  </div>
)

export default UserInfo