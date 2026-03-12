import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import { Authcontext } from '../Authcontext'

const Navbar = () => {
  const {user,logout} = useContext(Authcontext)
  return (
    <div>
      <div className="navbar backdrop-blur-lg px-10 shadow-lg">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Bacca Project</a>
  </div>
  <div className="flex justify-between items-center">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/profile">profile</Link></li>      
    </ul>
    {!user.isAuth?(<button className="btn btn-success ml-5"><Link to='/login'>Log in</Link></button>):(<button onClick={logout} className="btn btn-success ml-5"><Link to='/'>Log out</Link></button>)}
  </div>
</div>
    </div>
  )
}

export default Navbar
