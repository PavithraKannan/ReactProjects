import React, { useState, useEffect } from 'react';
import { Card } from '@fluentui/react-icons-northstar';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes/5');
        setQuote(response.data[0].quote);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuote();
  }, []);

  return (
    // <div className="App">
    //   <h1>Breaking Bad Quotes</h1>
    //   <p>{quote}</p>
    // </div>

    <Card>
      <h2>Breaking Bad Quotes</h2>
      <p>{quote}</p>
    </Card>
  );
}

export default App;