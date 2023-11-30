import { useLayoutEffect } from "react";
import style from './../styles/modules/card.module.css'

const colorTags = {
    'html': 'bg-orange-300', //orange
    'css': 'bg-blue-300', // blue
    'js': 'bg-yellow-300', // yellow
    'php': 'bg-indigo-300', // violette
}


export default function Card({ title, image, content, tags, published }){
   
    return (
    <>
    <div className={style.card}>

        <div className={ (published && style.published) + ' ' + style.pallino}>

        </div>
        <h4>
            { title }
        </h4>
        <div className={style.img}>
            <img src={image || 'https://picsum.photos/400'} alt="immagine del post" />
        </div>
        <p className="my-3 py-2">
            {content}
        </p>
        <ul>
           {
           tags.map((tag, i) => { 
            return <li className={colorTags[tag]} key={i}>{tag}</li>
           }) 
        } 
        </ul>
        
        
    </div>
    </>
    )
   
}