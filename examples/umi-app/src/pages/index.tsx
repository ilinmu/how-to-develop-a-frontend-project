import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'umi';
import {
  Button,
} from 'antd';

import Parent from './parent';
import NotChild from './notChild';

type User = {
  name: string;
  age: number;
}

const Index = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  // const [user, setUser] = useState({} as User);
  const [userList, setUserList] = useState<Array<User>>([]);
  // const [userList, setUserList] = useState([] as User[]);

  const name = useSelector(state => state.index.name);
  const storeCount = useSelector(state => state.index.count);
  const dispatch = useDispatch()
  
  // 发起请求
  useEffect(()=>{
    dispatch({
      type:'index/add',
      payload: {
        count: storeCount + 2,
      }
    })
  },[count]);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1);
  };

  return(
    <div>
      <h2>state 自增时，修改 store {storeCount}</h2>
      <Button onClick={onClick}>state自增{count}</Button>
      <Parent />
      <NotChild />
    </div>
  )
}
export default Index