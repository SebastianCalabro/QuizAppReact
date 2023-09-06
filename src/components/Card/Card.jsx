import s from "./Card.module.css"
import { Link } from "react-router-dom"

const Card = ({srcImg, id, categoryName, questNum})=>{

    return(
        <Link className={s.link} to={`/question/${id}`}>
        <div className={s.box}>
            <div className={s.img_box}>
            <svg className={s.shadow} xmlns="http://www.w3.org/2000/svg" width="125" height="52" viewBox="0 0 125 52" fill="none">
                    <g filter="url(#filter0_f_0_25)">
                        <ellipse cx="62.5" cy="26" rx="40.5" ry="4" fill="#1C1C1C" fill-opacity="0.767068"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_0_25" x="0.253746" y="0.253746" width="124.493" height="51.4925" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="10.8731" result="effect1_foregroundBlur_0_25"/>
                        </filter>
                    </defs>
                </svg>
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