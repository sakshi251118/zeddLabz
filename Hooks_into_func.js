import React, { useState, useEffect, useCallback, useContext } from 'react';

const MyComponent: React.FC = () => {
  const [data, setData] = useState('');
  
  useEffect(() => {
    // Run some side effect when the component mounts or data changes
    // Example: Fetch data from an API
    fetchData();
  }, [data]);

  const handleClick = useCallback(() => {
    // Handle click event
  }, []);

  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>Data: {data}</p>
      <button onClick={handleClick}>Click Me</button>
      <p>Theme: {theme}</p>
    </div>
  );
};

export default MyComponent;
