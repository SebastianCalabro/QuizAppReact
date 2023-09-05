import s from "./Home.module.css"
import Cards from "../Cards/Cards.jsx"
import Profile from "../Profile/Profile"
const Home = ()=>{
    return(
        <div className={s.box}>
            <Profile/>
            <Cards/>
        </div>
    )
}
export default Home;

