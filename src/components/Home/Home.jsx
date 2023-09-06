import s from "./Home.module.css"
import Cards from "../Cards/Cards.jsx"
import Profile from "../Profile/Profile"

const Home = ()=>{

    return(
        <div className={s.box}>
            <Profile/>
            <h2 className={s.play_title}>Let's play</h2>
            <Cards/>
        </div>
    )
}
export default Home;

