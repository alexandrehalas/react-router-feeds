import styles from './Home.module.css'

import Post from 'componentes/Post'
import posts from 'json/posts.json'

export default function Home() {
    return (
        <main>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>
        </main>
    )
}
