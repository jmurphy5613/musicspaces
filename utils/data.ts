import { type } from "os"
import { UserCredentials } from "./types"

export const topSongs = [
    {
        name: 'Sandals',
        artist: 'khai dreams',
        image: '/cover-icons/sandals.png'
    },
    {
        name: 'Graveyard Blues',
        artist: 'MyKey',
        image: '/cover-icons/graveyard-blues.jpg'
    },
    {
        name: 'Seventeen',
        artist: 'Peach Pit',
        image: '/cover-icons/seventeen.jpg'
    },
    {
        name: 'Best Tears',
        artist: 'Happy Fits',
        image: '/cover-icons/best-tears.jpeg'
    },
    {
        name: 'Sandals',
        artist: 'khai dreams',
        image: '/cover-icons/sandals.png'
    },
    {
        name: 'Graveyard Blues',
        artist: 'MyKey',
        image: '/cover-icons/graveyard-blues.jpg'
    },
    {
        name: 'Seventeen',
        artist: 'Peach Pit',
        image: '/cover-icons/seventeen.jpg'
    },
    {
        name: 'Best Tears',
        artist: 'Happy Fits',
        image: '/cover-icons/best-tears.jpeg'
    },
    {
        name: 'Seventeen',
        artist: 'Peach Pit',
        image: '/cover-icons/seventeen.jpg'
    },
    {
        name: 'Best Tears',
        artist: 'Happy Fits',
        image: '/cover-icons/best-tears.jpeg'
    }

]

export const topArtists = [
    {
        name: 'Kanye West',
        image: '/artist-pfp/kanye-pfp.jpeg',
    },
    {
        name: 'Peach Pit',
        image: '/artist-pfp/peachpit-pfp.jpeg',
    },
    {
        name: 'Joji',
        image: '/artist-pfp/joji-pfp.jpeg',
    },
    {
        name: 'Aries',
        image: '/artist-pfp/aries-pfp.jpeg',
    },
    {
        name: 'AJR',
        image: '/artist-pfp/ajr-pfp.jpeg',
    },
    {
        name: 'khai dreams',
        image: '/artist-pfp/kahidreams-pfp.jpeg',
    },
    {
        name: 'Eyedress',
        image: '/artist-pfp/eyedress-pfp.jpeg',
    },
    {
        name: 'Wallows',
        image: '/artist-pfp/wallows-pfp.jpeg',
    },
    {
        name: 'Logic',
        image: '/artist-pfp/logic-pfp.jpeg',
    },
    {
        name: 'Dayglow',
        image: '/artist-pfp/dayglow-pfp.jpeg',
    }
]


type UserItem = {
    username: string,
    image: string
}

export const userItem: UserItem[] = [
    {
        username: 'asa',
        image: '/pfps/demo-pfp.jpeg'
    },
    {
        username: 'Cpfist',
        image: '/pfps/demo-pfp2.jpeg'
    },
]

export const duplicatedUserItems = (users: UserCredentials[]) => {
    let duplicatedUsers: UserCredentials[] = []
    for (let i = 0; i < 10; i++) {
        duplicatedUsers = duplicatedUsers.concat(users)
    }
    return duplicatedUsers
}

