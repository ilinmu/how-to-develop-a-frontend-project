import React, { useState } from 'react';

const Child = (props: { title: string; }) => {
  const {
    title,
  } = props;
  const [name] = useState('I\'m child');
  let u = undefined;
  // const length = u.length;
  return (
    <div>
      <h2>{title}</h2>
      <h3>{name}</h3>
    </div>
  );
}

export default Child;