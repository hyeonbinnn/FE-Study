import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      <Link to="/blog/1"> four_1 </Link>
      <Link to="/blog/2"> four_2 </Link>
      <Link to="/blog/3"> four_3 </Link>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One name="licat" />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Outlet />}>
          <Route path="" element={<JeongIndex />} />
          <Route path="jeongone/" element={<JeongOne />} />
          <Route path="jeongtwo/" element={<JeongTwo />} />
        </Route>
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

const Index = () => {
  return <h1>hello world 0</h1>;
};

const One = ({ name }) => {
  return <h1>{name} world 1</h1>;
};

const Two = () => {
  return <h1>hello world 2</h1>;
};

// const Three = () => {
//   return <h1>hello world 3</h1>;
// };

const Blog = () => {
  const location = useLocation();
  console.log(location);
  return <h1>hello Blog</h1>;
};

const JeongIndex = () => {
  const location = useLocation();
  console.log(location);
  return <h1>hello Jeong Index!</h1>;
};

const JeongOne = () => {
  const location = useLocation();
  console.log(location);
  return <h1>hello Jeong One!</h1>;
};

const JeongTwo = () => {
  const location = useLocation();
  console.log(location);
  return <h1>hello Jeong Two!</h1>;
};

export default App;
