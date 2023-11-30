import { posts } from './../db/posts' 
import Card from './Card' 

export default function TheMain(){
    return (
    <>
    <main>
        <div className='listCard'>
        { posts.map( (post, i) => {

           return <Card key={i} 
           title={ post.title}
           image={ post.image }
           content={ post.content}
           tags={ post.tags }
           published={ post.published }
           />
        
        })}
           
        </div>
    </main>
    </>
    )
   
}