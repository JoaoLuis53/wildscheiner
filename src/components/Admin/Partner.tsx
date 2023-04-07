import { useState } from "react";
import { uuid } from "uuidv4";
import { api } from "../../utils/Api/partnerApi";
import styles from "./Admin.module.css";
import { Input } from "./form/Input";
import { SubmitButton } from "./form/SubmitButton";
import { TextArea } from "./form/TextArea";



export const Partner = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [motorbike, setMotorBike] = useState('');
    const [avatar, setAvatar] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');

    const data = {
        id: uuid,
        name: name,
        surname: surname,
        email: email,
        password: password,
        motorbike: motorbike,
        avatar: `http://localhost:3000/assets/images/${avatar}`,
        description: description,
        photo: `http://localhost:3000/assets/images/${photo}`
    };

    const createPartner = () => {
        fetch(
            "http://localhost:5000/partners", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            }
            )
            .catch(err => console.log(err));
    }
    const changeInputEvent = () => {
        createPartner();
    }

    return (
        <div className={styles.containers}>
            <h1>Formulário de Sócio</h1>
            <form className={styles.form}>
                <Input
                    type="text"
                    placeholder="digite seu nome"
                    name='name'
                    text='Nome'
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />
                <Input
                    type="text"
                    placeholder="digite seu apelido"
                    name='surname'
                    text='Apelido'
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                />
                <Input
                    type="email"
                    placeholder="digite seu Email"
                    name='Email'
                    text='E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="digite sua Senha"
                    name='password'
                    text='Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="digite o modelo de Sua Moto"
                    name='motorbike'
                    text='Moto'
                    value={motorbike}
                    onChange={(e) => setMotorBike(e.target.value)}
                />

                <Input
                    type="file"
                    placeholder="procure sua foto"
                    name='avatar'
                    text='Foto Perfil'
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                />
                <Input
                    type="file"
                    placeholder="procure sua foto"
                    name='photos'
                    text='Fotos'
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                />
                <TextArea
                    placeholder="digite seu depoimento"
                    text='Depoimento'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <SubmitButton
                    text='Cadastrar Sócio'
                    onclick={changeInputEvent}
                />
            </form>
        </div>
    );
}