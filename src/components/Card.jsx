import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const tatooineImg = "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg";

export const Card = (props) => {
    const { store, dispatch } = useGlobalReducer();
    const isFavorite = store.favorites.some(fav => fav.name === props.name);
    const type = props.nature || "people";

    return (
        <div className="card bg-dark text-white border-secondary" style={{ width: "18rem" }}>
            <img
                src={
                    type === "planets" && props.uid == 1
                        ? tatooineImg
                        : `https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${type === "people" ? "characters" : type}/${props.uid}.jpg`
                }
                className="card-img-top"
                alt={props.name}
                onError={(e) => {
                    e.target.src = `https://placehold.co/400x200?text=${props.name}`
                }}
            />

            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>

                <div className="d-flex justify-content-between mt-3">
                    <Link
                        to={`/details/${type}/${props.uid}`}
                        className="btn btn-outline-light"
                    >
                        Learn more!
                    </Link>

                    <button
                        className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={() => {
                            if (isFavorite) {
                                const indexToDelete = store.favorites.findIndex(fav => fav.name === props.name);
                                if (indexToDelete !== -1) {
                                    dispatch({ type: "delete_favorite", payload: indexToDelete });
                                }
                            } else {
                                dispatch({ type: "add_favorite", payload: { name: props.name, uid: props.uid } });
                            }
                        }}
                    >
                        <i className={`fa-heart ${isFavorite ? "fas" : "far"}`} />
                    </button>
                </div>
            </div>
        </div>
    );
};