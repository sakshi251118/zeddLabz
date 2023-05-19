import React, { useRef } from 'react';

const MyComponent: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const scrollToDiv = () => {
    divRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={scrollToDiv}>Scroll to Div</button>
      <div ref={divRef}>Scroll to this div</div>
    </div>
  );
};

export default MyComponent;
