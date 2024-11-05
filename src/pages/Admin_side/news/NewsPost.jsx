import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import NewsHead from './NewsHead';
import AppBar from '@/components/Apppbar/AppBar';


const NewsPost = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your actual access token
    // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNDY2NjAxLCJpYXQiOjE3MzA0NjU3MDEsImp0aSI6Ijg4NjI0OTgyYTE2MTQyNjY5ZTBiYTk5ODVjYTQ5YTM2IiwidXNlcl9pZCI6N30.gkvt3Ao4eJiHI042jecNE951mfG87t-bRR6tlhpCGZc';

    fetch('http://localhost:8000/api/news/', {
      method: 'GET',
      headers: {
        // 'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) return response.json();
        console.log(response)
        throw new Error('Failed to fetch news data');
      })
      .then(data => setNews(data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div>
        <div className='w-full max-h-screen'>
          <AppBar/>
        <NewsHead/>
        </div>
      <h1 className='p-2 font-bold'>News</h1>
      <div className='ml-12 '>
          <div className='h-[4px] bg-blue-900 w-full'></div>
        </div>
       <NewsCard/>
      {/* {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {news.map((item, index) => (
            <li key={index}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}

export default NewsPost;
