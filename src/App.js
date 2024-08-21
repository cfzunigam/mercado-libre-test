// import logo from './logo.svg';
import './App.css';
import SearchBox  from './components/SearchBox'
import SearchResults from './components/SearchResult';

function App() {
  return (
    <div className="App">
        <SearchBox/>
        <SearchResults/>
    </div>
  );
}

export default App;
