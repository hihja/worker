import {FC} from "react";
import styles from "@/assets/styles/benefits.module.scss"
import {FiAirplay} from "react-icons/fi"

interface IBenefit {
    id: number
    title: string
    item_title: string[]
}

const data:IBenefit[] = [
    {id: 1, title: "Узкая направленность деятельности", item_title: ["концентрация соискателей, которые могут работать по разным специальностям", "собственная платформа по поиску персонала, интегрированная в ТГ", "поиск низкоквалифицированного персонала"]},
    {id: 2, title: "Удобство поиска персонала", item_title: ["быстрое и простое размещение вакансии", " удобный поиск", "минимальные настройки поиска для получения нужного результата", "конфиденциальность ваших данных", "возможность получить информацию об анкете соискателя прежде, чем связаться с ним"]},
    {id: 3, title: "Прозрачная ценовая политика", item_title: ["среднерыночная стоимость размещения вакансии на определенный срок при самостоятельном использовании функционала сайта", "в случае помощи подбора персонала более выгодная стоимость и быстрое достижение цели, чем при сотрудничестве с кадровыми агенствами"]},
]

const Benefits: FC = () => {
    return (
        <div className={styles.benefits}>
            <div className={styles.benefits__content}>
                <div className={styles.title}>
                    Преимущества
                </div>
                <div className={styles.benefits__items}>
                    {data.map((item) => (
                        <>
                            <div key={item.id} className={styles.benefits__item}>
                                <div className={styles.benefits__title}>
                                    <FiAirplay className={styles.icon} size={25}/>
                                    <h5 className={styles.benefit__title}>{item.title}</h5>
                                </div>

                                <ul className={styles.benefits__list}>
                                    {item.item_title.map((subItem, index) => (
                                        <li key={index} className={styles.list__item}>{subItem}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.line}></div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Benefits