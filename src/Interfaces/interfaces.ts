export interface IMusicData{
    id: number,
    title: string,
    artist: string,
    album: string
    year: number,
    genres: string[],
    duration: string,
    img: string,
    url: string
}

export interface IPlayList {
    id: number,
    title: string,
    authorList: string,
    img: string
}