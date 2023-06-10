import React, { createContext } from 'react';

// context 생성
const UserInfo = createContext({ name: 'gary', id: 'garyIsFree' });

const App7 = () => {
  return (
    // provide로 하위 모든 컴포넌트의 값을 변경
    <UserInfo.Provider value={{ name: 'Licat', id: 'ImLion' }}>
      <HelloLicat />
    </UserInfo.Provider>
  );
};

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
          <HelloLicatTwo />
        </div>
      )}
    </UserInfo.Consumer>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

export default App7;
