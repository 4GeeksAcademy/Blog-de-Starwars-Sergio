export const initialStore = () => {
    return {
        message: null,
        people: [],
        planets: [],
        vehicles: [],
        favorites: [],
    };
};

export default function storeReducer(store, action = {}) {
    switch (action.type) {
        case "load_people":
            return {
                ...store,
                people: action.payload,
            };

        case "load_planets":
            return {
                ...store,
                planets: action.payload,
            };

        case "load_vehicles":
            return {
                ...store,
                vehicles: action.payload,
            };

        case "add_favorite":
            const exists = store.favorites.some((item) => item.name === action.payload.name);

            if (exists) {
                return store;
            }

            return {
                ...store,
                favorites: [...store.favorites, action.payload],
            };

        case "delete_favorite":
            return {
                ...store,
                favorites: store.favorites.filter((item, index) => index !== action.payload),
            };

        default:
            return store;
    }
}