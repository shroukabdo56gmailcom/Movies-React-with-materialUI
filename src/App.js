import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./component/home";
import ButtonAppBar from "./component/nav";
import Details from "./component/details";
let router = createBrowserRouter([
  {path:'/',element:<ButtonAppBar/>,children:[
  {path:"",element:<Home/>},
 {path:"/:id",element:<Details/>}

  ]}
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router}>
        <ButtonAppBar/>
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
