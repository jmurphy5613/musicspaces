export interface TopArtist {
    href: string,
    name: string,
    images: Array<{
        url: string,
        height: number,
        width: number
    }>
}