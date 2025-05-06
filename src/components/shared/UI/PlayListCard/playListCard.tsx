import { IPlayList } from "@/Interfaces/interfaces"
import s from "./style.module.css"
import { Link } from "react-router-dom"

interface PlayListCardProps{
card: IPlayList
}

const PlayListCard = ({ card }:PlayListCardProps) => {
    return (
        <Link to={"/playlist/" + card.id}>
        <div className={s.card}>
            <img src={card.img} alt="" />
            <div className={s.card_title}>
                <h2>{card.title}</h2>
                <p>{card.authorList}</p>
            </div>
        </div>
        </Link>
    )
}

export { PlayListCard }