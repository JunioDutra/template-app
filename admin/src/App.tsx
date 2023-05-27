import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { PostList, PostEdit, PostCreate } from "./posts";
import Page from './pages/Page';
import './pages/page.css'

const TestAdmin = () => {
  return (
    <Admin basename="/admin" dataProvider={jsonServerProvider('https://api-adv.dblsoft.xyz')}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    </Admin>
  )
}

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/admin/*" element={<TestAdmin />} />
    </Routes>
  </BrowserRouter>
);

export default App;