export const durationToSpotfyFormat = (duration: string) => {
    if(duration === '4 weeks') return 'short_term'
    if(duration === '6 months') return 'medium_term'
    if(duration === 'all time') return 'long_term'
    return 'short_term'
}