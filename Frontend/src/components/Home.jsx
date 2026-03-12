import React, { useContext } from 'react'
import { Authcontext } from '../Authcontext'
import { Link } from 'react-router-dom'

const Home = () => {

  const { user } = useContext(Authcontext)

  return (
    <div className="min-h-[80vh] flex items-center justify-center">

      <div className="hero bg-base-200 rounded-xl shadow-xl p-10 w-150">

        <div className="hero-content text-center">

          {!user.isAuth ? (

            <div className="max-w-md space-y-4">

              <h1 className="text-4xl font-bold">
                Welcome to the App 🚀
              </h1>

              <p className="opacity-70">
                Please login to explore your profile and access features.
              </p>

              <Link to="/login" className="btn btn-primary">
                Login Now
              </Link>

            </div>

          ) : (

            <div className="max-w-md space-y-4">

              <h1 className="text-4xl font-bold">
                Welcome back, {user.name} 👋
              </h1>

              <p className="opacity-70">
                Glad to see you again. You can visit your profile to see your information.
              </p>

              <Link to="/profile" className="btn btn-secondary">
                Go to Profile
              </Link>

            </div>

          )}

        </div>

      </div>

    </div>
  )
}

export default Home

