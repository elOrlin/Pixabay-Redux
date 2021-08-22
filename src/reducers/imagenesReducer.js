import {
     AGREGAR_IMAGENES,
     AGREGAR_IMAGENES_EXITO,
     AGREGAR_IMAGENES_ERROR,
} from '../types';

const initialState = {
    imagenes: [],
    error: null,
    loading: false
}

export default function foo(state = initialState, action){
    switch(action.type){
        case AGREGAR_IMAGENES:
            return {
                ...state,
                loading: true
            }
        case AGREGAR_IMAGENES_EXITO:
            return {
                ...state,
                loading: false,
                imagenes: [...state.imagenes, action.payload]
            }
        case AGREGAR_IMAGENES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}