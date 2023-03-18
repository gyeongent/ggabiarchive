import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './Components/Header';
import Main from './Components/Main';
import Profile from './Components/Profile';
import NotFound from './Components/NotFound';
import Quiz from './Components/Quiz';

function App() {

  const location = useLocation();  

  if(location.pathname === "/404"){
    const header = document.getElementsByClassName('headerBox')[0];
    header.style.display = 'none';
  } else if(location.pathname != "/404"){
    const header = document.getElementsByClassName('headerBox')[0];
    header.style.display = 'block';
  }

  return (
    <div>
      <Header />
      <TransitionGroup className='transitions-wrapper'>
        <CSSTransition key={location.pathname} classNames={"right"} timeout={300}>
          <Routes>
            <Route path='/' element={<Main style={{position: 'absolute'}} />} />
            <Route path='/profile' element={<Profile style={{position: 'absolute'}} />} />
            <Route path='/quiz' element={<Quiz style={{position: 'absolute'}} />} />
            <Route path='/404' element={<NotFound style={{position: 'absolute'}} />} />
            <Route path='*' element={<Navigate to={'/404'} />}/>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
