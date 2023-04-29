import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting ="Acuarista de más de 20 años de experiencia"/>
    </>
  );
}

export default App;
