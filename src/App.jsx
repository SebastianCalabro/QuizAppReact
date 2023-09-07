import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home/Home.jsx"
import QuizRandomizer from './components/QuizRandomizer/QuizRandomizer.jsx'
import './App.css'

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
