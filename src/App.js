import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Header from './Components/Header';
import Main from './Components/Main';
import Profile from './Components/Profile';
import NotFound from './Components/NotFound';
import Quiz from './Components/Quiz';

function App() {

  const location = useLocation();

  const header = document.getElementsByClassName('headerBox');

  useEffect(() => {
    if(location.pathname === "/404"){
      header[0].style.display = 'none';
    } else if(location.pathname !== "/404"){
      header[0].style.display = 'block';
    }
  })

  return (
    <div>
      <Header />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to={'/404'} />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
