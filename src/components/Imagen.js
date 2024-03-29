import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComment } from '@fortawesome/free-solid-svg-icons';

const Imagen = ({imagen}) => {

    //extraer los valores de la imagen
    const {largeImageURL, likes, previewURL, tags, views, comments} = imagen;

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>

                <div className="card-body">
                    <p className="card-text">{likes} Me Gusta</p>
                    <p className="card-text">{views} Vistas</p>
                    <p className="card-text"><FontAwesomeIcon icon={faComment} /> {comments} Comentarios</p>
                </div>

                <div className="card-footer">
                    <a 
                        href={largeImageURL}
                        target="_blanck"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block"
                    >Ver Imagen</a>
                </div>
            </div>
        </div>
     );
}
 
export default Imagen;