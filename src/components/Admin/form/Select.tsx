import styles from './Select.module.css';

type Props = {
    text: string;
    name: string;
    value?: string;
    options?: HTMLCollection;
}

export const Select = ({ text, name, options, value }: Props) => {
    return (
        <div className={styles.form_control}>
            <label>{text}:</label>
            <select name={name} id={name}>
                <option>Selecione uma Opção</option>
            </select>
        </div>
    );
}