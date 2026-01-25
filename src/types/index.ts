export type Figura = {
    id: number
    name: string
    image: string
    price: number
}

export type CartItem = Figura & {
    quantity: number
}

//* Este archivo index.ts ayuda a poder encapsular los types o interfaces que se utilicen en mas de un archivo.
//* CartItem está heredando los propiedades de Guitar para asi no tener que repetir tanto codigo
//* Puedes utilizar utilities como Pick u Omit para seleccionar los propiedades que quieres heredar u omitit a otro type
