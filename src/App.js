import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Site from './Site'
import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Servicos from './componentes/Servicos'
import Portfolio from './componentes/Portfolio'
import Precos from './componentes/Precos'
import Contatos from './componentes/Contatos'
//Área Administrativa
import Admin from './admin/Admin';
import Login from './admin/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />

          <Route path='/' exact component={Inicio} />
          <Route path='/servicos' component={Servicos} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path='/precos' component={Precos} />
          <Route path='/contato' component={Contatos} />

          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
