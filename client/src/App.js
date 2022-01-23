// import { useState } from 'react';
import myApi from './api/Api';

function App() {
  // const [user, setUser] = useState('');

  console.log(process.env.NODE_ENV);

  const getReq = async () => {
    try {
      const { data } = await myApi.get('/users');
    } catch (e) {
      console.log(e.response.data);
    }
  };
  return (
    <div className='App'>
      {' '}
      Hello World!
      <button onClick={getReq}>get</button>
    </div>
  );
}

export default App;
