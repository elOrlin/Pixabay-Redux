import axios from 'axios';
import {
    AGREGAR_IMAGENES,
    AGREGAR_IMAGENES_EXITO,
    AGREGAR_IMAGENES_ERROR,
} from '../types';

//import axios from 'axios';

export function enviarImagenes(busqueda){
    return async (dispatch) => {
        dispatch(agregarImagen()) 

        try{
            const imagenesPorPagina = 30;
            const key = '22916283-d821239aee0b9bb3282a98a76';
            const response = await axios.get(`https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`);

            dispatch(agregarImagenExito(response.data.hits))
        }catch(error){
            dispatch(agregarError(true))
        }
    }
}

const agregarImagen = () => ({
    type: AGREGAR_IMAGENES,
    payload: true
})

const agregarImagenExito = imagen => ({
    type: AGREGAR_IMAGENES_EXITO,
    payload: imagen
})


const agregarError = estado => ({
    type: AGREGAR_IMAGENES_ERROR,
    payload: estado
})