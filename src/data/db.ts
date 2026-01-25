import type { Figura } from "../types"

/* export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
} */

// * Los types o interfaces sirven para crear una estructura o agrupar propiedades de un objeto
// * Para asignarlos a alguna variable se llaman con su nombre y unos corchetes para decirle que es un arreglo, debido a que el type es un objeto
//* Los nombres de types o interfaces pueden ser TGuitar o GuitarT, IGuitar o GuitarI



export const db : Figura[] = [
    {
        id: 1,
        name: 'Gohan SJ2',
        image: 'figura_01',
        price: 299,
    },
    {
        id: 2,
        name: 'Vegeta',
        image: 'figura_02',
        price: 349,
    },
    {
        id: 3,
        name: 'Goku SJ3',
        image: 'figura_03',
        price: 329,
    },
    {
        id: 4,
        name: 'Goku Blue',
        image: 'figura_04',
        price: 299,
    },
    {
        id: 5,
        name: 'Goku SJ',
        image: 'figura_05',
        price: 399,
    },
    {
        id: 6,
        name: 'Freezer',
        image: 'figura_06',
        price: 329,
    },
    {
        id: 7,
        name: 'Vegeta base',
        image: 'figura_07',
        price: 349,
    },
    {
        id: 8,
        name: 'Gogan adulto',
        image: 'figura_08',
        price: 379,
    },
    {
        id: 9,
        name: 'Goku Red',
        image: 'figura_09',
        price: 289,
    },
    {
        id: 10,
        name: 'Metal Freezer',
        image: 'figura_10',
        price: 349,
    },
    {
        id: 11,
        name: 'Piccolo',
        image: 'figura_11',
        price: 399,
    },
    {
        id: 12,
        name: 'Goku UI',
        image: 'figura_12',
        price: 379,
    },
  ]