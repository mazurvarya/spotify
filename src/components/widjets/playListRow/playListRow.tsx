import { PlayListCard } from "@/components/shared/UI/PlayListCard/playListCard"
import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import s from "./style.module.css"
import { IPlayList } from "@/Interfaces/interfaces";

interface PlayListRowProps {
    id: number;
}

const PlayListRow = ({id}: PlayListRowProps) => {

    const [playList, setPlayList] = useState<IPlayList[]>([])

    const fetchPlayList = async () => {
        const res = await axios.get(`/api/playlist_api.json`)
        setPlayList(res.data)
    }

    useEffect(() => {
        fetchPlayList()
    }, [])

    return (
        <div className={s.list}>
            {playList.map((item) => {
                return <Fragment key={item.id}>
                    <PlayListCard card={item}/>
                </Fragment>
            })}
        </div>
    )
}

export { PlayListRow }