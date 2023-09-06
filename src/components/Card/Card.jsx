import s from "./Card.module.css"
import { Link } from "react-router-dom"

const Card = ({srcImg, id, categoryName, questNum})=>{

    return(
        <Link to={`/question/${id}`}>
        <div className={s.box}>
            <div className={s.img_box}>
                <img className={s.img} alt="category" src={`https://quiz-7.com${srcImg}`} />
            </div>
            <div className={s.text_box}>
                <span className={s.title}>{categoryName}</span>
                <span className={s.quest_number}>{questNum} questions</span>
            </div>
        </div>
        </Link>
    )
}
export default Card