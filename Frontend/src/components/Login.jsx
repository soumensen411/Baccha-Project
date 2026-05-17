import React, { useContext, useState } from "react";
import { Authcontext } from "../Authcontext";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import {  signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";



const Login = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  

  
  const { login } = useContext(Authcontext);
  const navigate = useNavigate();

  function hangleGoogleSignin() {
    const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      login({
          name: result.user.displayName,
          email: result.user.email,
          img_url: result.user.photoURL,
        });

        navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
}
  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    login({ name, email, img_url: "" });

    navigate("/");
  }

  return (
    <div className="min-h-[80vh] flex justify-center items-center flex-col">
      <button
        onClick={hangleGoogleSignin}
        className="btn bg-white text-black border-[#e5e5e5]"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
      <form action="" onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-neutral-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="input"
            placeholder="Enter Your Name.."
          />

          <label className="label">Email</label>
          <input
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="input"
            placeholder="Enter Your Email.."
          />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
