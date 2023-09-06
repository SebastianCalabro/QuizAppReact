import { useEffect, useState } from "react"
import s from "./QuizRandomizer.module.css"
import { useParams} from "react-router-dom"
import Quiz from "../Quiz/Quiz"

const QuizRandomizer = ()=>{
    let params = useParams()
    const [questions, setQuestions] = useState([])
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
    useEffect(() => {
        

        const fetchQuestions = async () => {
            const response = await fetch(`https://quiz-7.com/questions/${params.questionId}.json`)
            const data = await response.json()
            setQuestions(randomize(data))
        }
        fetchQuestions()
    }, [])

    return(
        <div className={s.box}>
            <Quiz questions={questions} />
            
        </div>
    )
}
export default QuizRandomizer;