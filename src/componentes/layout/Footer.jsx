import styles from './Footer.module.css';


function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>🟡🔵🔴 PolitiKeros Store</h3>
      <p>
        Adoptando políticos desde 2026.
      </p>

      <div className={styles.cardsContainer}>
        
        <div className={styles.devCard}>
            <img
              src="/img/dev1.jpg"
              alt="dev1"
              className={styles.yellowBorder}
            />
            <h4>Issa</h4>
            <p>Frontend Developer</p>
        </div>
      
        <div className={styles.devCard}>
          <img
            src="/img/dev2.jpg"
            alt="dev2"
            className={styles.redBorder}
          />
          <h4>Millo</h4>
          <p>QA de políticos</p>
        </div>

        <div className={styles.devCard}>
          <img
            src="/img/dev3.jpg"
            alt="dev3"
            className={styles.yellowBorder}
          />
            <h4>Team ATR</h4>
            <p>Deploy Specialist</p>
        </div>
      </div>
    </footer>
  );
}


export default Footer