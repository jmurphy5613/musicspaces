export interface TopArtist {
    href: string,
    name: string,
    images: Array<{
        url: string,
        height: number,
        width: number
    }>
}

export interface UserInfo {
    display_name: string,
    followers: {
        href: string,
        total: number
    },
    images: Array<{
        url: string,
        height: number,
        width: number
    }>,
    id: string
}