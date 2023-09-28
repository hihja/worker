import {FC} from "react";
import styles from "@/assets/styles/watch_video.module.scss";

import preview from "@/assets/images/Rectangle 48.png"
import Image from "next/image";
import {FiPlay} from "react-icons/fi"

const WatchVideo: FC = ({title}) => {
    return (
        <div className={styles.watch_video}>
            <div className={styles.watch__content}>
                {
                    !title && (
                        <h3 className={styles.title}>Посмотрите короткое видео о нашей работе</h3>

                    )
                }
                <div className={styles.video}>
                    <Image src={preview} alt="Video"/>
                    <button className={styles.play}>
                        <FiPlay className={styles.icon}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WatchVideo