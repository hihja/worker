import {FC} from "react";
import styles from "@/assets/styles/job_posting.module.scss"
import Input from "@/components/ui/Input/Input";
import Select from "@/components/ui/Select/Select";
import Textarea from "@/components/ui/Textarea/Textarea";
import Button from "@/components/ui/Button/Button";
const JobPosting: FC = () => {
    return (
        <div className={styles.job}>
            <div className={styles.job__content}>
                <div className={styles.job__title}>
                    <div className={styles.title}>
                        Размещение вакансии
                    </div>
                    <p className={styles.job__auth}>Уже есть аккаунт? <span>Авторизоваться</span></p>
                </div>
                <div className={styles.job__form}>
                    <form className={styles.form}>
                        <Input placeholder="ПАО Сбербанк" label="Название организации"/>
                        <div className={styles.group}>
                            <Input placeholder="+7 (999) 999-99-99" label="Номер телефона"/>
                            <Input placeholder="ivanov@mail.ru" label="Название вакансии"/>
                        </div>
                        <Input placeholder="Грузчик на склад" label="Название вакансии"/>
                        <Input placeholder="г. Краснодар, ул. Красная, 1" label="Адрес"/>
                        <div className={styles.group}>
                            <Select values={["Постоянная работа", "Разовая работа", "Вахтовый метод"]} label="Тип вакансии"/>
                            <div style={{width: "100%"}}></div>
                        </div>
                        <Textarea placeholder="Выполнение погрузочных работ на складе сборного груза: сбор товара на поддоны, загрузка с использование ручной рохли. Склад с комфортной температурой. Масса грузов не превышает 10 кг. Дневные и ночные смены на выбор. Перерывы каждые 2 часа, полноценный часовой перерыв." label="Описание вакансии"/>
                        <Textarea placeholder="Готовы рассмотреть сотрудников без опыта работы. Обязательно наличие медицинской книжки. Гражданство РФ." label="Требования к соискателю"/>
                        <div className={styles.group}>
                            <Select values={["Неважно", "Мужской", "Женский"]} label="Пол"/>
                            <Input placeholder="18" label="Мин. возраст"/>
                            <Input placeholder="65" label="Макс. Возраст"/>
                        </div>
                        <div className={styles.group}>
                            <Select values={["Еженедельно", "Ежедневно", "Ежемесячно"]} label="Периодичность выплат"/>
                            <Input placeholder="1000" label="Мин. стоимость раб. смены"/>
                            <Input placeholder="10000" label="Макс. стоимость раб. смены"/>
                        </div>
                        <div className={styles.group}>
                            <Select values={["2 часа", "3 часа", "4 часа", "5 часов", "6 часов", "7 часов", "8 часов", "9 часов", "10 часов", "11 часов", "12 часов", "13 часов", "14 часов", "15 часов", "16 часов"]} label="Мин. длит. раб. смены"/>
                            <Select values={["2 часа", "3 часа", "4 часа", "5 часов", "6 часов", "7 часов", "8 часов", "9 часов", "10 часов", "11 часов", "12 часов", "13 часов", "14 часов", "15 часов", "16 часов"].reverse()} label="Макс. длит. раб. смены"/>
                        </div>
                        <div className={styles.buttons}>
                            <Button type="primary" text="Разместить вакансию"/>
                            <Button type="secondary" text="Закрыть"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JobPosting