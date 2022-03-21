import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userName } = useParams<{ userName?: string }>()
  return (
    <div>
      <h1>User: {userName}</h1>
    </div>
  )
}

export default User
