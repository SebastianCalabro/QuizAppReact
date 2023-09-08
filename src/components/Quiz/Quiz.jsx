import { useState } from "react"
import s from "./Quiz.module.css"
import { Link } from "react-router-dom"
import {RxCross1} from "react-icons/rx"
import QuizOptions from "../QuizOptions/QuizOptions"
import { randomize } from "../../utils/utils"

const Quiz = ({questions})=>{
    const [score, setScore] = useState(0)
    const[order, setOrder] = useState(0)
    const [open, setOpen] = useState(false)

    const question = questions[order]

    const options = [question?question.option1 + "*":"", question?question.option2:"", question?question.option3:"", question?question.option4:""]
    const randomOptions = randomize(options?options:[])

    return(
        
        <div className={s.box}>

            {order>3 || open ?
            <div className={s.end_box}>
                <div className={s.end_container}>
                {score>0?
                    <h1 className={s.end_title}>¡Has obtenido {score} puntos por haber respondido {score/100} pregunta/s bien!</h1> :
                    order<3?
                    <h1 className={s.end_title}>¡No has conseguido puntos aún!</h1>:
                    <h1 className={s.end_title}>¡No has conseguido puntos, vuelve a intentarlo!</h1>
                }
                <Link className={s.end_button} to="/">
                    Volver al inicio
                </Link>
                </div>
            </div>:
            ""}
            
            <div className={s.header}>
                { order<4 && 
                    <Link onClick={()=>setOpen(!open)} className={s.back_button} /* to="/" */>
                    <RxCross1 className={s.crossIcon}/>
                </Link>
                }
                <div className={s.counter_box}>
                    <div className={s.counter}>
                        <div className={order===0?s.counter_bar0:order===1?s.counter_bar1:order===2?s.counter_bar2:order===3?s.counter_bar3:""}>
                        </div>
                    </div>
                    <span className={s.counter_text}>{`${order>3?0:order+1}/4`}</span>
                </div>
                
            </div>
            <div className={s.qa_section}>
                <div className={s.title_box}>
                    <h1 className={s.title}>{question?question.question:""}</h1>
                </div>
                {<QuizOptions score={score} setScore={setScore} randomOptions={randomOptions} order={order} setOrder={setOrder}/>}
            </div>
        </div>
    )
        }
/* } */
export default Quiz;