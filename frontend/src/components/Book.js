// import styles from '../style'
// import { signin } from './index.js'
// import { LockClosedIcon } from '@heroicons/react/20/solid'
// import { Link } from 'react-router-dom'

// const Book = () => (
//   <section id="home" className={`bg-secondary ${styles.flexStart}`}>
//     <div
//       className={`${styles.boxWidth} sm:pb-16 pb-6 my-16 flex justify-center content-between flex-row bg-secondary ${styles.paddingY}`}
//     >
//       <div
//         className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:pl-16 px-6 sm:w-[60%]`}
//       >
//         <img
//           src={Book}
//           className="w-[300px]"
//           alt="student laying on a couch"
//         />

//         <div className="flex flex-col">
//           <h4 className="text-hero_text font-poppins font-semibold mt-9 ss:text-[48x] text-[28px] ss:leading-[40px] leading-[75px]">
//             stuCamp Services
//           </h4>
//           <p
//             className={`${styles.paragraph} text-[14px] text-hero_text max-w-[30vw] mt-1`}
//           >
//             Easily manage your student life. Post, maintenance and more
//           </p>
//         </div>
//       </div>

//       <div className="flex items-center w-[35%] mr-16">
//         <div className="w-full max-w-md space-y-8">
//           <div>
//             <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//               Hello, sign in to get started
//             </h2>
//             <p className="mt-2 text-center text-sm text-gray-600">
//               Or{' '}
//               <Link
//                 to="/book"
//                 className="font-medium text-indigo-600 hover:text-indigo-500"
//               >
//                 book a room now
//               </Link>
//             </p>
//           </div>
//           <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
//             <input type="hidden" name="remember" defaultValue="true" />
//             <div className="-space-y-px rounded-md shadow-sm">
//               <div>
//                 <label htmlFor="email-address" className="sr-only">
//                   Email address
//                 </label>
//                 <input
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                   placeholder="Email address"
//                   handleChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password" className="sr-only">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                   placeholder="Password"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                 />
//                 <label
//                   htmlFor="remember-me"
//                   className="ml-2 block text-sm text-gray-900"
//                 >
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <a
//                   href="#"
//                   className="font-medium text-indigo-600 hover:text-indigo-500"
//                 >
//                   Forgot your password?
//                 </a>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:primary_deep focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//               >
//                 <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                   <LockClosedIcon
//                     className="h-5 w-5 text-lock group-hover:text-lockdown"
//                     aria-hidden="true"
//                   />
//                 </span>
//                 Sign in
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </section>
// )

// export default Book
