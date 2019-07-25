import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO } from './types';


import axios from 'axios'

export const mostrarProductos = () => async dispatch => {
    const respuesta = await axios.get('http://localhost:4000/productos');
    dispatch({
        type: MOSTRAR_PRODUCTOS,
        payload: respuesta.data
    })
}

export const borrarProductos = id => async dispatch => {
    await axios.delete(`http://localhost:4000/productos/${id}`)
    dispatch({
        type: ELIMINAR_PRODUCTO,
        payload: id
    })
}