/*
CombineReducers va a combinar todos los reducers aquí
*/

import { combineReducers } from 'redux';
import productosReducer from './productosReducers'   //importar los otros reducers

export default combineReducers({
    productos: productosReducer

});