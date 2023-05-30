import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { PostList, PostEdit, PostCreate } from "./posts";
import Page from './pages/Page';
import './pages/page.css'
import { useEffect, useState } from 'react';

const TestAdmin = () => {
  return (
    <Admin basename="/admin" dataProvider={jsonServerProvider('https://api-adv.dblsoft.xyz')}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    </Admin>
  )
}

const Sample = () => {
  const [state, setState] = useState([{ content: '<p>some raw html</p>' }]);
  const markup = { __html: state[2].content };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api-adv.dblsoft.xyz/posts');
      const data = await res.json();
      console.log(data);

      setState(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={markup} />;
    </>
  )
}

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/sample" element={<Sample />} />
      <Route path="/admin/*" element={<TestAdmin />} />
    </Routes>
  </BrowserRouter>
);

export default App;