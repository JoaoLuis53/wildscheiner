import styles from './Input.module.css';
import { ChangeEvent } from 'react';

type Props = {
    type: string;
    text: string;
    name: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export const Input = ({ type, text, name, placeholder, onChange, value }: Props) => {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}