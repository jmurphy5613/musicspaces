import { type } from "os"

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
        image: '/cover-icons/kanye-pfp.jpeg',
    },
    {
        name: 'Peach Pit',
        image: '/cover-icons/peachpit-pfp.jpeg',
    },
    {
        name: 'Joji',
        image: '/cover-icons/joji-pfp.jpeg',
    },
    {
        name: 'Aries',
        image: '/cover-icons/aries-pfp.jpg',
    },
    {
        name: 'AJR',
        image: '/cover-icons/ajr-pfp.jpeg',
    },
    {
        name: 'khai dreams',
        image: '/cover-icons/khaidreams-pfp.jpeg',
    },
    {
        name: 'Eyedress',
        image: '/cover-icons/eyedress-pfp.jpeg',
    },
    {
        name: 'Wallows',
        image: '/cover-icons/wallows-pfp.jpeg',
    },
    {
        name: 'Logic',
        image: '/cover-icons/logic-pfp.jpeg',
    },
    {
        name: 'Dayglow',
        image: '/cover-icons/dayglow-pfp.jpeg',
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

export const duplicatedUserItems: UserItem[] = userItem.flatMap((obj: UserItem) => {
    const duplicatedObjs = [];
    for (let i = 0; i < 10; i++) {
      duplicatedObjs.push({...obj});
    }
    return duplicatedObjs;
});