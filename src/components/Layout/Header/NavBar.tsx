import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <Link to={'/'}>Página Inicial</Link>
            <Link to={'/about'}>Quem Somos</Link>
            <Link to={'/partners'}>Sócios</Link>
            <Link to={''}>Fotos</Link>
            <Link to={''}>Contatos</Link>
            <Link to={'/administer'}>Admin</Link>
        </nav>
    );
}