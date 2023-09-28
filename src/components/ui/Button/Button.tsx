import {FC} from "react";
import styles from '@/assets/styles/ui/button.module.scss'

interface IButton {
    type: "primary" | "secondary",
    text: string
}

const Button: FC<IButton> = ({type, text}) => {
    return (
        <button className={`${styles.button} ${type === 'primary' ? styles.button__primary : styles.button__secondary}`}>
            {text}
        </button>
    )
}

export default Button