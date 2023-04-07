import styles from './Header.module.css';

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.logo_left}>
                <h1>Wildscheine </h1>
                <img src="../../assets/images/moto-logo.png" />
                <h1>Trail Club</h1>
            </div>
        </div>
    );
}