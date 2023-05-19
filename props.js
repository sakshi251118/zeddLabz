import React from 'react';

interface ParentProps {
  message: string;
}

const ParentComponent: React.FC<ParentProps> = ({ message }) => {
  return <ChildComponent message={message} />;
};

interface ChildProps {
  message: string;
}

const ChildComponent: React.FC<ChildProps> = ({ message }) => {
  return <p>{message}</p>;
};

export default ParentComponent;
