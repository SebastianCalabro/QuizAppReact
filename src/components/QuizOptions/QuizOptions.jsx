import s from "./QuizOptions.module.css"
import { useState } from "react"
import { AiOutlineCheck } from "react-icons/ai"
import {RxCross1} from "react-icons/rx"
const QuizOptions = ({score, setScore, randomOptions, order, setOrder})=>{

    const [selectedOption, setSelectedOption] = useState()

    const hanldeNext = ()=>{
        if(selectedOption.split("").includes("*")){
            setScore(score+100)
        }
        setOrder(order+1)
        setSelectedOption(false)
    }

        let correctOption = randomOptions.filter(op=>op.split("").includes("*")).join("")
    return(
        <div className={s.options_box}>
               {    
                    randomOptions.map((op, i)=>
                        <button key={i} disabled={selectedOption} className={selectedOption?op!==correctOption&&op===selectedOption?s.incorrect:op===correctOption&&selectedOption?s.correct:s.after_option:s.option} onClick={()=>setSelectedOption(op)}>
                            {op===correctOption?op.split("").slice(0, -1).join(""):op}
                            {selectedOption?op!==correctOption&&op===selectedOption?<div className={s.incorrect_circle}><RxCross1 className={s.icons}/></div>:op===correctOption&&selectedOption?<div className={s.correct_circle}><AiOutlineCheck className={s.icons}/></div>:<div className={s.circle}></div>:<div className={s.circle}></div>}
                            {/* <div className={s.correct_circle}><AiOutlineCheck/></div>
                            <div className={s.incorrect_circle}><RxCross1/></div> */}
                            
                        </button>
                    )}
                <button onClick={()=>hanldeNext()} className={selectedOption?s.next_button:s.non_exist}>Next</button>
            </div>
    )
}
export default QuizOptions;