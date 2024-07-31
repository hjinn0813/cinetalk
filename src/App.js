import { Route, Routes } from 'react-router-dom';
import Head from './components/Header/Head';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Watched from './pages/Watched';
import Review from './pages/Review';
import Write from './pages/Write';
import Search from './pages/Search';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Head />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="search" element={<Search />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="watched" element={<Watched />} />
        <Route path="review/:id" element={<Review />} />
        <Route path="write" element={<Write />} />
        <Route path="NotFound" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
