import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { createUser } from "../../context/redux/user/ApiUserCall";
import { useDispatch } from "react-redux";
import axios from "axios";
import { display } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from 'notistack';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value })
  };

  const handleClick = (variant) => async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dtukcgrf7/image/upload", data);
      const { url } = uploadRes.data;

      const newUser = {
        ...user,
        img: url
      };

      await createUser(display, newUser);
      enqueueSnackbar('Create a new user complete!', { variant });
      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input 
                  type="text" 
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input 
                  type="email"
                  placeholder="email@gmail.com"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input 
                  type="text"
                  placeholder="+1 234 567 89"
                  name="phone"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input 
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input 
                  type="text"
                  placeholder="Country"
                  name="country"
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>City</label>
                <input 
                  type="text" 
                  placeholder="City"
                  name="city"
                  onChange={handleChange}
                />
              </div>

              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))} */}
              <button onClick={handleClick('success')}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
