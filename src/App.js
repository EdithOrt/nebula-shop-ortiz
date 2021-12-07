import './styles/index.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />

    <ItemListContainer greeting='Bienvenidx 😃'/>
    </>
  );
}

export default App;
