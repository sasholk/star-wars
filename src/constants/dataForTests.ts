import { Gender } from '@/types/Gender'

export const BobaFett = {
  id: 22,
  name: 'Boba Fett',
  height: '183',
  mass: '78.2',
  hair_color: 'black',
  skin_color: 'fair',
  eye_color: 'brown',
  birth_year: '31.5BBY',
  gender: 'male' as Gender,
  homeworld: 10,
  films: [2, 3, 5],
  species: [1],
  vehicles: [],
  starships: [21],
  created: '2014-12-15T12:49:32.457000Z',
  edited: '2014-12-20T21:17:50.349000Z',
  url: 'https://sw-api.starnavi.io/people/22/'
}

export const BobaFilms = [
  {
    id: 5,
    title: 'Attack of the Clones',
    episode_id: 2,
    opening_crawl:
      'There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....',
    director: 'George Lucas',
    producer: 'Rick McCallum',
    release_date: '2002-05-16',
    characters: [
      10, 20, 21, 22, 33, 35, 36, 40, 43, 46, 2, 3, 6, 7, 11, 51, 52, 53, 58,
      59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
      77, 78, 82
    ],
    planets: [1, 8, 9, 10, 11],
    starships: [49, 52, 58, 21, 32, 39, 43, 47, 48],
    vehicles: [45, 46, 50, 51, 53, 54, 55, 56, 57, 4, 44],
    species: [12, 13, 15, 1, 2, 6, 28, 29, 30, 31, 32, 33, 34, 35],
    created: '2014-12-20T10:57:57.886000Z',
    edited: '2014-12-20T20:18:48.516000Z',
    url: 'https://sw-api.starnavi.io/films/5/'
  },
  {
    id: 3,
    title: 'Return of the Jedi',
    episode_id: 6,
    opening_crawl:
      'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...',
    director: 'Richard Marquand',
    producer: 'Howard G. Kazanjian, George Lucas, Rick McCallum',
    release_date: '1983-05-25',
    characters: [
      10, 13, 14, 16, 18, 20, 21, 22, 25, 27, 28, 29, 30, 31, 45, 1, 2, 3, 4, 5
    ],
    planets: [1, 5, 7, 8, 9],
    starships: [27, 2, 3, 10, 11, 12, 15, 17, 22, 23, 28, 29],
    vehicles: [26, 8, 16, 18, 19, 24, 25, 30],
    species: [10, 15, 1, 2, 3, 5, 6, 8, 9],
    created: '2014-12-18T10:39:33.255000Z',
    edited: '2014-12-20T09:48:37.462000Z',
    url: 'https://sw-api.starnavi.io/films/3/'
  },
  {
    id: 2,
    title: 'The Empire Strikes Back',
    episode_id: 5,
    opening_crawl:
      'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
    director: 'Irvin Kershner',
    producer: 'Gary Kurtz, Rick McCallum',
    release_date: '1980-05-17',
    characters: [10, 13, 14, 18, 20, 21, 22, 23, 24, 25, 26, 1, 2, 3, 4, 5],
    planets: [4, 5, 6, 27],
    starships: [3, 10, 11, 12, 15, 17, 21, 22, 23],
    vehicles: [8, 14, 16, 18, 19, 20],
    species: [1, 2, 3, 6, 7],
    created: '2014-12-12T11:26:24.656000Z',
    edited: '2014-12-15T13:07:53.386000Z',
    url: 'https://sw-api.starnavi.io/films/2/'
  }
]

export const BobaStarship = [
  {
    id: 21,
    name: 'Slave 1',
    model: 'Firespray-31-class patrol and attack',
    manufacturer: 'Kuat Systems Engineering',
    cost_in_credits: 'unknown',
    length: '21.5',
    max_atmosphering_speed: '1000',
    crew: '1',
    passengers: '6',
    cargo_capacity: '70000',
    consumables: '1 month',
    hyperdrive_rating: '3.0',
    MGLT: '70',
    starship_class: 'Patrol craft',
    pilots: [22],
    films: [2, 5],
    created: '2014-12-15T13:00:56.332000Z',
    edited: '2014-12-20T21:23:49.897000Z',
    url: 'https://sw-api.starnavi.io/starships/21/'
  }
]
