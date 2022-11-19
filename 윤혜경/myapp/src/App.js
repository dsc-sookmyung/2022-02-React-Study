import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import MainPage from './page/MainPage.jsx';
import MyPage from './page/MyPage.jsx';
import Navigation from './component/Navigation'
import DetailPage from './page/DetailPage';
import CreatePage from './page/CreatePage';
import UpdatePage from './page/UpdatePage';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/post/:postId" element={<DetailPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update/:postId" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/