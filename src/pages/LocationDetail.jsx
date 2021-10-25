import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

const LocationDetail = () => {
    const { locationid } = useParams();

    const [location, setLocation] = useState(null)

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/locations/${locationid}`)
            .then(res => res.json())
            .then(location => setLocation(location))
    }, [])

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className="col-md-6" key={`location-card-${location?.id}`}>
                    <div className="card shadow my-2">
                        <div className="card-body">
                            <h4 className="card-title">{location?.name}</h4>
                            <h5 className="card-subtitle mb-2">{location?.climate}</h5>
                            <p className="card-subtitle text-muted mt-2">{location?.terrain}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LocationDetail