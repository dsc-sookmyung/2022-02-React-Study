import logo from './logo.svg';
import './App.css';
import MainPage from './page/MainPage.jsx';
import DetailPage from './page/DetailPage.jsx';
import MyPage from './page/MyPage.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route index element={<MainPage/>}/>
        <Route path="mainpage" element={<MainPage/>}/>
        <Route path="mypage" element={<MyPage/>}/>
      </Switch>
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