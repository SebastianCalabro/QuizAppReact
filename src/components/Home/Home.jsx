import s from "./Home.module.css"
import Cards from "../Cards/Cards.jsx"
import Profile from "../Profile/Profile"

const Home = ()=>{

    /* const [questions, setQuestions] = useState([]) */

    /* useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch(`https://quiz-7.com/categories.json`)
            const data = await response.json()
            setQuestions(data)
        }
        fetchQuestions()
    }, [])
    console.log(questions) */

    return(
        <div className={s.box}>
            <Profile/>
            <Cards/>
        </div>
    )
}
export default Home;

