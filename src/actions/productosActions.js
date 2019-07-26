import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO, AGREGAR_PRODUCTO,MOSTRAR_PRODUCTO } from './types';


import axios from 'axios'

export const mostrarProductos = () => async dispatch => {
    const respuesta = await axios.get('http://localhost:4000/productos');
    dispatch({
        type: MOSTRAR_PRODUCTOS,
        payload: respuesta.data
    })
}


export const mostrarProducto = id => async dispatch => {
    const respuesta = await axios.get(`http://localhost:4000/productos/${id}`)
    dispatch ({
        type:MOSTRAR_PRODUCTO,
        payload:respuesta.data
    })
}

export const borrarProductos = id => async dispatch => {
    await axios.delete(`http://localhost:4000/productos/${id}`)
    dispatch({
        type: ELIMINAR_PRODUCTO,
        payload: id
    })
}

export const agregarProducto = post => async dispatch => {
    const respuesta = await axios.post('http://localhost:4000/productos',post);
    dispatch({
        type:AGREGAR_PRODUCTO,
        payload:respuesta.data
    })
}

