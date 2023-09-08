import { describe, test, expect, beforeEach } from "vitest";
import Profile from "./Profile"
import {render, screen} from "@testing-library/react"

describe('Profile component', ()=>{

    beforeEach(()=>{
        render(
            <Profile/>
        )
    })

    test('should render the title', ()=>{

        const points = screen.getAllByText(/hi/i)
        expect(points[0]).toBeDefined()
    })

    test('should render the profile picture', ()=>{

        const profilePicture = screen.getAllByAltText(/profpic/i)
        expect(profilePicture[0]).toBeDefined()
    })
})