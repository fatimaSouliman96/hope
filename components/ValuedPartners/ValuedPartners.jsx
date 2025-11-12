import Image from 'next/image';
import styles from './ValuedPartners.module.css';

const ValuedPartners = () => {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Valued Partners</h2>
        <div className={styles.partnersGrid}>
          <div className={styles.partnerItem}>
            <p className={styles.partnerName}>UNICEF</p>
            <div className={styles.logoContainer}>
              <Image
                src="/uncif.png"
                alt="UNICEF Logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className={styles.partnerItem}>
            <p className={styles.partnerName}>Syrian Ministry of Social Affairs and Labor</p>
            <div className={styles.logoContainer}>
              <Image
                src="/syria.png"
                alt="Syrian Ministry of Social Affairs and Labor Logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className={styles.partnerItem}>
            <p className={styles.partnerName}>Local civil society organizations and authorities</p>
            <div className={styles.logoContainer}>
              <Image
                src="/map.jpg"
                alt="Map of Syria"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuedPartners;