import Resenia from "./Resenia"

const ReseniaList = ( {listaresenias, deleteResenia} ) => {

            // Condicional en caso de que no lleguen los datos
            if (!listaresenias || listaresenias.length === 0) {
             return(
                <div className="card">
                    <div className="num-display">
                        !!!
                    </div>
                    <div className="text-display">
                        No hay reseñas
                    </div>
                </div>
             )
            }else{
    return(

        <div className="feedback-list">
            {/* Recorrer la listaresenias */}
            { listaresenias.map((resenia)=>
            (
                <Resenia 
                    deleteResenia={deleteResenia}
                    key={resenia.id}
                    resenia={resenia}
                />
            )
            ) 
            }
        </div>
    )
}
}
export default ReseniaList