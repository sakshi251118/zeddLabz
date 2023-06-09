import React from 'react';

class ClassComponent extends React.Component {
  render() {
    return <h1>Hello, I'm a class component!</h1>;
  }
}

export default ClassComponent;
//Example of a function component with TypeScript:

interface FunctionComponentProps {
  name: string;
}

const FunctionComponent: React.FC<FunctionComponentProps> = ({ name }) => {
  return <h1>Hello, {name}! I'm a function component with TypeScript.</h1>;
};

export default FunctionComponent;
