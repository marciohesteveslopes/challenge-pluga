import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Ferramentas from './views/Ferramentas'
import Ferramenta from './views/Ferramenta'


function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Ferramentas {...props}/>} />
      <Route path="/:ferramentaId" render={(props) => <Ferramenta {...props}/>} />

    </Switch>
  );
}

export default App;
