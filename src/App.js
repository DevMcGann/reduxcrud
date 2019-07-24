import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './componentes/Header'
import Productos from './componentes/Productos'
import NuevoProducto from './componentes/NuevoProducto'
import Editar from './componentes/Editar'


//redux
import { Provider } from 'react-redux'
import store from './store'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Productos} />
              <Route exact path="/productos/nuevo" component={NuevoProducto} />
              <Route exact path="/productos/editar/:id" component={Editar} />

            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
