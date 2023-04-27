import styles from './Banner.module.css'
import coloredCircle from './colored_circle.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.presentation}>
                <h1 className={styles.title}>
                    Lorem Ipsum
                </h1>
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id porta nibh venenatis cras sed felis eget. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Turpis egestas sed tempus urna. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Massa sed elementum tempus egestas sed sed risus pretium quam. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin.
                </p>
            </div>
            <div className={styles.images}>
                <img className={styles.coloredCircle} src={coloredCircle} aria-hidden={true} alt='Círculo Colorido' />
                <img className={styles.photo} src={coloredCircle} alt='Círculo Colorido' />
            </div>
        </div>
    )
}
