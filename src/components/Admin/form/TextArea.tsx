import styles from './TextArea.module.css';

type Props = {
    text: string;
    placeholder: string;
    onChange: (e: any) => void;
    value: string;
}

export const TextArea = ({ text, placeholder, onChange, value }: Props) => {
    return (
        <div className={styles.form_control}>
            <label>{text}:</label>
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}