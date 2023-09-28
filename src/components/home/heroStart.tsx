import {FC} from "react";
import Link from "next/link";
import styles from "@/assets/styles/start.module.scss"
import Button from "@/components/ui/Button/Button";

const heroStart: FC = () => {
    return (
        <div className={styles.start}>
            <div className={styles.start__content}>
                <div>
                    <h1 className={styles.start__title}>Сервис быстрого поиска персонала</h1>
                    <div className={styles.start__buttons}>
                        <Link href={'/job-posting'}>
                            <Button type="primary" text="Разместить вакансию"/>
                        </Link>
                        <Button type="secondary" text="Поиск и подбор силами Исполнителя"/>
                    </div>
                </div>
                <div className={styles.start__count}>
                    <div className={styles.count__content}>
                        <h5 className={styles.count__value}>1 243 456</h5>
                        <h4 className={styles.count__title}>кандидатов активно
                            ищут работу</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default heroStart