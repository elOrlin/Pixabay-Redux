import { combineReducers } from "redux";
import imagenesReducer from "./imagenesReducer";

export default combineReducers({
    imagen: imagenesReducer
})