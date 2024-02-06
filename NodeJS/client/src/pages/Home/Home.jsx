import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  useEffect(() => {
    axios.get('/api/hello').then((res) => console.log(res.data));
  }, []);

  return <div>Home</div>;
};

export default Home;