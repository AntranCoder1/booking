import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import ListHotel from "./pages/list/ListHotel";
import ListRoom from "./pages/list/ListRoom";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import NewHotel from "./pages/new/NewHotel";
import NewRoom from "./pages/new/NewRoom";
import UpdateUser from "./pages/update/UpdateUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { useSelector } from "react-redux";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const admin = useSelector(state => state.admin.currentAdmin?.isAdmin)

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
              <Route index element={admin ? <List /> : <Login />} />
              <Route path=":userId" element={admin ? <Single /> : <Login />} />
              <Route
                path="new"
                element={admin ? <New inputs={userInputs} title="Add New User" /> : <Login />}
              />
              <Route
                path="update/:userId"
                element={admin ? <UpdateUser title="Update User" /> : <Login />}
              />
            </Route>
            <Route path="hotels">
              <Route index element={admin ? <ListHotel /> : <Login />} />
              <Route path=":hotelId" element={admin ? <Single /> : <Login />} />
              <Route
                path="new"
                element={admin ? <NewHotel inputs={productInputs} title="Add New Hotel" /> : <Login />}
              />
            </Route>
            <Route path="rooms">
              <Route index element={admin ? <ListRoom /> : <Login />} />
              <Route path=":roomId" element={admin ? <Single /> : <Login />} />
              <Route
                path="new"
                element={admin ? <NewRoom inputs={productInputs} title="Add New Room" /> : <Login />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
