import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import { Route, Routes } from 'react-router-dom'
import { Authcontext } from './Authcontext'

const App = () => {
  const [user, setUser] = useState({name:"",email:"",isAuth:false});
  function login({name,email}) {
    setUser({ name: name, email:email,isAuth: true })
  }
  function logout(){
    setUser({name:"",isAuth:false})
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
