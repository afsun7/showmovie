import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

export default function LogIn() {
  const user = useContext(UserContext);

  function handelLogin(e) {
    e.preventDefault();
    const { username, password } = e.target.elements;
    user.login(username.value, password.value);
  }
  return (
    <form
      action=""
      onSubmit={handelLogin}
      className="flex flex-col justify-center items-center gap-4 mt-4 text-black"
    >
      <input placeholder="username" type="text" name="username" />
      <input placeholder="password" type="number" name="password" />
      <input type="submit" value="login" className="text-white" />
    </form>
  );
}
