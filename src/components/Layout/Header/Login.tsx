import { useState } from 'react';
import styles from './Header.module.css';
import { FaMotorcycle } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { Link } from 'react-router-dom';

export const Login = () => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [show, setShow] = useState(false);

    const changeEvent = () => {
        if (userName !== '' && userPassword !== '') {
            setShow(true);
        } else {
            alert("Preencha os Campos")
        }
    }


    return (
        <div className={styles.headerLogin}>
            {!show &&
                <div className={styles.logoRight}>
                    <form>
                        <input type="text"
                            name="usuario"
                            placeholder="Usuário"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        /><br />
                        <input
                            type="password"
                            name="senha"
                            placeholder="Digite Sua senha"
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                        /><br />
                        <button className={styles.button} onClick={changeEvent}>Entrar</button>
                    </form>
                    <Link to={''}>Esqueci minha Senha</Link>
                </div>
            }
            {show &&
                <div className={styles.logoImg}>

                    <img src='../assets/images/1.jpg' alt='' />
                    <div className={styles.icons}>
                        <GiFullMotorcycleHelmet className={styles.icon} /> <p> Pedrinho</p>
                    </div>
                    <div className={styles.icons}>
                        <FaMotorcycle className={styles.icon} /> <p> Crf 450</p>
                    </div>
                </div>
            }

        </div>
    );
}