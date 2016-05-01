import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers  } from 'redux';

// import {todo} from "./reducers/todo";
// import {filtro} from "./reducers/filtro";
import {compania} from './reducers/compania';

// const reducers = combineReducers({filtro,todo});

const store = createStore(compania);

export default store;