import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './components/Login';
import Upload from './components/Upload';
import Chart from './components/Chart';

function App() {
  const user = useSelector(selectUser);

  return (
    <Router>
      <div className='app'>
        {!user ? (
          <Login/>
        ) : (
          <Routes>
            <Route path='/upload' element={<Upload/>}/>
            <Route path='/chart' element={<Chart/>}/>
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
