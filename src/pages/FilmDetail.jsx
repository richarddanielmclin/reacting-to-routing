import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

const FilmDetail = () => {
    const { filmid } = useParams();

    const [film, setFilm] = useState(null)

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(film => setFilm(film))
    }, [])

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                    <div className="col-md-6" key={`film-card-${film?.id}`}>
                        <div className="card shadow my-2">
                            <img src={film?.image} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{film?.title}</h4>
                                <h5 className="card-subtitle mb-2">{film?.original_title}</h5>
                                <p className="card-subtitle text-muted mt-2">{film?.description}</p>
                            </div>
                        </div>
                    </div>
            </section>
        </main>
    )
}

export default FilmDetail