import { RecentlyPlayed } from "./types"

export const durationToSpotfyFormat = (duration: string) => {
    if(duration === '4 weeks') return 'short_term'
    if(duration === '6 months') return 'medium_term'
    if(duration === 'all time') return 'long_term'
    return 'short_term'
}

const msToMinutes = (ms: number) => {
    return Math.floor(ms / 60000)
}

export const recentlyPlayedToStats = (recentlyPlayed: RecentlyPlayed) => {
    let totalLength = 0
    let uniqueArtists = new Set()
    for(const track of recentlyPlayed.items) {
        totalLength += track.track.duration_ms
        for(const artist of track.track.artists) {
            uniqueArtists.add(artist.name)
        }
    }
    return {
        totalLength: msToMinutes(totalLength),
        uniqueArtists: uniqueArtists.size,
        totalTracks: recentlyPlayed.items.length
    }
}