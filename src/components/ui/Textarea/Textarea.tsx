import {FC} from "react";
import styles from "@/assets/styles/ui/textarea.module.scss";

const Textarea: FC = ({placeholder, label}) => {
    return (
        <div className={styles.textarea}>
            <div className={styles.textarea__content}>
                <label>
                    {label}
                    <textarea placeholder={placeholder} rows={4}></textarea>
                </label>
            </div>

        </div>
    )
}

export default Textarea