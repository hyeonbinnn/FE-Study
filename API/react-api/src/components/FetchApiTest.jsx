import React, { useState, useEffect } from 'react';

const FetchApiTest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // GET 요청
        const getResponse = await fetch('https://api.example.com/data');
        if (!getResponse.ok) {
          throw new Error('네트워크 응답 에러 발생');
        }
        const getData = await getResponse.json();
        setData(getData);

        // POST 요청
        const postData = {
          title: 'New Post',
          body: 'This is a new post',
          userId: 10,
        };

        const postResponse = await fetch('https://api.example.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        });

        if (!postResponse.ok) {
          throw new Error('POST 요청 실패');
        }

        const postDataResponse = await postResponse.json();
        console.log('새로운 포스트 추가:', postDataResponse);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <>
      <h1>Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchApiTest;
