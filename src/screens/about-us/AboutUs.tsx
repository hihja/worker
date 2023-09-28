import {FC} from "react";
import styles from "@/assets/styles/about.module.scss";
import WatchVideo from "@/components/home/WatchVideo";

const AboutUs: FC = () => {
    return (
            <div className={styles.about}>
                <div className={styles.about__content}>
                    <div className={styles.about__container}>
                        <WatchVideo title={false}/>
                        <div className={styles.about__title}>
                            <div className={styles.title}>О сервисе</div>
                            <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.. Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам lorem ipsum сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AboutUs