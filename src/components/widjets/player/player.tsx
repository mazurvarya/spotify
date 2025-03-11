import { ButtonIcon } from "@/components/shared/UI/Buttons/buttons"
import s from "./style.module.css"
import IconRandom from "@/assets/icons/MusicPlayer/iconRandom"
import IconPrev from "@/assets/icons/MusicPlayer/iconPrev"
import IconPlay from "@/assets/icons/MusicPlayer/iconPlay"
import IconNext from "@/assets/icons/MusicPlayer/iconNext"
import IconRepeat from "@/assets/icons/MusicPlayer/iconRepeat"
import IconArrowHide from "@/assets/icons/MusicPlayer/iconArrowHide"
import IconQueue from "@/assets/icons/MusicPlayer/iconQueue"
import IconVolume from "@/assets/icons/MusicPlayer/iconVolume"
import IconFullScreen from "@/assets/icons/MusicPlayer/iconFullScreen"
import IconHeart from "@/assets/icons/MusicPlayer/iconHeart"

import preview from "@assets/icons/other/images/previewPlayer.png"
import { useEffect, useRef, useState } from "react"
import axios from "axios"

interface IMusicData{
    id: number,
    title: string,
    artist: string,
    album: string,
    duration: number,
    genres: string[],
    image: string,
    url: string
}


export default function Player(){

    const[isPreviewOpen, setIsPreviewOpen] = useState(false)

    const [musicData, setMusicData] = useState<IMusicData | null>(null)
    
    const musicRef = useRef<HTMLAudioElement>(null)


    const getMusicData = async () => {
        axios.get("./api/music_api.json")
        .then((response) =>{
            console.log(response.data);
            setMusicData(response.data[0])
        })
        .catch((error) => {
            console.error("ошибка получения", error);
        })
        .finally(() => {
            console.log("сработает в любом случае");
            
        })
    }

    const handlePlay = () =>{
        if (!musicRef.current) return;
        musicRef.current.play()
    }



    useEffect(() => {
        getMusicData()
    }, [])


            const handleChangePreview = (bool: boolean) => {
                setIsPreviewOpen(bool)
            }

    return <div className={s.player_wrapper}>
        {isPreviewOpen && (
        <div className={s.preview_wrapper}>
            <img src={musicData?.image} alt="" />
            <ButtonIcon handleClick={() => handleChangePreview(false)} icon={<IconArrowHide />} />
        </div>
        )}
        <section className={s.left}>
            {!isPreviewOpen && <img onClick={() => handleChangePreview(true)} src={preview} alt="" />}
            <div>
                <h3>{musicData?.title}</h3>
                <h4>{musicData?.artist}</h4>
            </div>
            <ButtonIcon icon={<IconHeart />} />
        </section>
        <section className={s.center}>
            <div className={s.center_top}>
                <ButtonIcon icon={<IconRandom />} />
                <ButtonIcon icon={<IconPrev />} />
                <ButtonIcon handleClick={handlePlay} icon={<IconPlay />} />
                <ButtonIcon icon={<IconNext />} />
                <ButtonIcon icon={<IconRepeat />} />
            </div>
            <div className={s.center_bottom}>
                <p>2:34</p>
                <div className={s.progress_bar}>
                    <div className={s.progress}></div>
                </div>
                <p>{musicData?.duration}</p>
            </div>
        </section>
        <section className={s.right}>
            <ButtonIcon icon={<IconQueue />} />
            <ButtonIcon icon={<IconVolume />} />
            <ButtonIcon icon={<IconFullScreen />} />
        </section>
        <audio ref={musicRef} src={musicData?.url}></audio>
    </div>
}