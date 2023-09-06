import { useEffect, useState } from "react"
import s from "./Quiz.module.css"
import { useParams, Link } from "react-router-dom"
import {RxCross1} from "react-icons/rx"
import QuizOptions from "../QuizOptions/QuizOptions"

const Quiz = ()=>{
    const [questions, setQuestions] = useState([])
    let params = useParams()

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch(`https://quiz-7.com/questions/${params.questionId}.json`)
            const data = await response.json()
            setQuestions(data)
        }
        fetchQuestions()
    }, [])

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

    const randomQuestions = randomize(questions) 
    const question = randomQuestions[0]

    const options = [question?question.option1 + "*":"", question?question.option2:"", question?question.option3:"", question?question.option4:""]
    const randomOptions = randomize(options?options:[])
    console.log("opciones random en quiz",randomOptions)

    return(
        <div className={s.box}>
            <div className={s.header}>
                <Link className={s.back_button} to="/">
                    <RxCross1 className={s.crossIcon}/>
                </Link>
            </div>
            <div className={s.title_box}>
                <h1 className={s.title}>{question?question.question:""}</h1>
            </div>
            {<QuizOptions question={question} randomOptions={randomOptions}/>}
            
        </div>
    )
}
export default Quiz;