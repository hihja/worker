import {FC} from "react";
import styles from "@/assets/styles/tarrifs.module.scss"
import {AiOutlineCheckSquare} from "react-icons/ai";
import Button from "@/components/ui/Button/Button";

interface ITarrif {
    id: number
    title: string
    price: string
    items: string[]
}

const data:ITarrif[] = [
    {id: 1, title: "Стартовый", price: "Бесплатно", items: ["самостоятельное размещение заявки", "24 часа показа с момента активации", "получение анкеты и прямого контакта соискателя"]},
    {id: 2, title: "Разовый", price: "500", items: ["самостоятельное размещение заявки", "10 дней показа с момента активации", "получение анкеты и прямого контакта соискателя"]},
    {id: 3, title: "Персональный HR", price: "10 000", items: ["согласование текста вакансии с менеджером Исполнителя", "поиск и подбор сотрудников менеджером исполнителя", "предоставление проверенных анкет Заказчику", "трудоустройство соискателей в штат Клиента", "гарантия результата"]},
]

const Tarrifs: FC<ITarrif> = () => {
    return (
        <div className={styles.tarrifs}>
            <div className={styles.tarrifs__content}>
                <div className={styles.title}>
                    Тарифы
                </div>
                <div className={styles.tarrifs__items}>
                    {data.map((item) => (
                        <>
                            <div key={item.id} className={styles.tarrifs__item}>
                                <div className={styles.tarrifs__title}>
                                    <h5 className={styles.tarrif__title}>{item.title}</h5>
                                    <h5 className={styles.tarrif__price}>{item.price}</h5>
                                </div>

                                <ul className={styles.tarrifs__list}>
                                    {item.items.map((subItem, index) => (
                                        <li key={index} className={styles.list__item}>
                                            <AiOutlineCheckSquare className={styles.icon} size={20}/>
                                            {subItem}
                                        </li>
                                    ))}
                                </ul>
                                <div className={styles.tarrif__buttons}>
                                    <Button type="primary" text="Выбрать"/>
                                    <Button type="secondary" text="Подробнее"/>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tarrifs