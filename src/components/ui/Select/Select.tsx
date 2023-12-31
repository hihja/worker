import {FC} from "react";
import styles from "@/assets/styles/ui/select.module.scss"

interface ISelect {
    values: string[]
    label?: string
}
const Select: FC<ISelect> = ({values, label}) => {
    return (
        <div className={styles.select}>
            <label className={styles.select__content}>
                {label}
                <select>
                    {values.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
            </label>

        </div>

    )
}

export default Select