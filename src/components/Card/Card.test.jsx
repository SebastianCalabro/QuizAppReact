import { describe, test, expect, beforeEach } from "vitest";
import Card from "./Card"
import {fireEvent, render, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";

describe('Card component', ()=>{

    beforeEach(()=>{
        render(
            <BrowserRouter>
            <Card categoryName={"testname"} questNum={50} id={1}/>
            </BrowserRouter>
        )
    })

    test('debe renderizar el componente', ()=>{

        const card = screen.getAllByRole("link")
        expect(card[0]).toBeDefined()
    })

    test('debe renderizar el nombre de la categoría', ()=>{

        const catName = screen.getAllByText(/testname/i)
        expect(catName[0].textContent).toBe("testname")
    })
})