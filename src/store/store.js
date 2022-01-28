import { createStore } from "redux";
import userCollectionReducer from "./reducer";

const store = createStore(userCollectionReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
