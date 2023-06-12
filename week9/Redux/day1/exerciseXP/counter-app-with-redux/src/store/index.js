
import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {count:20}
export const store =createStore(reducer,initialState)




