import styles from './style';

import { Navbar, Stats, Hero, Search, Locations, Offers, Reviews, Footer
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
        </div>
      </div>

      <div className={`bg-white`}>
        <div className={`w-full`}>
          <Locations />
          <Offers />
          <Reviews />
          <Footer />
        </div>
      </div>

    </div>
  );

export default App;
