import { useState } from "react"
import s from "./Quiz.module.css"
import { Link } from "react-router-dom"
import {RxCross1} from "react-icons/rx"
import QuizOptions from "../QuizOptions/QuizOptions"

const Quiz = ({questions})=>{
    const [score, setScore] = useState(0)

    const randomize = (array)=> {
        var i = array.length,
            j = 0,
            temp;
        while (i--) {
            j = Math.floor(Math.random() * (i+1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    console.log("CAMBIAN LAS PREGUNTAS?",questions)

    const[order, setOrder] = useState(0)
    const question = questions[order]

    const options = [question?question.option1 + "*":"", question?question.option2:"", question?question.option3:"", question?question.option4:""]
    const randomOptions = randomize(options?options:[])

    /* if(order>3){
        return(
        <div className={s.end_box}>
            {
            score>0?
            <h1 className={s.end_title}>¡Bien hecho, has conseguido {score} puntos por haber respondido {score/100} pregunta/s bien!</h1> :
            <h1 className={s.end_title}>¡Lo siento, no has conseguido puntos esta vez, vuelve a intentarlo!</h1>
            }
            <Link className={s.end_button} to="/">
                Volver al inicio
            </Link>
        </div>
        )
    }else{ */

    return(
        
        <div className={s.box}>

            {order>3?
            <div className={s.end_box}>
                <div className={s.end_container}>
                {score>0?
                    <h1 className={s.end_title}>¡Bien hecho, has conseguido {score} puntos por haber respondido {score/100} pregunta/s bien!</h1> :
                    <h1 className={s.end_title}>¡Lo siento, no has conseguido puntos esta vez, vuelve a intentarlo!</h1>
                }
                <Link className={s.end_button} to="/">
                    Volver al inicio
                </Link>
                </div>
            </div>:
            ""}
            
            <div className={s.header}>
                <Link onClick={()=>setOrder(4)} className={s.back_button} /* to="/" */>
                    <RxCross1 className={s.crossIcon}/>
                </Link>
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