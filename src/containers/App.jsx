import React, { useState } from 'react'

import UserInfo from '../components/UserInfo'
import ServicesInfo from '../components/ServicesInfo'
import Comments from '../components/Comments'
import Form from '../components/Form'
import locales from '../locales'

const App = () => {
  const [comments, setComments] = useState(locales.feedbacks.comments)

  const addComment = comment => {
    setComments([...comments, comment])
  }

  return (
    <main className='app'>
      <div className='wrapper'>
        <div>
          <UserInfo />
          <ServicesInfo />
          <Comments comments={comments} />
        </div>
        <Form addComment={addComment} />
      </div>
    </main>
  )
}

export default App
