import './App.css';
import Home from './components/Home';
import Alunos from './components/Alunos';
import Sobre from './components/Sobre';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      
    <h1>React CRUD operations</h1>

    <>
    <BrowserRouter>

      <Nav variant='tabs'>
        <Nav.link as={Link} to='/'>Página Inicial</Nav.link>
        <Nav.link as={Link} to='/alunos'>Página Inicial</Nav.link>
        <Nav.link as={Link} to='/sobre'>Página Inicial</Nav.link>
      </Nav>

      <Switch>
        <Route path="/" exact={true} component={<Home/>}></Route>
        <Route path="/alunos" component={<Alunos/>}></Route>
        <Route path="/sobre" component={<Sobre/>}></Route>
      </Switch>

      </BrowserRouter>
    </>













    </div>
  );
}

export default App;
