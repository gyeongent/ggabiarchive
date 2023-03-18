import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Main from './Components/Main';
import Profile from './Components/Profile';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div>
    <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
