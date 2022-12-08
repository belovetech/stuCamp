import React, { useState } from 'react';
import styles from '../style'
import { signin } from '../assets'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { GoogleLogin } from '@react-oauth/google';
// const dotenv = require('dotenv');
// dotenv.config({ path: '../config.env' });

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleChange = () => {

  }
  const handleSubmit = () => {

  }

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  const googleSuccess = async (res) => {
    console.log(res);
  }

  const googleFailure = () => {
    console.log("Google Sign In unsuccessful. Try again later")
  }

  return (
  <section id="home" className={`bg-secondary ${styles.flexStart}`}>
    <div
      className={`${styles.boxWidth} sm:pb-16 pb-6 my-16 mx-16 flex justify-center content-between bg-secondary ${styles.paddingY}`}
    >
      <div
        className={`${styles.flexStart} flex-col xl:mx-8 sm:pl-16 px-16 sm:w-[60%]`}
      >
        <img
          src={signin}
          className="w-[300px]"
          alt="student laying on a couch"
        />

        <div className="flex flex-col">
          <h4 className="text-hero_text font-poppins font-semibold mt-9 ss:text-[48x] text-[28px] ss:leading-[40px] leading-[75px]">
            stuCamp Services
          </h4>
          <p
            className={`${styles.paragraph} text-[14px] text-hero_text max-w-[30vw] mt-1`}
          >
            Easily manage your student life. Post, maintenance and more
          </p>
        </div>
      </div>

      <div className="flex items-center w-[35%] mr-16">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              { isSignup ? 'Let\'s get you started' : 'Hello, sign in to get started'}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <button
                to="/signUp"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={switchMode}
              >
                { isSignup ? 'Have an account? Sign In' : 'Don\'t have an account? Sign Up'}
              </button>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                {isSignup && (
                  <>
                    <div>
                      <label htmlFor="first-name" className="sr-only"> First Name </label>
                      <input id="first-name" name="firstName" type="name" autoComplete="name" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="First Name" handleChange={handleChange} />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="sr-only"> Last Name </label>
                      <input id="last-name" name="lastName" type="name" autoComplete="name" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Last Name" handleChange={handleChange} />
                    </div>
                  </>
                )}
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                    handleChange={handleChange}
                  />
                </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  handleShowPassword={handleShowPassword}
                />
              </div>
              { isSignup && (
                <div>
                  <label htmlFor="password" className="sr-only">
                    Repeat Password
                  </label>
                  <input
                    id="confirm-password"
                    name="confirmpassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Repeat Password"
                    handleChange={handleChange}
                  />
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

                { !isSignup && (
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                )}
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:primary_deep focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-lock group-hover:text-lockdown"
                    aria-hidden="true"
                  />
                </span>
                {isSignup ? 'Sign Up' : 'Sign In'}
              </button>
            </div>


            <GoogleLogin
              // render={(renderProps) => (
              //   <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="group relative flex w-full justify-center rounded-md border border-transparent bg-secondary py-2 px-4 text-sm font-medium text-white hover:primary_deep focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              //     <span><img src={google} alt="google icon" /></span>  Google Sign In
              //   </button>
              // )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
)
}

export default SignIn
