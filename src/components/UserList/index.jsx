import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { clearAllUsers, deleteUser } from "../store/reducer";

const UserList = () => {
  const userNameArray = useSelector((state) => state.users);
  console.log(userNameArray);

  const dispatch = useDispatch();

  const deleteAllUser = () => {
    dispatch(clearAllUsers());
  };

  const deleteUserById = (id) => {
    console.log(456);
    dispatch(deleteUser(id));
  };

  return (
    <>
      {!userNameArray.length ? (
        <h1>No Users</h1>
      ) : (
        <>
          <ul className="user-list-container">
            {userNameArray.map((name, id) => {
              return (
                <li key={id} className="user-list-row">
                  <div className="user-container">
                    <span className="id-span">{id + 1}</span>
                    <span>{name}</span>
                    <button
                      className="btn-delete"
                      onClick={() => deleteUserById(id)}
                    >
                      <MdDeleteForever size={25} className="md-delete" />
                    </button>
                  </div>
                  <hr className="hr" />
                </li>
              );
            })}
          </ul>
          <button
            className="delete-all-btn mt-4"
            onClick={deleteAllUser}
            disabled={!userNameArray.length}
          >
            Delete All User
          </button>
        </>
      )}
    </>
  );
};
export default UserList;
