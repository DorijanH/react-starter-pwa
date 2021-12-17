// Components import
import Link from 'next/link';
import Image from 'next/image';

// Logo import
import ewLogo from '../../public/assets/images/ewLogo.png';

// Styles import
import styles from './IndexView.module.scss';

/**
 * Function represents the view corresponding to the index page.
 *
 * @returns view's elements
 */
function IndexView() {
  return (
    <div className={styles.container}>
      <div className={styles.logoSection}>
        <span>Try switching to the offline mode and hard refreshing, page caches.</span>
        <Image
          loader={() => '/assets/images/ewLogo.png'}
          src={ewLogo}
          alt="Enterwell logo"
          height={100}
          width={300}
        />
      </div>
      <span>
        Not much to see here. If you are intereseted in Pokemons, visit
      </span>
      <Link href="/pokemons" as="/pokemons">
        <a className={styles.link}>
          Pokemons page
        </a>
      </Link>
    </div>
  );
}

export default IndexView;
