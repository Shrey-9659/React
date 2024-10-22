import React, { useContext } from 'react'
import UserContext from '../context/userContext'

const Profile = () => {
  const {user} = useContext(UserContext)
  return (
    <div>
        <h3> {user.userName} logged in</h3>
    </div>
  )
}

export default Profile