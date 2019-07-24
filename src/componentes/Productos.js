import React, { Component } from 'react';


//redux
import { connect } from 'react-redux';
import { motrarProductos } from '../actions/productosActions'

class Productos extends Component {

    componentDidMount() {
        this.props.motrarProductos()
    }

    render() {
        return (
            <h1>Productos</h1>
        );
    }
}

//state
const mapStateToProps = state => ({
    productos: state.productos.productos
})

export default connect(mapStateToProps, { motrarProductos })(Productos);