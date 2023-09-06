import s from "./Cards.module.css"
import { useEffect } from "react";
import Card from "../Card/Card.jsx";
import { useState } from "react";

const Cards = ()=>{
    const [categories, setCategories] = useState([])
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch(`https://quiz-7.com/categories.json`)
    
            const data = await response.json()
            setCategories(data)
        }
        fetchCategories()
        /* const fetchQuestions = async () => {
            const response = await fetch(`https://quiz-7.com/questions/${categories}.json`)
            const data = await response.json()
            setQuestions(data)
        }
        fetchQuestions() */
    }, [])

    return(
        <div className={s.box}>
            {
            categories.length>0 ?
            categories.map(cat=>
                    <Card key={cat.id} id={cat.id} srcImg={cat.icon} categoryName={cat.title} questNum={cat.questions} />
            ) :
            ""
            }
        </div>
    )
}
export default Cards;