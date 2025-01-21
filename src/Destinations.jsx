import React, { useState, useEffect } from 'react';

function Destinations() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Check if data is already in localStorage
    const storedData = localStorage.getItem('apiData');

    if (storedData) {
      // If data exists in localStorage, use it
      setData(JSON.parse(storedData));
    } else {
      // If no data in localStorage, fetch it from the API
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((fetchedData) => {
          setData(fetchedData); // Update state
          localStorage.setItem('apiData', JSON.stringify(fetchedData)); // Store in localStorage
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, []); 

  return (
    <div>
      <table className='mt-24  flex flex-col'>
        <thead>
          <tr>
            <th>No.</th>
            <th>To Do</th>
            <th>Checked</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed ? 'Yes' : 'No'}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Destinations;
