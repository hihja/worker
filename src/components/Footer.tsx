import {CSSProperties, FC} from "react";
import styles from "@/assets/styles/footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/images/logo.svg'

interface FooterProps {
    bottom?: boolean;
}

const Footer: FC<FooterProps> = ({bottom}) => {
    const footerStyle: CSSProperties = bottom ? { position: "absolute", bottom: 0 } : {};

    return (
        <footer className={styles.footer} style={footerStyle}>
            <div className={styles.footer__content}>
                <Image src={logo} alt="Logo" height={42}/>
                <Link href={'tel:89999999999'}><span>8 999 999 99 99</span></Link>
            </div>
        </footer>
    )
}

export default Footer