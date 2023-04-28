import styles from './PostCard.module.css'

export default function PostCard({ post }) {
    return (
        <div className={styles.post}>
            <img className={styles.cover} src={`/assets/posts/${post.id}/capa.png`} alt={`Capa do post ${post.title}`} />
            <h2 className={styles.title}>{post.title}</h2>
            <button className={styles.readButton}>Ler</button>
        </div>
    )
}
