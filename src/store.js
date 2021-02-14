import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userAuthReducer } from "./redux/reducers/userReducer";
import { guidesReducer } from "./redux/reducers/guidesReducer";

const rootReducer = combineReducers({ user: userAuthReducer, guides: guidesReducer });

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
