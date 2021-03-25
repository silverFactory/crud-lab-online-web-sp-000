import cuid from 'cuid';
 
export default function manageRestaurants(state = [], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return [...state, {text: action.restaurant, id: cuid()}]
    case 'DELETE_RESTAURANT':
      return state.filter(res => res.id !== action.id)
    default:
      return state
  }
}
