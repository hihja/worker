import {FC} from "react";
import AccordionItem from "@/components/ui/Accordion";
import styles from '@/assets/styles/faq.module.scss';

interface IFaq {
    title: string
    content: string
}

const data: IFaq[] = [
    {title: "Почему он используется", content: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации \"Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст..\""},
    {title: "Почему он используется", content: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации \"Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст..\""},
    {title: "Почему он используется", content: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации \"Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст..\""},
    {title: "Почему он используется", content: "Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации \"Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст..\""},
]

const Faq: FC = () => {
    return (
        <div className={styles.faq}>
            <div className={styles.faq__content}>
                <div className={styles.title} style={{textAlign: "center"}}>
                    Часто задаваемые вопросы
                </div>
                <div className={styles.faq__items}>
                    {data.map((item, index) =>
                        <AccordionItem key={index} title={item.title} content={item.content}/>
                    )}
                </div>
                <div className={styles.faq__desc}>
                    Вы можете <span>задать свой вопрос</span> и мы в ближайшее время на него ответим
                </div>
            </div>
        </div>
    )
}

export default Faq