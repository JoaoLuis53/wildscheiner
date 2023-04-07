import styles from './SubmitButton.module.css';

type Props = {
    text: string;
    onclick: () => void;

}

export const SubmitButton = ({ text, onclick }: Props) => {
    return (
        <div >
            <button className={styles.btn} onClick={onclick}>{text}</button>
        </div>
    );
}