import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import Login from './pages/Login';
import MyPage from './pages/MyPage.jsx';
import Watched from './pages/Watched';
import Review from './pages/Review';
import Write from './pages/Write';
import Search from './pages/Search';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="search" element={<Search />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="watched" element={<Watched />} />
        <Route path="review/:id" element={<Review />} />
        <Route path="write" element={<Write />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
