import { useState } from 'react'

const Resenia = ({resenia, deleteResenia}) => {
    // Definir Estados Iniciales:
    const [rating , setRating] = useState(resenia.rating)
    const [comment , setcomment] = useState(resenia.text)

    // Cambiar el estado del Rating
    const addNota = () => {
        setRating((prev) => {
            return prev + 1
        })
    }

    const restNota = () => {
        setRating((prev) => {
            return prev - 1
        })
    }

    return(
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-display">
                {comment}
            </div>
            <button className="btn btn-secondary" onClick={restNota}>
                Restar Nota
            </button>

            <button className="btn btn-primary" onClick={addNota}>
                Sumar Nota
            </button>

            <button className="close" onClick={() => deleteResenia(resenia.id)}>
                X
            </button>
        </div>
    )
}

export default Resenia;