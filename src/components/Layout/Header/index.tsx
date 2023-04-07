import styles from './Header.module.css';
import { NavBar } from './NavBar';
import { Logo } from './Logo';
import { DateBar } from './DateBar';
import { Login } from './Login';
import { Slideshow } from './Slideshow';


export const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <NavBar />
            </div>
            <div className={styles.header_centerSide}>
                <div className={styles.headerLogo}>
                    <Logo />
                </div>
                <div className={styles.headerSlides}>
                    <Slideshow />
                </div>
                <div className={styles.headerLogin}>
                    <Login />
                </div>
            </div>

            <div>
                <DateBar />
            </div>
        </header>
    );
}