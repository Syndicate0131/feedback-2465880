const App = () =>{
    const bootcamps = [
        {
            id: 1,
            name: 'Php BootCamp',
            average_raiting: 8
        },
        {
            id: 2,
            name: 'JavaScript BootCamp',
            average_raiting: 9
        },
    ]
    return (
        <>
        <h1>Listado de BootCamps</h1>
        <ul>
            { bootcamps.map((bootcamp , index) => (
                <li key={index}>{bootcamp.name}</li>
            )) }
        </ul>
        </>
    )
}

export default App;