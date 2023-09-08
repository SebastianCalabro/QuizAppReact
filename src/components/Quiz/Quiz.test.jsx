import { describe, test, expect, beforeEach } from "vitest";
import Quiz from "./Quiz.jsx"
import {fireEvent, render, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";

describe('Quiz component', ()=>{

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
            </BrowserRouter>
        )
    })

    test('should render the question', ()=>{

        const question = screen.getAllByText(/q/i)
        expect(question[0].textContent).toBe("q1")
    })
})