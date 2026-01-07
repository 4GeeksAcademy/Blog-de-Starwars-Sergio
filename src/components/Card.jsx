import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"

export const Card = (props) => {

    const { dispatch } = useGlobalReducer();
        
    return (
        <div className="card" style={{ width: "18rem" }}>
            {/* Imagen temporal (luego pondremos la real) */}
            <img
                src={`https://placehold.co/400x200?text=${props.name}`}
                className="card-img-top"
                alt={props.name}
            />

            <div className="card-body">
                {/* Aquí usamos la variable que nos manden */}
                <h5 className="card-title">{props.name}</h5>

                <p className="card-text">
                    Aquí irán características como género, color de pelo, etc.
                </p>

                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-primary">Learn more!</button>
                    <button className="btn btn-outline-warning"
                        onClick={() => {
                            dispatch({
                                type: "add_favorite",
                                payload: { name: props.name, uid: props.uid}
                            });
                        }}
                    >
                        <i className="fa fa-heart" />
                    </button>
                </div>
            </div>
        </div>
    );
};