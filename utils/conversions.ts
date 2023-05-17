import { Track } from "./types"

export const durationToSpotfyFormat = (duration: string) => {
    if(duration === '4 weeks') return 'short_term'
    if(duration === '6 months') return 'medium_term'
    if(duration === 'all time') return 'long_term'
    return 'short_term'
}

const msToMinutes = (ms: number) => {
    return Math.floor(ms / 60000)
}

export const recentlyPlayedToStats = (recentlyPlayed: Array<{ track: Track }>) => {
    let totalLength = 0
    let uniqueArtists = new Set()
    console.log(recentlyPlayed)
    for(const track of recentlyPlayed) {
        totalLength += track.track.duration_ms
        for(const artist of track.track.artists) {
            uniqueArtists.add(artist.name)
        }
    }
    return {
        totalLength: msToMinutes(totalLength),
        uniqueArtists: uniqueArtists.size,
        totalTracks: recentlyPlayed.length
    }
}