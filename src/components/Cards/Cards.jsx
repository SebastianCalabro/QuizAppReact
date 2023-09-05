import s from "./Cards.module.css"
import { useEffect } from "react";
import Card from "../Card/Card.jsx";
import { useState } from "react";

const Cards = ()=>{
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch(`https://quiz-7.com/categories.json`)
    
            const data = await response.json()
            setCategories(data)
        }
        fetchCategories()
    }, [])

    console.log(categories)
    return(
        <div className={s.box}>
            {categories.length>0?categories.map(e=><Card key={e.id} srcImg={e.icon} categoryName={e.title} questNum={e.questions} />):""}
        </div>
    )
}
export default Cards;