import PlayList from "@/components/widjets/playlist/playList";
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const SinglePlayListPage = () => {
    const [musicList, setMusicList] = useState([])

    const {playlistId} = useParams()
    console.log(playlistId);
    


    const getMusicList = async () => {
        axios
        .get("/api/music_api.json")
        .then((Response)=>{
            setMusicList(Response.data)
        })
        .catch(error => {
            console.error("Ошибка получение данных", error)
        })
    }

    useEffect(() =>{
        getMusicList()
    }, [])

    return (
        <main>
            <h1>Single PlayList</h1>

            <PlayList musicList={musicList} />
        </main>
    )
}
export { SinglePlayListPage }