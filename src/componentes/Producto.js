import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//redux
import { connect } from 'react-redux'
import { borrarProductos } from '../actions/productosActions'

class Producto extends Component {

    eliminarProducto = () => {
        const { id } = this.props.info;
        this.props.borrarProductos(id)
    }

    render() {

        const { id, nombre, precio } = this.props.info;  //id nombre y precio vienen de props.info ya que asi le llamamos en Productos

        return (
            <li className="list-group-item">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-8 d-flex justify-content-between align-items-center">
                        <p className="text-dark m-0">
                            {nombre}
                        </p>
                        <span className="badge badge-warning text-dark"> ${precio}</span>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end acciones">
                        <Link to={`productos/editar/${id}`} className="btn btn-primary mr-4">Editar</Link>
                        <button onClick={this.eliminarProducto} type="button" className="btn btn-danger">Borrar</button>
                    </div>
                </div>
            </li>
        );
    }
}

export default connect(null, { borrarProductos })(Producto);

/**Como no hay que agregar nada al state, no lleva StateToProps */
