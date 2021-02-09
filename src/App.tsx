import React,{useState} from 'react';
import Router from './Router'
import './assets/css/reset.css'
import './assets/css/index.css'
import {UserContext} from './context/userContext'
import { User } from './types/user';

function App() {
  const [user, setUser] = useState<User>({
    name: '',
    uid: ''
  })

  return (
    <UserContext.Provider value={{user, setUser}} >
      <Router/>
    </UserContext.Provider>
  );
}

export default App;
