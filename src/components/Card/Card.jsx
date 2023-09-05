import s from "./Card.module.css"

const Card = ({srcImg, categoryName, questNum})=>{
    /*
    useEffect(() => {
        fetch('https://quiz-7.com/media/basketball.png')
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }, []) */
    console.log("EN CARD", srcImg)

    return(

        <div className={s.box}>
            <div className={s.img_box}>
                <img className={s.img} alt="category" src={`https://quiz-7.com${srcImg}`} />
            </div>
            <div className={s.text_box}>
                <span className={s.title}>{categoryName}</span>
                <span className={s.quest_number}>{questNum} questions</span>
            </div>
            
        </div>
    )
}
export default Card