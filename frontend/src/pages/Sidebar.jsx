import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      Sidebar
      <Link to={'/left'}>
        Left
      </Link>
    </div>
  )
}

export default Sidebar
