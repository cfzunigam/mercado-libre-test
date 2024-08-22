import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBox  from './components/SearchBox';
import SearchResults  from './components/SearchResults';
import ProductDetail  from './components/ProductDetail';

const App = () => {
  return (
    <Router>
      <div>
        <SearchBox />
        <Routes>
          <Route path="/" element={null} />
          <Route path="/items" element={<SearchResults />} />
          <Route path="/items/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
