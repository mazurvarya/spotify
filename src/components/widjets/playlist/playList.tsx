import s from "./style.module.css"
import PlayListItem from "@/components/widjets/playlist/PlayListItem/playListItem.tsx"
import { IMusicData } from "@/Interfaces/interfaces"
import clock from "@assets/icons/other/images/clock.svg"

import { Fragment } from "react"

interface PlayListProps {
    musicList: IMusicData[]
}

const PlayList = ({ musicList }: PlayListProps) => {
    return (
        <table className={s.table}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>TITLE</th>
                    <th>ALBUM</th>
                    <th>DATE ADDED</th>
                    <th>
                        <img src={clock} alt="" />
                    </th>
                </tr>
            </thead>
            <tbody>
                {musicList.length !== 0 &&
                    musicList.map((item, i)=>{
                        return (
                            <Fragment key={i}>
                                <PlayListItem index={i + 1} item={item}/>
                            </Fragment>
                        )
                    })
                }
            </tbody>
        </table>
    )
}


export default PlayList