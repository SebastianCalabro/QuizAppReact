import s from "./Profile.module.css"
import { useEffect, useState } from "react"
import ProfPic from "../../assets/happy.png"
import CoinImg from "../../assets/coin.png"
import TrophyImg from "../../assets/trophy.png"

const Profile = ()=>{

    const [profile, setProfile] = useState([])

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch(`https://quiz-7.com/profile.json`)
    
            const data = await response.json()
            setProfile(data)
        }
        fetchProfile()
    }, [])
    return(
    <div className={s.res_container}>
        <div className={s.box}>
            <div className={s.title_box}>
                <h1 className={s.title}>Hi {profile.username}!</h1>
                <span className={s.productive_text}>Let’s make this day productive</span>
            </div>
            <div className={s.info}>
                <div className={s.pr_box}>
                    <img className={s.icons} alt="trophyimg" src={TrophyImg}/>
                    <div className={s.pr_info}>
                        <span>Ranking</span>
                        <span className={s.amount}>{profile.ranking}</span>
                    </div>
                </div>
                <div className={s.divider}></div>
                <div className={s.pr_box}>
                    <img className={s.icons} src={CoinImg} alt="pointsimg" />
                    <div className={s.pr_info}>
                        <span>Points</span>
                        <span className={s.amount}>{profile.points}</span>
                    </div>
                </div>
            </div>
            {//RESPONSIVE
                }
                
            <div className={s.img_box}>
                <img className={s.img} alt="profpic" src={ProfPic}/>
            </div>
        </div>
        <div className={s.res_info}>
        <div className={s.pr_box}>
            <img className={s.icons} alt="trophyimg" src={TrophyImg}/>
            <div className={s.pr_info}>
                <span>Ranking</span>
                <span className={s.amount}>{profile.ranking}</span>
            </div>
        </div>
        <div className={s.divider}></div>
        <div className={s.pr_box}>
            <img className={s.icons} src={CoinImg} alt="pointsimg" />
            <div className={s.pr_info}>
                <span>Points</span>
                <span className={s.amount}>{profile.points}</span>
            </div>
        </div>
    </div>
</div>
    )
}
export default Profile