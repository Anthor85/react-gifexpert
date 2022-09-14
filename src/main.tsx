import React from 'react'
import ReactDOM from 'react-dom/client'
import {GifExpertApp} from "./GifExpertApp";

import './styles.css'; //Importar los estilos para toda la aplicacion

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
