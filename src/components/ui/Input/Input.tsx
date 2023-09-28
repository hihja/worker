import {FC} from "react";
import styles from "@/assets/styles/ui/input.module.scss";

interface IInput {
    placeholder?: string
    label?: string
}
const Input: FC<IInput> = ({placeholder, label}) => {
    return (
        <div className={styles.input__container}>
            <label>
                {label}
                <input type="text" placeholder={placeholder} className={styles.input}/>
            </label>
        </div>
    )
}

export default Input