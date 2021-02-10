import React,{useState} from 'react';
import Router from './Router'
import './assets/css/reset.css'
import './assets/css/index.css'
import {GroupContext} from './context/groupContext'
import { Group } from './types/group';

function App() {
  const [group, setGroup] = useState<Group>({
    name: '',
    uid: ''
  })

  return (
    <GroupContext.Provider value={{group, setGroup}} >
      <Router/>
    </GroupContext.Provider>
  );
}

export default App;
