import React, { useState, useEffect, useDebugValue } from 'react';
import Child from './child';

const Parent = () => {
  return (
    <div>
      <h2>This is parent</h2>
      <Child title="This is child" />
    </div>
  );
}

export default Parent;