import s from "./style.module.css"
import { ButtonIcon } from "@/components/shared/UI/Buttons/buttons.tsx"
import IconHeart from "@/assets/icons/MusicPlayer/iconHeart.tsx"
import IconPlay from "@/assets/icons/MusicPlayer/iconPlay.tsx"
import { IMusicData } from "@/Interfaces/interfaces"
import PLayerStore from "@/stores/PLayerStore"
import { observer } from "mobx-react-lite"
import Player from "../../player/player"


interface PlayListItemProps {
item: IMusicData;
index: number;
}

const PlayListItem = ({item, index}:PlayListItemProps) => {

    const handlePlay = () => {
        PLayerStore.fetchMusicById(item.id)
    }
        return (
            <tr className={s.wrapper}>
                <td>
                    <div className={s.number_wrapper}>
                        <p className={s.number}>{index}</p>

                        <ButtonIcon handleClick={handlePlay} icon={<IconPlay/>}/>
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

export default observer(PlayListItem)