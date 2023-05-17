export interface Artist {
    href: string,
    name: string,
    images: Array<{
        url: string,
        height: number,
        width: number
    }>
}

export interface Track {
    album: {
        images: Array<{
            url: string,
            height: number,
            width: number
        }>
    },
    artists: Array<{
        name: string
    }>,
    name: string,
    duration_ms: number
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

export interface RecentlyPlayedStats {
    totalLength: number,
    uniqueArtists: number,
    totalTracks: number
}
