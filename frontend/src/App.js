import styles from './style';

import { Navbar, Stats, Hero, Search, Offers, Reviews, Footer
} from './components';

const App = () =>  (
    <div className="w-full overflow-hidden">

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
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
          <Offers />
          <Reviews />
          <Footer />
        </div>
      </div>

    </div>
  );

export default App;
