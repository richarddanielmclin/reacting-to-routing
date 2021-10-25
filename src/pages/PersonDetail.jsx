import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

const PersonDetail = () => {
    const { personid } = useParams();

    const [person, setPerson] = useState(null)

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
            .then(res => res.json())
            .then(person => setPerson(person))
    }, []);

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                    <div className="col-md-6" key={`film-card-${person?.id}`}>
                        <div className="card shadow my-2">
                            <img src={person?.image} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">{person?.name}</h4>
                                <h5 className="card-subtitle">{person?.age}</h5>
                                <h6 className="card-text text-muted pt-2">{person?.gender}</h6>
                            </div>
                        </div>
                    </div>
            </section>
        </main>
    )
}

export default PersonDetail