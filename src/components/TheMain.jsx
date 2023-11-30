import { list } from 'postcss'
import { posts } from './../db/posts' 
import Card from './Card' 


const colorTags = {
    'html': 'bg-orange-300', //orange
    'css': 'bg-blue-300', // blue
    'js': 'bg-yellow-300', // yellow
    'php': 'bg-indigo-300', // violette
}

function tagsList() {
    const tagsList = []

    
    posts.map((post,i) => {
        post.tags.map((tag,i) => {
            if(!(tagsList.includes(tag))){
                tagsList.push(tag)
            }
        })
    })
    
    return tagsList
}
export default function TheMain(){
 
    return (
    <>
    <main> 
        <div>
            <h1 className='my-6 font-bold text-center text-4xl' >
                 i tags che troverari i questa pagina sono: 
            </h1>
           
            
            <ul className='flex justify-center'> 
                {tagsList().map((tag,i) => ( <li className={colorTags[tag]} key={i}>{tag}</li>))}
            </ul>

        </div>

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