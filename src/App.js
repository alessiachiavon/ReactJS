import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos!'}/>
    </div>
  );
}

export default App;
