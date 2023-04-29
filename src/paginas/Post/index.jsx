import PageDefault from 'componentes/PageDefault'
import PostTemplate from 'componentes/PostTemplate'
import posts from 'json/posts.json'
import NotFound from 'paginas/NotFound'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Route, Routes, useParams } from "react-router-dom"
import './Post.css'

export default function Post() {

    const params = useParams()
    const post = posts.find((post) => { return post.id === Number(params.id) })

    if (!post) {
        return <NotFound />
    }

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
                    </PostTemplate>
                }></Route>
            </Route>
        </Routes>
    )
}
