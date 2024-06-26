import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./../../redux/features/auth/authSlice";

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("success");
    localStorage.removeItem("role");

    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button
        style={{
          backgroundColor: "#db3580",
          borderRadius: "10px",
        }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
