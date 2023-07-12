import { Artist, RecentlyPlayedTrack, Track } from "./types"

export const durationToSpotfyFormat = (duration: string) => {
    if(duration === '4 weeks') return 'short_term'
    if(duration === '6 months') return 'medium_term'
    if(duration === 'all time') return 'long_term'
    return 'short_term'
}

const msToMinutes = (ms: number) => {
    return Math.floor(ms / 60000)
}

export const get24HoursAgoUnix = () => {
  const currentTimestamp = Date.now();
  const twentyFourHoursAgo = currentTimestamp - 24 * 60 * 60 * 1000;
  const unixTimeSeconds = Math.floor(twentyFourHoursAgo / 1000);
  return unixTimeSeconds;
}

export const recentlyPlayedToStats = (recentlyPlayed: Array<RecentlyPlayedTrack>) => {
    let totalLength = 0
    let uniqueArtists = new Set()
    console.log(recentlyPlayed)
    for(const track of recentlyPlayed) {
        totalLength += track.track.duration_ms
        uniqueArtists.add(track.track.artists[0].name)
    }
    return {
        totalLength: msToMinutes(totalLength),
        uniqueArtists: uniqueArtists.size,
        totalTracks: recentlyPlayed.length
    }
}

export const topArtistsToTreemap = (artsits: Array<Artist>) => {
    console.log(artsits.length)
    let data = []
    for(const artist of artsits) {
        if(!artist.genres[0]) continue
        data.push({
            value: 1,
            genre: artist.genres[0],
        })
    }
    return data
}