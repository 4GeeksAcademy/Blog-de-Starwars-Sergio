import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        const loadPeople = async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/people");
                if (!response.ok) throw new Error("Error cargando datos");
                const data = await response.json();
                dispatch({ type: "load_people", payload: data.results });
            } catch (error) {
                console.error(error);
            }
        };

        const loadPlanets = async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/planets");
                if (!response.ok) throw new Error("Error planets");
                const data = await response.json();
                dispatch({ type: "load_planets", payload: data.results });
            } catch (error) {
                console.error(error);
            }
        };

        const loadVehicles = async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/vehicles");
                if (!response.ok) throw new Error("Error vehicles");
                const data = await response.json();
                dispatch({ type: "load_vehicles", payload: data.results });
            } catch (error) {
                console.error(error);
            }
        };

        loadPeople();
        loadPlanets();
        loadVehicles();
    }, []);

    return (
        <div className="text-center mt-5">
            <h1>Star Wars Blog</h1>
            <div className="container">
                <h2 className="text-danger text-start mt-4">Characters</h2>
                <div className="row">
                    <div className="d-flex flex-row overflow-scroll">
                        {store.people.map((person) => (
                            <div key={person.uid} className="col-md-4 mb-4 mx-2">
                                <Card
                                    name={person.name}
                                    uid={person.uid}
                                    nature="people"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <h2 className="text-warning text-start mt-4">Planets</h2>
                <div className="row">
                    <div className="d-flex flex-row overflow-scroll">
                        {store.planets.map((planet) => (
                            <div key={planet.uid} className="col-md-4 mb-4 mx-2">
                                <Card
                                    name={planet.name}
                                    uid={planet.uid}
                                    nature="planets"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <h2 className="text-primary text-start mt-4">Vehicles</h2>
                <div className="row">
                    <div className="d-flex flex-row overflow-scroll">
                        {store.vehicles.map((vehicle) => (
                            <div key={vehicle.uid} className="col-md-4 mb-4 mx-2">
                                <Card
                                    name={vehicle.name}
                                    uid={vehicle.uid}
                                    nature="vehicles"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};