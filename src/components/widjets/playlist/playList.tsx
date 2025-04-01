import s from "./style.module.css"
import PlayListItem from "@/components/widjets/playlist/PlayListItem/playListItem.tsx"
import clock from "@assets/icons/other/images/clock.svg"


const PlayList = () => {
    return (
        <table>
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
                <PlayListItem />
                <PlayListItem />
                <PlayListItem />
            </tbody>
        </table>
    )
}


export default PlayList