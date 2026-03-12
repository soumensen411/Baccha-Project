import React, { useContext, useState } from 'react'
import { Authcontext } from '../Authcontext'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const {login} = useContext(Authcontext)
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault();
        if(!name.trim()) return;
        login({name,email})

        navigate("/")
    }
    return (
        <form action="" onSubmit={handleSubmit} className='min-h-[80vh] flex justify-center items-center'>

            <fieldset className="fieldset bg-base-200 border-neutral-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Name</label>
                <input onChange={(e) => {
                    setName(e.target.value)
                }} type="text" className="input" placeholder="Enter Your Name.." />


                <label className="label">Email</label>
                <input required onChange={(e) => {
                    setEmail(e.target.value)
                }} type="email" className="input" placeholder="Enter Your Email.." />

                <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </form>

    )
}

export default Login
