import React from 'react'
import { useNavigate } from 'react-router-dom'

const contract = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contract Page</h1>
      <p>This is the contract page content.</p>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  )
}

export default contract
