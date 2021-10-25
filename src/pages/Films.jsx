import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const Films = () => {

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilms(allFilms))
    }, [])

    const [films, setFilms] = useState([])

    return (
        <main className="container">
            <section className="row justify-content-space-between mt-5">
                {films.map(film => (
                    <div className="col-md-6" key={`film-card-${film.id}`}>
                        <div className="card shadow my-2">
                            <img src={film.image} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{film.title}</h4>
                                <h5 className="card-subtitle mb-2">{film.original_title}</h5>
                                <p className="card-subtitle text-muted mt-2">{film.description}</p>
                                <Link to={`/films/${film.id}`} className="btn btn-primary">
                                    More Info
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Films