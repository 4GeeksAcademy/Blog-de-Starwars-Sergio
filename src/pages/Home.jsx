import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";

export const Home = () => {


	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {

		const loadPeople = async () => {

			// const response = await fetch("https://www.swapi.tech/api/people");

			//const data = await response.json();

			const mockData = [
				{ uid: "1", name: "Luke Skywalker", url: "https://www.swapi.tech/api/people/1" },
				{ uid: "2", name: "C-3PO", url: "https://www.swapi.tech/api/people/2" },
				{ uid: "3", name: "R2-D2", url: "https://www.swapi.tech/api/people/3" },
				{ uid: "4", name: "Darth Vader", url: "https://www.swapi.tech/api/people/4" }
			];

			console.log("Usando datos falsos:", mockData);

			dispatch({
				type: "load_people",
				payload: mockData
			})


			console.log(mockData);


		}

		loadPeople();

	}, []);

	console.log("Mis Favoritos:", store.favorites);

	return (
		<div className="text-center mt-5">
			<h1>Star Wars Blog</h1>

			{/* Contenedor de Bootstrap para que se ordenen bien */}
			<div className="container">
				<div className="row">

					{/* 1. Abrimos llaves para escribir JavaScript dentro de HTML */}
					{store.people.map((person) => {

						// 2. Por cada 'person' en la lista, devolvemos este HTML:
						return (
							<div key={person.uid} className="col-md-4 mb-4">
								{/* 3. Usamos tu componente Card y le pasamos el nombre como Prop */}
								<Card
									key={person.uid}
									name={person.name}
									uid={person.uid}  // <--- ¡Agrega esto! Le pasamos el ID a la tarjeta
								/>
							</div>
						);
					})}

				</div>
			</div>
		</div>
	);
};