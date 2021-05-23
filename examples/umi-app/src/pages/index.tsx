import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'umi';
import {
  Button,
} from 'antd';

import Parent from './parent';
import NotChild from './notChild';

type User = {
  name: string;
  age: number;
}

type Store = {
  name: string;
  count: number;
}

type DefaultState = {
  index: Store;
}

export interface IndexProps {
  index: Store;
}

const Index: React.FC<IndexProps> = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  // const [user, setUser] = useState({} as User);
  const [userList, setUserList] = useState<Array<User>>([]);
  // const [userList, setUserList] = useState([] as User[]);

  const storeCount = useSelector<DefaultState>(state => state.index.count) as number;
  const dispatch = useDispatch()

  // 发起请求
  useEffect(() => {
    dispatch({
      type: 'index/add',
      payload: {
        count: storeCount + 2,
      }
    })
  }, [count]);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>state 自增时，修改 store {storeCount}</h2>
      <Button onClick={onClick}>state自增{count}</Button>
      <Parent />
      <NotChild />
    </div>
  )
}
export default Index