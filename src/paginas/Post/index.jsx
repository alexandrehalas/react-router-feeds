import PageDefault from 'componentes/PageDefault'
import PostCard from 'componentes/PostCard'
import PostTemplate from 'componentes/PostTemplate'
import posts from 'json/posts.json'
import NotFound from 'paginas/NotFound'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Route, Routes, useParams } from "react-router-dom"
import './Post.css'
import styles from './Post.module.css'

export default function Post() {

    const params = useParams()
    const post = posts.find((post) => { return post.id === Number(params.id) })

    if (!post) {
        return <NotFound />
    }

    const recommendedPosts = posts
        .filter((post) => post.id !== Number(params.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    return (
        <Routes>
            <Route path='*' element={<PageDefault />}>
                <Route index element={
                    <PostTemplate
                        coverPhoto={`/assets/posts/${post.id}/capa.png`}
                        title={post.title}
                    >
                        <div className='post-markdown-container'>
                            <ReactMarkdown>
                                {post.text}
                            </ReactMarkdown>
                        </div>
                        <h2 className={styles.title}>Outros posts que você pode gostar:</h2>
                        <ul className={styles.recommendedPosts}>
                            {recommendedPosts.map((recommendedPost) => {
                                return <li key={recommendedPost.id}>
                                    <PostCard post={recommendedPost} />
                                </li>
                            })}
                        </ul>
                    </PostTemplate>
                }></Route>
            </Route>
        </Routes>
    )
}
