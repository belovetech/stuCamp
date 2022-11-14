import styles from './style';

import { Navbar, Button, Hero, Popular, Cities, Offers, Reviews, Footer
} from './components';

const App = () =>  (
    <div className="w-full overflow-hidden">

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Popular />
          <Cities />
          <Offers />
          <Reviews />
          <Footer />
        </div>
      </div>

    </div>
  );

export default App;
