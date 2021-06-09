import logo from './logo.svg';
import './App.css';
import {Navbar} from '../src/components/NavBar.js';
import { ItemListContainer } from './components/ItemListContainer';
import {Item} from './components/Item';

function App() {
  const greetings = [
    {
      greeting: 'Bienvenidos a la CoderTienda'
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>
         Ecommerce-Casco
        </p>
        <Navbar/>
      </header>
      <ItemListContainer greeting={greetings[0].greeting} />
      <Item/>

    </div>
  );
}

export default App;
