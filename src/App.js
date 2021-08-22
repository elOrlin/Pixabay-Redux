import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

//Redux
import { useSelector } from 'react-redux';

function App() {

   const [imagenes, guardarImagenes] = useState([]);
   //const [paginaActual, guardarPaginaActual] = useState(1);
   //const [totalpaginas, guardarTotalPaginas] = useState(5)

  const cargando = useSelector(state => state.imagen.imagenes)

   useEffect(() => {
    const consultarApi = async () => {
      if(cargando){
        if(cargando === "") return null;
  
        guardarImagenes(cargando)
  
       const jumbotron = document.querySelector('.jumbotron')
       jumbotron.scrollIntoView({behavior: 'smooth'});

      }
    }
    consultarApi();
  }, [cargando])
  
  return (
        <div className="container">
          <div className="jumbotron">
              <p className="lead text-center ">Buscador de Imaganes</p>

              <Formulario 
                //guardarBusqueda={guardarBusqueda}
              />
          </div>

          <div className="row justify-content-center"> 
              {imagenes.map(cargadores => (
                <ListadoImagenes  cargadores={cargadores}/>
              ))}
          </div>
        </div>
  );
}

export default App;