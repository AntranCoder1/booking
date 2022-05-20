import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import ListHotel from "./pages/list/ListHotel";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { useSelector } from 'react-redux';
import { userColumns, hotelColumns } from './datatablesource';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const admin = useSelector(state => state.admin.currentAdmin?.isAdmin);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={admin ? <Home /> : <Login />} />
            <Route path="login" element={<Login />} />
            <Route 
              index
              element={
                admin ? <Home /> : <Login />
              }
            />
            <Route path="users">
              <Route index element={admin ? <List columns={userColumns} /> : <Login />} />
              <Route path=":userId" element={admin ? <Single /> : <Login />} />
              <Route
                path="new"
                element={admin ? <New inputs={userInputs} title="Add New User" /> : <Login />}
              />
            </Route>
            <Route path="hotels">
              <Route index element={admin ? <ListHotel columns={hotelColumns} /> : <Login />} />
              <Route path=":hotelId" element={admin ? <Single /> : <Login />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
