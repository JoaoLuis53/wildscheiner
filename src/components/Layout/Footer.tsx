import styles from './Layout.module.css';

export const Footer = () => {
    let dt = new Date();
    let ano = dt.getFullYear();
    const dateFooter = 'Copyright © Wildscheine Trail Club - ' + ano + '.';
    return (
        <div className={styles.footer}>
            <span>&reg;</span>    {dateFooter}
        </div>
    );
}