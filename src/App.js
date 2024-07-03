import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/login';
import Mypage from './pages/mypage';
import Library from './pages/library';
import Review from './pages/review';
import Write from './pages/write';

function App() {
  return (
    <div className="App">
      <header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="library" element={<Library />} />
          <Route path="review" element={<Review />} />
          <Route path="write" element={<Write />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
