import React, { useState } from 'react'

import locales from '../../locales'
import heart from '../../images/like.png'
import comment from '../../images/comment.png'
import CommentItem from './CommentItem'

const Comments = ({ comments }) => {

  const [feedbacksToggle, setFeedbacksToggle] = useState(false)

  const getCommentsList = () => {
    return feedbacksToggle ? comments : comments.slice(comments.length - 3, comments.length)
  }

  return (
    <section className='comments-wrapper'>
      <div className='comments-header'>
        <div className='comments-header-group'>
          <p
            className={ `comments-header-button ${!feedbacksToggle ? 'active' : ''}` }
            onClick={ () => setFeedbacksToggle(!feedbacksToggle) }
          >
            { locales.feedbacks.last }
          </p>
          <p
            className={ `comments-header-button ${feedbacksToggle ? 'active' : ''}` }
            onClick={ () => setFeedbacksToggle(!feedbacksToggle) }
          >
            { locales.feedbacks.total }
          </p>
        </div>
        <div className='comments-header-group'>
          <p className='comments-header-icons-text fs-12'>
            <img src={ heart } alt='like' className='icon' />
            131
          </p>
          <p className='comments-header-icons-text fs-12'>
            <img src={ comment } alt='comment' className='icon' />
            { comments.length }
          </p>
        </div>
      </div>
      {
        comments.length && getCommentsList().map(({ name, date, message }, index) => (
          <CommentItem
            key={ String(index) }
            name={ name }
            date={ date }
            message={ message }
          />
        ))
      }
    </section>

  )
}

export default Comments;