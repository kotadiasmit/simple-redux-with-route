import "./myPage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "../Navbar";
import { fakeUser } from "../RandomUser";
import { addUser } from "../store/reducer";
import UserList from "../UserList";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const MyPage = (props) => {
  const { isSuccess } = props;
  const dispatch = useDispatch();

  const addNewUser = () => {
    dispatch(addUser(fakeUser()));
  };

  if (isSuccess) {
    return (
      <div className="main-container">
        <NavbarComp />
        <div className="sub-container">
          <button className="add-btn mt-4" onClick={addNewUser}>
            Add User
          </button>
          <hr className="hr" />
          <UserList />
        </div>
      </div>
    );
  }
  return <Navigate to="/" />;
};

export default MyPage;
