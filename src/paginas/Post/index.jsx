import PostTemplate from 'componentes/PostTemplate'
import posts from 'json/posts.json'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from "react-router-dom"
import './Post.css'

export default function Post() {
    const params = useParams()
    const post = posts.find((post) => { return post.id === Number(params.id) })
    return (
        <div>
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
        </div >
    )
}
