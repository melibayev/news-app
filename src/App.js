import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsDetailPage from './pages/NewsDetailPage'
import SearchPage from './pages/SearchPage';

function App() {

    return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />}/>
          <Route path='/news-detail/:author' element={<NewsDetailPage />} />
          <Route path='/all' element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

