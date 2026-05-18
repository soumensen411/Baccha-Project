import React, { useContext, useState } from "react";
import { Authcontext } from "../Authcontext";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
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

  function handleGithubsignIn() {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log("GitHub sign-in successful:", result.user);
        login({
          name: result.user.displayName,
          email: result.user.email,
          img_url: result.user.photoURL,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("GitHub sign-in error:", error.code, error.message);
        
        if (error.code === "auth/account-exists-with-different-credential") {
          alert(
            "This email is already linked to another account.\n\n" +
            "Please sign in with your original method (Google) first, then you can link GitHub to your account."
          );
        } else {
          alert(`GitHub sign-in failed: ${error.message}`);
        }
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

          <button className="btn btn-soft btn-success mt-4">Login</button>
          <span className="text-center text-white/50">or</span>
          {/* Google */}
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
          {/* GitHub */}
          <button
          onClick={handleGithubsignIn}
          className="btn bg-black text-white border-black mt-2">
            <svg
              aria-label="GitHub logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              ></path>
            </svg>
            Login with GitHub
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
