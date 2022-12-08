import React, { useState, useEffect } from 'react';
import styles from './style';
import { Navbar, Home, About, Contact, Footer, SignIn
} from './components';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { getHostels } from './actions/hostels';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHostels())
  }, [dispatch]);

  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`} className="w-full overflow-hidden">

      <div className={`t-0 sticky z-20 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div  className="w-full overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<SignIn />} />
        </Routes>
      </div>

      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

    </GoogleOAuthProvider>
  )
  };

export default App;
