import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer.jsx";//rather than creating the reducer from scratch you simply import it

const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;