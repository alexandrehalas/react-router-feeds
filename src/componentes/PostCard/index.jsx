import Button from 'componentes/Button'
import { Link } from 'react-router-dom'
import styles from './PostCard.module.css'

export default function PostCard({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.cover} src={`/assets/posts/${post.id}/capa.png`} alt={`Capa do post ${post.title}`} />
                <h2 className={styles.title}>{post.title}</h2>
                <Button>Ler</Button>
            </div>
        </Link>
    )
}
