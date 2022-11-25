// Dependecias Necesarias
import { useState } from 'react'

//Data
import Resenias from './data/Resenias';

//Componentes
import Resenia from './componentes/Resenia'
import ReseniaList from './componentes/ReseniaList'

const App = () =>{
    
    // Crear estado para el arreglo de resenias
    const [lista_resenias , 
        setLista_resenias] = useState(Resenias)

    const deleteResenia = id => {
        window.confirm("Seguro de eliminar la resenia")
    }

    return (
        <div className="container">
            <ReseniaList 
            deleteResenia={deleteResenia}
            listaresenias={lista_resenias}/>
        </div>
    )
}

export default App;