import cuid from 'cuid';

export default function manageReviews(state = [], action) {
  switch (action.type){
    case "ADD_REVIEW":
      return  [...state, {text: action.review, restaurantId: action.restaurantId, id: cuid()}]
    case "DELETE_REVIEW":
      return state.filter(rev => rev.id !== action.id)
    default:
      return state
  }
}
