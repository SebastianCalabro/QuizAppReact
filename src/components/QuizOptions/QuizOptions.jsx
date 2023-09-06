import s from "./QuizOptions.module.css"
import { useState } from "react"
const QuizOptions = ({randomOptions})=>{

    const [selectedOption, setSelectedOption] = useState()

    const handle = (optionPicked)=>{
        if(optionPicked.split("").includes("*")){
            setSelectedOption(optionPicked)
        console.logc
        }else{
            setSelectedOption(optionPicked)
        console.log("opciooon",optionPicked)
        }
        
    }

        let correctOption = randomOptions.filter(op=>op.split("").includes("*")).join("")
        /* for (let i = 0; i < randomOptions.length; i++) {
            let opArr = randomOptions[i].split("")
            if(opArr.includes("*")){
                correctOption = opArr.join("")
            }  
        } */
        /* randomOptions.slice(0,5)
        console.log(randomOptions.length) */
        console.log(randomOptions)
    return(
        <div className={s.options_box}>
               {    
                    randomOptions.map((op, i)=>
                        <button key={i} disabled={selectedOption} className={selectedOption===op?op===correctOption?s.correct:s.incorrect:s.option} onClick={()=>handle(op)}>
                            {op===correctOption?op.split("").slice(0, -1).join(""):op}
                            <div className={s.circle}></div>
                        </button>
                    )}
                <button className={selectedOption?s.next_button:s.non_exist}>Next</button>
            </div>
    )
}
export default QuizOptions;