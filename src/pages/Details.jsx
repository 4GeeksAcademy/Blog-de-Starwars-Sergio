import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const tatooineImg = "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg";

export const Details = () => {
    const { type, uid } = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/${type}/${uid}`)
            .then(res => res.json())
            .then(data => {
                if (data.result) {
                    setDetail(data.result.properties);
                }
            })
            .catch(err => console.error(err));
    }, [type, uid]);

    return (
        <div className="container mt-5">
            {detail ? (
                <>
                    <h1 className="text-center mb-4 text-white">{detail.name}</h1>
                    {/* AQUI EL CAMBIO: bg-dark text-white border-secondary */}
                    <div className="card mb-3 bg-dark text-white border-secondary">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img
                                    src={
                                        type === "planets" && uid == 1
                                            ? tatooineImg
                                            : `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${type === "people" ? "characters" : type}/${uid}.jpg`
                                    }
                                    className="img-fluid rounded-start h-100 object-fit-cover"
                                    alt={detail.name}
                                    style={{ minHeight: "300px" }}
                                    onError={(e) => {
                                        e.target.src = `https://placehold.co/400x600?text=${detail.name}`
                                    }}
                                />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h2 className="card-title text-warning border-bottom border-secondary pb-2">Details</h2>

                                    {type === "people" && (
                                        <div className="row mt-3">
                                            <div className="col-6">
                                                <p><strong>Birth Year:</strong> {detail.birth_year}</p>
                                                <p><strong>Gender:</strong> {detail.gender}</p>
                                                <p><strong>Height:</strong> {detail.height} cm</p>
                                                <p><strong>Mass:</strong> {detail.mass} kg</p>
                                            </div>
                                            <div className="col-6">
                                                <p><strong>Skin Color:</strong> {detail.skin_color}</p>
                                                <p><strong>Hair Color:</strong> {detail.hair_color}</p>
                                                <p><strong>Eye Color:</strong> {detail.eye_color}</p>
                                            </div>
                                        </div>
                                    )}

                                    {type === "planets" && (
                                        <div className="row mt-3">
                                            <div className="col-6">
                                                <p><strong>Climate:</strong> {detail.climate}</p>
                                                <p><strong>Terrain:</strong> {detail.terrain}</p>
                                                <p><strong>Diameter:</strong> {detail.diameter} km</p>
                                                <p><strong>Gravity:</strong> {detail.gravity}</p>
                                            </div>
                                            <div className="col-6">
                                                <p><strong>Population:</strong> {detail.population}</p>
                                                <p><strong>Rotation Period:</strong> {detail.rotation_period} h</p>
                                                <p><strong>Orbital Period:</strong> {detail.orbital_period} days</p>
                                                <p><strong>Surface Water:</strong> {detail.surface_water}%</p>
                                            </div>
                                        </div>
                                    )}

                                    {type === "vehicles" && (
                                        <div className="row mt-3">
                                            <div className="col-6">
                                                <p><strong>Model:</strong> {detail.model}</p>
                                                <p><strong>Class:</strong> {detail.vehicle_class}</p>
                                                <p><strong>Manufacturer:</strong> {detail.manufacturer}</p>
                                                <p><strong>Cost:</strong> {detail.cost_in_credits} credits</p>
                                            </div>
                                            <div className="col-6">
                                                <p><strong>Length:</strong> {detail.length} m</p>
                                                <p><strong>Crew:</strong> {detail.crew}</p>
                                                <p><strong>Passengers:</strong> {detail.passengers}</p>
                                                <p><strong>Max Speed:</strong> {detail.max_atmosphering_speed}</p>
                                                <p><strong>Cargo:</strong> {detail.cargo_capacity} kg</p>
                                            </div>
                                        </div>
                                    )}

                                    <hr className="border-secondary"/>
                                    <Link to="/" className="btn btn-outline-light mt-3">
                                        Back to Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        </div>
    );
};