import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosTest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addNewData = () => {
    try {
      const response = axios.post('https://api.example.com/data', {
        // 새로운 데이터 추가
        name: 'New Item',
      });
      // 새로운 데이터 현재 데이터에 추가
      setData([...data, response.data]);
    } catch (error) {
      setError(error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data...</div>;

  return (
    <>
      <h2>Data</h2>
      <button onClick={addNewData}>+ New Data</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default AxiosTest;
