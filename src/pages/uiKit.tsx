import IconClose from "@/assets/icons/MusicPlayer/iconClose";
import IconFullScreen from "@/assets/icons/MusicPlayer/iconFullScreen";
import IconNext from "@/assets/icons/MusicPlayer/iconNext";
import IconPause from "@/assets/icons/MusicPlayer/iconPause";
import IconPlay from "@/assets/icons/MusicPlayer/iconPlay";
import IconPrev from "@/assets/icons/MusicPlayer/iconPrev";
import IconQueue from "@/assets/icons/MusicPlayer/iconQueue";
import IconRandom from "@/assets/icons/MusicPlayer/iconRandom";
import IconRepeat from "@/assets/icons/MusicPlayer/iconRepeat";
import IconVolume from "@/assets/icons/MusicPlayer/iconVolume";
import { ButtonIcon } from "@/components/shared/UI/Buttons/buttons";
import Player from "@/components/widjets/player/player";
import PlayList from "@/components/widjets/playlist/playList.tsx";
import PlayListItem from "@/components/widjets/playlist/PlayListItem/playListItem.tsx";

export default function UiKit() {
    return (
        <div
            style={{
                background: "rgb(31, 31, 31)",
                display: "flex",
                gap: 20,
                padding: 20,
                alignItems: "center",
                flexWrap: "wrap",
            }}>
            <IconClose />
            <IconFullScreen />
            <IconNext />
            <IconPause />
            <IconPlay />
            <IconPrev />
            <IconQueue />
            <IconRandom />
            <IconRandom />
            <IconRepeat />
            <IconVolume />
            <ButtonIcon icon={<IconPlay />} />
            <Player />
            <PlayList />
        </div>
    )
}