import React, { useEffect } from 'react';

import api from './services/api';

function App() {


  useEffect(() => {
    api.get('users/dannyelgjl').then(response => {
      console.log(response.data);    
    });
  },[])

  return (
    <div className="App">
     <h1>Me</h1>
    </div>
  );
}

export default App;
