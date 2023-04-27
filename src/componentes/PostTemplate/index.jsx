import styles from './PostTemplate.module.css'

export default function PostTemplate({ children, coverPhoto, title }) {
    return (
        <article className={styles.postTemplateContainer}>
            <div className={styles.coverPhoto} style={{ backgroundImage: `url(${coverPhoto})` }} />
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles.postContentContainer}>
                {children}
            </div>
        </article>
    )
}
