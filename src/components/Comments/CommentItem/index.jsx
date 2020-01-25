import React from 'react'

const CommentItem = ({ name, date, message }) => {
  return (
    <div className='commentitem-wrapper'>
      <div className='commentitem-info'>
        <h3 className='commentitem-info-name fw-bold'>{ name }</h3>
        <p className='commentitem-info-date fs-11'>{ date }</p>
      </div>
      <div className='commentitem-info-message-card'>
        <span className='triangle-grey' />
        <span className='triangle-white' />
        <p className='lh-19'>{ message }</p>
      </div>
    </div>
  )

}

export default CommentItem