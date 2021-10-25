import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const People = () => {

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(people => {
                people.forEach(person => {
                    fetch(person.films[0])
                        .then(res => res.json())
                        .then(film => person.image = film.image)
                })

                setPeople(people)
            })
    }, []);

    const [people, setPeople] = useState([])

    return (
        <main className="container">
            <section className="row justify-content-space-between mt-5">
                {people.map(person => (
                    <div className="col-md-6" key={`film-card-${person.id}`}>
                        <div className="card shadow my-2">
                            <img src={person.image} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{person.name}</h4>
                                <h5 className="card-subtitle">{person.age}</h5>
                                <h6 className="card-text text-muted pt-2">{person.gender}</h6>
                                <Link to={`/people/${person.id}`} className="btn btn-primary">
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

export default People