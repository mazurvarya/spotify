import s from "./style.module.css"
import { ButtonIcon } from "@/components/shared/UI/Buttons/buttons.tsx"
import IconHeart from "@/assets/icons/MusicPlayer/iconHeart.tsx"
import IconPlay from "@/assets/icons/MusicPlayer/iconPlay.tsx"

type IPlayListItem = {
    id: number,
    title: string,
    artist: string,
    album: string
    year: number,
    genres: string[],
    duration: string,
    image: string,
    url: string
}

interface PlayListItemProps {
item: IPlayListItem
index: number;
}

const PlayListItem = ({item, index}:PlayListItemProps) => {
        return (
            <tr className={s.wrapper}>
                <td>
                    <div className={s.number_wrapper}>
                        <p className={s.number}>{index}</p>
                        <ButtonIcon icon={<IconPlay/>}/>
                    </div>
                </td>
                <td>
                   <div className={s.info}> 
                    <img src="" className={s.preview} alt="" />
                    <div className={s.name_wrapper}>
                        <div className={s.title}>{item.title}</div>
                        <div className={s.author}>{item.artist}</div>
                    </div>
                   </div>
                </td>
                <td>
                    <p className={s.album}>{item.album}</p>
                </td>
                <td>{item.year}</td>
                <td>
                    <div className={s.duration}>{item.duration}
                        <ButtonIcon icon={<IconHeart />} />
                        <p></p>
                    </div>
                </td>
            </tr>
        )
    }

export default PlayListItem