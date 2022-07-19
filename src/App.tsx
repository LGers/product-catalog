import React from 'react';
import { BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
import './normalize.css';
import './App.css';
import Main from './pages/Main';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Main />} /> {/* todo 404 */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
