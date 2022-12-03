import styles from './style';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar, Home, About, Contact, Footer, SignIn
} from './components';

const App = () =>  (
    <div className="w-full overflow-hidden">

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
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>

      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

    </div>
  );

export default App;
