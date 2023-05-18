import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { PostList, PostEdit, PostCreate } from "./posts";

export const dataProvider = {
  ...jsonServerProvider('http://localhost:3000'),
  // getList: () => {
  //   console.log("asdasdasadasdasdadasd")
  //   return fetch(`http://localhost:3000/posts`, { method: 'GET' })
  //     .then(response => response.json())
  //     .then((data) => {
  //       console.log("asdasdasadasdasdadasd")
  //       console.log(data)
  //       return { data: data._embedded.posts, total: data._embedded.posts.length };
  //     });
  // },
}

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
);

export default App;