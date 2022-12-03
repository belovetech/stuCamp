import styles from '../style';

import { Stats, Hero, Search, Locations, Offers, Reviews, Footer
} from './';

const Home = () =>  (
    <div>

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

    </div>
  );

export default Home;
