import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // 1. Importar

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer(); // 2. Traer el almacén

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				{/* 1. El Logo (Izquierda) */}
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars Blog</span>
				</Link>

				{/* 2. El Botón de Favoritos (Derecha) */}
				<div className="ml-auto">

					{/* Usamos un 'dropdown' de Bootstrap */}
					<div className="btn-group">

						{/* El Botón que se ve siempre */}
						<button
							type="button"
							className="btn btn-primary dropdown-toggle"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favorites
							{/* Un pequeño contador numérico */}
							<span className="badge bg-secondary ms-2">
								{store.favorites.length}
							</span>
						</button>

						<ul className="dropdown-menu dropdown-menu-end">

							{/* Preguntamos: ¿La lista está vacía? */}
							{store.favorites.length === 0 ? (
								<li className="dropdown-item text-muted">
									(Empty)
								</li>
							) : (
								// Si NO está vacía, hacemos el mapa:
								store.favorites.map((fav, index) => {
									return (
										<li key={index} className="dropdown-item d-flex justify-content-between">
											{/* El nombre del favorito */}
											<span>{fav.name}</span>

											{/* Aquí pondremos un icono de basura más tarde */}
											<i className="fa fa-trash text-danger ms-2"
												onClick={(e) => {
													e.stopPropagation();
													dispatch({
														type: "delete_favorite",
														payload: index
													})
												}

												}
											/>
										</li>
									);
								})
							)}

						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};