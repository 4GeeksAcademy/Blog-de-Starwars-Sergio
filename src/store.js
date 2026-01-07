export const initialStore=()=>{
  return {
    message: null,
    people: [],
    planets: [],
    vehicles: [],
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    
    case 'load_people': 
        // 1. Tomamos los datos que vienen en la acción (payload)
        // 2. Retornamos una COPIA del store actual (...store)
        // 3. Sobreescribimos la propiedad 'people' con los nuevos datos
        return {
            ...store,
            people: action.payload
        };

        case 'load_planets': 
        return {
            ...store,
            planets: action.payload
        };

        case 'load_vehicles': 
        return {
            ...store,
            vehicles: action.payload
        };

        case 'add_favorite':
        return {
            ...store, // Mantenemos people, planets, etc.
            favorites: [ ...store.favorites, action.payload ] // Agregamos el nuevo al array existente
        };

        case 'delete_favorite':
        // --- LOGS DE DEPURACIÓN ---
        console.log("---- BORRANDO FAVORITO ----");
        console.log("Posición a borrar (payload):", action.payload);
        console.log("Lista antes de borrar:", store.favorites);
        
        const idToDelete = action.payload;

        const newFavorites = store.favorites.filter((item, index) => {
            // Queremos ver si la comparación funciona
            // console.log(`Comparando índice ${index} con ${idToDelete}`); 
            return index !== idToDelete;
        });

        console.log("Lista después de borrar:", newFavorites);
        console.log("---------------------------");

        return {
            ...store,
            favorites: newFavorites
        };

    default:
      return store;
  }    
}
