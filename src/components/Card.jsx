import { useLayoutEffect } from "react";
import style from './../styles/modules/card.module.css'

export default function Card({ title, image, content, tags, published }){
    return (
    <>
    <div className={style.card}>

        <div className={published && style.published}>

        </div>
        <h4>
            { title }
        </h4>
        <div className={style.img}>
            <img src="" alt="immagine del post" />
        </div>
        <p>
            {content}
        </p>
        <ul>
           {
           tags.map((tag, i) => { 
            return <li key={i}>{tag}</li>
           }) 
        } 
        </ul>
        
        
    </div>
    </>
    )
   
}