import React from 'react'
import PropTypes from 'prop-types'

const User = props => {
  console.log(props.user);
  return (
    <div className='text-center mt-5'>
      <h1>PropTypes Example</h1>
      <h3>{props.user}</h3>
      
    </div>
  )
}

User.propTypes = {
  user: PropTypes.string.isRequired,
}

export default User
