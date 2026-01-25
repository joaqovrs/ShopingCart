import type { Figura } from "../types"

type FigurasProps = {
    figura: Figura
    addToCart: (item: Figura) => void
}


// * Debemos asignarle el tipo de valor al objeto figura y a la funcion addToCart
// * Para eso creamos el type FigurasProps el cual tiene el valor de figura y addToCart, debemos asignarlo despues de los corchetes al exportar la funcion Guitar

export default function Figura({figura, addToCart} : FigurasProps) {

    const {name, image, price} = figura


    return (
        <div className="col-md-6 col-lg-4 my-4">
        {/* Imagen centrada arriba */}
        <div className="text-center">
            <img 
                className="img-fluid" 
                src={`/img/${image}.jpg`} 
                alt="imagen figura" 
                style={{ height: "250px", objectFit: "contain" }}
            />
        </div>

        {/* Información debajo */}
        <div className="text-center">
            <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
            <p className="fw-black text-primary fs-3">${price}</p>
            
            <button 
                type="button"
                className="btn btn-dark w-100"
                onClick={() => addToCart(figura)}
            >
                Agregar al Carrito
            </button>
        </div>
    </div>
    )
}
