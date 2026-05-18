import React, { useContext } from 'react'
import { Authcontext } from '../Authcontext'
const Profile = () => {
    const {user,logout} = useContext(Authcontext)
  return (
    <div className='min-h-[80vh] flex justify-center items-center'>
      <div className="card bg-base-100 w-96 shadow-sm border border-neutral-700">
  <figure>
    <div className="avatar mt-5 mb-2">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
 {!user.isAuth?(<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />):(<img src={user.img_url} />)}
  </div>
</div>
  </figure>
  <div className="card-body">
    <span className="card-title ">{user.isAuth?(<h2> Name: {user.name}</h2>):(<h2>you are not loged in yet!</h2>)}</span>
    <span>{user.isAuth && (<p>Email: {user.email}</p>)}</span>
    <div className="card-actions justify-end">
      {user.isAuth && (<button className="btn btn-primary" onClick={logout}>Log out</button>)}
    </div>
  </div>
</div>
    </div>
  )
}

export default Profile
