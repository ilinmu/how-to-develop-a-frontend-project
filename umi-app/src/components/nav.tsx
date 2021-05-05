import React from 'react';
import { Link } from 'umi';

import styles from './nav.less';

const navList = [
  {
    id: 0,
    text: 'index',
    url: '/index',
  },
  {
    id: 1,
    text: 'parent',
    url: '/parent',
  },
  {
    id: 2,
    text: 'child',
    url: '/child',
  },
  {
    id: 3,
    text: 'component',
    url: '/component',
  }
]
const Nav = (props) => {
  return(
    <div>
      {
        navList.map((nav) => (
          <Link
            className={styles.nav}
            key={nav.id}
            to={nav.url}
          >
            {nav.text}
          </Link>
        ))
      }
      {props.children}
    </div>
  )
}
export default Nav;