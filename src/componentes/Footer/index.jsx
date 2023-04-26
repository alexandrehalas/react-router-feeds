import styles from './Footer.module.css'
import { ReactComponent as Trademark } from './trademark.svg'

export default function Footer() {
    return (

        <footer className={styles.footer}>
            <Trademark />
            Desenvolvido por Alexandre Halas
        </footer>
    )
}
