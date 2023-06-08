import React from 'react';
import { useState } from 'react';
import ContentsContainer from './ContentsContainer';

const NavBar = () => {
  const [listName, setListName] = useState('detail');
  const checkId = (e) => {
    setListName(e.target.id);
  };

  return (
    <>
      <nav style={{ border: 'solid 2px', width: '700px', marginBottom: '30px' }}>
        <ul>
          <li
            id="detail"
            style={listName === 'detail' ? { color: 'red' } : { color: 'black' }}
            onClick={checkId}
          >
            상세정보
          </li>
          <li
            id="qa"
            onClick={checkId}
            style={listName === 'qa' ? { color: 'red' } : { color: 'black' }}
          >
            Q&A
          </li>
          <li
            id="review"
            onClick={checkId}
            style={listName === 'review' ? { color: 'red' } : { color: 'black' }}
          >
            Review
          </li>
        </ul>
        <ContentsContainer listName={listName} />
      </nav>
    </>
  );
};

export default NavBar;
