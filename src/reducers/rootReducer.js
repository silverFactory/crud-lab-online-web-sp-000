import { combineReducers } from "redux";
import restaurantsReducer from './manageRestaurant'
import reviewsReducer from './manageReviews'

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  reviews: reviewsReducer
});

export default rootReducer;
