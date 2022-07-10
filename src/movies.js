const movies = [
    {
        id: '1',
        title: 'Oceans 8',
        category: 'Comedy',
        likes: 4,
        dislikes: 1,
        img: 'https://m.media-amazon.com/images/I/711VQcNMkvL._AC_SL1500_.jpg'
    }, {
        id: '2',
        title: 'Midnight Sun',
        category: 'Comedy',
        likes: 2,
        dislikes: 0,
        img: 'https://images-na.ssl-images-amazon.com/images/I/71-J6giZEQL.jpg'
    }, {
        id: '3',
        title: 'Les indestructibles 2',
        category: 'Animation',
        likes: 3,
        dislikes: 1,
        img: 'https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg'
    }, {
        id: '4',
        title: 'Sans un bruit',
        category: 'Thriller',
        likes: 6,
        dislikes: 6,
        img: 'https://fr.web.img3.acsta.net/pictures/18/03/22/16/48/2454348.jpg'
    }, {
        id: '5',
        title: 'Creed II',
        category: 'Drame',
        likes: 16,
        dislikes: 2,
        img: 'https://fr.web.img5.acsta.net/pictures/18/11/27/14/25/1451897.jpg'
    }, {
        id: '6',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 11,
        dislikes: 3
    }, {
        id: '7',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 12333,
        dislikes: 32,
        img: 'https://fr.web.img4.acsta.net/medias/nmedia/18/36/02/52/18846059.jpg'
    }, {
        id: '8',
        title: 'Seven',
        category: 'Thriller',
        likes: 2,
        dislikes: 1,
        img: 'https://www.bepolar.fr/IMG/arton12055.jpg'
    }, {
        id: '9',
        title: 'Inception',
        category: 'Thriller',
        likes: 2,
        dislikes: 1,
        img: 'https://m.media-amazon.com/images/I/51TfUWh5N9L._AC_SY445_.jpg'
    }, {
        id: '10',
        title: 'Gone Girl',
        category: 'Thriller',
        likes: 22,
        dislikes: 12,
        img : 'https://m.media-amazon.com/images/I/91Q+5Djmk4L._AC_SL1500_.jpg'
    },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))