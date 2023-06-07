// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [quote, setQuote] = useState('');
//   const handleRefreshClick = () => {
//     window.location.reload();
//   };

//   useEffect(() => {
//     const fetchQuote = async () => {
//       try {
//         const response = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes/5');
//         setQuote(response.data[0].quote);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchQuote();
//   }, []);


//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <div className="App">
//         <h1>Breaking Bad Quotes</h1>
//         <p>{quote}</p>
//         <button onClick={handleRefreshClick}>Refresh</button>
//       </div>
//     </Card>

//   );
// }

// export default App;


import React from 'react';
import { TextField } from '@fluentui/react';

function App() {
  const handleInputChange = (event, newValue) => {
    console.log(newValue);
  };

  return (
    <div>
      <TextField label="Enter your name" onChange={handleInputChange} />
    </div>
  );
}

export default App;
