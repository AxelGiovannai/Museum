import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './Pages/HomePage';
import AdvancedSearchPage from './Pages/AdvancedSearchPage';
import ItemPage from './Pages/ItemPage';
import SearchResultsPage from './Pages/SearchResultsPage';
import NotFoundPage from './Pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="advanced-search" element={<AdvancedSearchPage />} />
          <Route path="object/:id" element={<ItemPage />} />
          <Route path="search" element={<SearchResultsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
