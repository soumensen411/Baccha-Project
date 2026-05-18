import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import { Route, Routes } from 'react-router-dom'
import { Authcontext } from './Authcontext'
import { signOut } from 'firebase/auth'
import { auth } from './Firebase/firebase.init'

const App = () => {
  const [user, setUser] = useState({name:"",email:"",img_url:"",isAuth:false});
  function login({name,email,img_url}) {
    setUser({ name: name, email:email, img_url: img_url, isAuth: true })
  }
  function logout(){
    signOut(auth)
      .then(() => {
        setUser({name:"",email:"",img_url:"",isAuth:false})
      })
      .catch((error) => {
        console.error('Sign-out error:', error)
        setUser({name:"",email:"",img_url:"",isAuth:false})
      })
  }
  return (
    <div>
        <Authcontext.Provider value={{user, login, logout}}>
      <Navbar />
      <div className='flex justify-center items-center flex-col w-full '>
          <Routes>
            <Route path='/' element=<Home name="soumen" /> />
            <Route path='/profile' element=<Profile name="Soumen" /> />
            <Route path='/login' element=<Login /> />
          </Routes>
      </div>
        </Authcontext.Provider>
    </div>
  )
}

export default App
