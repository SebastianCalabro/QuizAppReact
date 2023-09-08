import { describe, test, expect, beforeEach } from "vitest";
import Quiz from "../Quiz/Quiz.jsx"
import QuizOptions from "./QuizOptions.jsx";
import {fireEvent, render, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";

describe('QuizOptions component', ()=>{

    beforeEach(()=>{
        render(
            <BrowserRouter>
            <Quiz questions={[
                {
                    question:"q1",
                    option1:"op1",
                    option2:"op2",
                    option3:"op3",
                    option4:"op4"
                },{
                    question:"q2",
                    option1:"op1",
                    option2:"op2",
                    option3:"op3",
                    option4:"op4"
                },{
                    question:"q3",
                    option1:"op1",
                    option2:"op2",
                    option3:"op3",
                    option4:"op4"
                },{
                    question:"q4",
                    option1:"op1",
                    option2:"op2",
                    option3:"op3",
                    option4:"op4"
                }
                ]}/>
                <QuizOptions randomOptions={["op1","op2","op3","op4"]}/>
            </BrowserRouter>
        )
    })

    test('should render the options', ()=>{

        const options = screen.queryAllByText(/op/i)
        expect(options).toBeDefined()
    })
})