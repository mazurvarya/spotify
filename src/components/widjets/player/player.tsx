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
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react"
import axios from "axios"
import { log } from "console"
import { formatTime } from "@/components/shared/utils/formatTime"
import IconPause from "@/assets/icons/MusicPlayer/iconPause"
import IconMute from "@/assets/icons/MusicPlayer/iconMute"
import { IMusicData } from "@/Interfaces/interfaces"
import PLayerStore from "@/stores/PLayerStore"
import { observer } from "mobx-react-lite"




 function Player(){

    const {currentMusic: musicData} = PLayerStore

    const[isPreviewOpen, setIsPreviewOpen] = useState(false)

    // const [musicData, setMusicData] = useState<IMusicData | null>(null)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const [volume, setVolume] = useState(1)
    const [isMute, setIsMute] = useState(false)

    const musicRef = useRef<HTMLAudioElement>(null)

    const [isPlaying, setIsPlaying] = useState(false)



    // const getMusicData = async () => {
    //     axios.get("./api/music_api.json")
    //     .then((response) =>{
    //         console.log(response.data);
    //         setMusicData(response.data[0])
    //     })
    //     .catch((error) => {
    //         console.error("ошибка получения", error);
    //     })
    //     .finally(() => {
    //         console.log("сработает в любом случае");
            
    //     })
    // }

    const handlePlay = () =>{
        if (!musicRef.current) return;
        if (isPlaying) {
            musicRef.current.pause()
            setIsPlaying(() => false) 
        } else {
            musicRef.current.play()
            setIsPlaying(() => true)
        }
        console.log(musicRef);
        
    }





    // useEffect(() => {
    //     getMusicData()
    // }, [])

    useEffect(() => {
        const audio = musicRef.current
        if (audio) {
            audio.addEventListener("timeupdate", () =>{
                setCurrentTime(audio.currentTime)
            })
            audio.addEventListener("loadedmetadata", () => {})
             setDuration(audio.duration)
        }
        return () => {
            if (audio) {
                audio.removeEventListener("timeupdate", () =>{})
                audio.removeEventListener("loadedmetadata", () => {})
            }
        }
            }, [])


            const handleChangePreview = (bool: boolean) => {
                setIsPreviewOpen(bool)
            }

        const onSeek = (event:MouseEvent<HTMLDivElement>)=>{
            const audio = musicRef.current
            if (audio) {
                const timelineWidth = event.currentTarget.offsetWidth;
                const clickPosition = event.nativeEvent.offsetX;
                const seekTime = (clickPosition / timelineWidth) * audio.
                duration;
                audio.currentTime = seekTime
            }
        }

        const handleVolumeChange = (event:ChangeEvent<HTMLInputElement>) => {
            const audio = musicRef.current
            if (!audio || !event.currentTarget) return
                audio.volume = Number(event.currentTarget.value)
        }

        const HandleChangeMute = () => {
            const audio = musicRef.current;
            if (!audio) return;

            setIsMute((PrevState) => !PrevState);
            audio.muted = !audio.muted;

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
                <ButtonIcon handleClick={handlePlay} icon={ isPlaying ? <IconPause /> : <IconPlay />} />
                <ButtonIcon icon={<IconNext />} />
                <ButtonIcon icon={<IconRepeat />} />
            </div>
            <div className={s.center_bottom}>
                <p>{formatTime(currentTime)}</p>
                <div onClick={onSeek} className={s.progress_bar}>
     
                        <div style={{width: (currentTime / duration) * 100 + "%"}}
                        className={s.progress}></div>
                 
                </div>
                <p>{formatTime(duration)}</p>
            </div>
        </section>
        <section className={s.right}>
            <ButtonIcon icon={<IconQueue />} />
            

            <div className={s.volume_wrapper}>
            <ButtonIcon handleClick={HandleChangeMute} icon={isMute ? <IconMute/> : <IconVolume />} />
            <input className={s.volume} onInput={handleVolumeChange} type="range" min={0} max={1} step={0.1}></input>
    </div>
            <ButtonIcon icon={<IconFullScreen />} />
        </section>
        <audio ref={musicRef} src={musicData?.url}></audio>
    </div>
}
export default observer (Player)