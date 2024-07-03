import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Watched from './pages/Watched';
import Review from './pages/Review';
import Write from './pages/Write';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Login" element={<Login />} />
        <Route path="MyPage" element={<MyPage />} />
        <Route path="Watched" element={<Watched />} />
        <Route path="Review" element={<Review />} />
        <Route path="Write" element={<Write />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
