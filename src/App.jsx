import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home/Home.jsx"
import Quiz from './components/Quiz/Quiz.jsx'

import './App.css'
import QuizRandomizer from './components/QuizRandomizer/QuizRandomizer.jsx'

function App() {
  
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question/:questionId" element={<QuizRandomizer />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
