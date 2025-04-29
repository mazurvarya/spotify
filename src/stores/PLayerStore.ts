import { IMusicData } from "@/Interfaces/interfaces"
import axios from "axios"

class PlayerStore {
    currentMusic: IMusicData = {} as IMusicData

    setCurrentMusic(music: IMusicData) {
        this.currentMusic = music
    }

    async fetchMusicById(id: number){
        const res = await axios.get(`/api/music_api.json`)
        
        
        const music = res.data.find((music: IMusicData) => music.id === id)
        console.log(res.data, music, id);
        if (music) {
            this.setCurrentMusic(music)
        } else {
            console.error(`Music with id ${id} not found`)
        }
    }
}

export default new PlayerStore()