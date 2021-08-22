import React from 'react';
import Imagen from './Imagen';

//import { useSelector } from 'react-redux';

const ListadoImagenes = ({cargadores}) => {
    return ( 
        <div className="col-12 p-5 row">
            {cargadores.map(imagen => (
                <Imagen 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
     );
}
 
export default ListadoImagenes;