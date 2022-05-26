import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../context/redux/user/ApiUserCall";
import { useEffect, useState } from "react";

const filterPosts = (users, query) => {
  if (!query) {
    return users;
  }

  return users.filter((user) => {
    const postName = user.username.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    return postName;
  });
};

const List = () => {

  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(users, searchQuery);

  useEffect(() => {
    getUser(dispatch)
  }, [dispatch]);

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery}
        />
        <Datatable filteredPosts={filteredPosts} />
      </div>
    </div>
  )
}

export default List