import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Locations = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/locations')
            .then(res => res.json())
            .then(allLocations => setLocations(allLocations))
    })


    return (
        <main className="container">
            <section className="row justify-content-space-between mt-5">
                {locations.map(location => (
                    <div className="col-md-6" key={`location-card-${location.id}`}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h4 className="card-title">{location.name}</h4>
                                <h5 className="card-subtitle mb-2">{location.climate}</h5>
                                <p className="card-subtitle text-muted mt-2">{location.terrain}</p>
                                <Link to={`/locations/${location.id}`} className="btn btn-primary">
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

export default Locations