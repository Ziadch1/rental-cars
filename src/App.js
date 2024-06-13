import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Main from './components/main';
import Book from './components/book';
import Sec from './components/section1';
import Fleet from './components/fleet';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Main/>
        <Book/>
        <Sec/>
        <Fleet/>
        
    </div>
  );
}

export default App;
