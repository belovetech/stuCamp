import styles from './style';

import { Navbar, Stats, Hero, Search, Locations, Offers, Reviews, Footer
} from './components';

const App = () =>  (
    <div className="w-full overflow-hidden">

      <div className={`t-0 sticky z-20 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-secondary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Stats />
        </div>
      </div>

      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Search />
        </div>
      </div>

      <div className={`bg-white`}>
        <div className={`w-full`}>
          <Locations />
        </div>
      </div>

      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Offers />
        </div>
      </div>

      <div className={`bg-secondary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Reviews />
        </div>
      </div>

      <div className={`bg-white ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

    </div>
  );

export default App;
