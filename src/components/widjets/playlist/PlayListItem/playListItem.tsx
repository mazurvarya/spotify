import s from "./style.module.css"
import { ButtonIcon } from "@/components/shared/UI/Buttons/buttons.tsx"
import IconHeart from "@/assets/icons/MusicPlayer/iconHeart.tsx"
import IconPlay from "@/assets/icons/MusicPlayer/iconPlay.tsx"

const PlayListItem = () => {
        return (
            <tr className={s.wrapper}>
                <td className={s.number_wrapper}>
                    <p className={s.number}>1</p>
                    <ButtonIcon icon={<IconPlay/>}/>
                </td>
                <td>
                   <div className={s.info}> 
                    <img src="" className={s.preview} alt="" />

                    <div className={s.name_wrapper}>
                        <div className={s.title}>Song Name</div>
                        <div className={s.author}>Artist Name</div>
                    </div>
                   </div>
                </td>
                <td>
                    <p className={s.album}></p>
                </td>
                <td>2017</td>
                <td>
                    <div className={s.duration}> 
                        <ButtonIcon icon={<IconHeart />} />
                        <p>2:17</p>
                    </div>
                </td>
            </tr>
        )
    }

export default PlayListItem