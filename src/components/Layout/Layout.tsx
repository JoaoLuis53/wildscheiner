import { Header } from "./Header";
import { ReactNode } from 'react';
import styles from './Layout.module.css';
import { Footer } from "./Footer";
import { MainRoutes } from "../../routes/MainRoutes";

type Props = {
    children: ReactNode
}

export const Layout = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            <div>
                <Header />
            </div>
            <div className={styles.children}>
                {children &&
                    <>
                        <div className={styles.children_leftside}></div>
                        <div className={styles.children_centerside}>
                            <MainRoutes />
                        </div>
                        <div className={styles.children_rightside}></div>
                    </>
                }
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}