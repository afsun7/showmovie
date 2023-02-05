import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api_key, baseURL } from "../src/component/apiconfig";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setsession] = useState(() => localStorage.getItem("session"));
  const navigate = useNavigate();

  async function getUser() {
    const { data } = await axios.get(
      `${baseURL}/account?api_key=${api_key}&session_id=${session}`
    );
    setUser(data);
  }

  useEffect(() => {
    if (session) getUser();
  }, [session]);

  async function login(username, password) {
    try {
      const tokenResult = await axios.get(
        `${baseURL}/authentication/token/new?api_key=${api_key}`
      );
      const authorize = await axios.post(
        `${baseURL}/authentication/token/validate_with_login?api_key=${api_key}`,
        { username, password, request_token: tokenResult.data.request_token }
      );
      const { data } = await axios.post(
        `${baseURL}//authentication/session/new?api_key=${api_key}`,
        { request_token: tokenResult.data.request_token }
      );
      setsession(data.session_id);
      localStorage.setItem("session", data.session_id);
      navigate("/", { replace: true });
      // toast.success(`wellcome ${}`)
    } catch {
      toast.error("username or password is not correct");
    }
  }

  function logout() {
    setUser(null);
    setsession(null);
    localStorage.clear();
  }
  return (
    <UserContext.Provider value={{ user, login, session, logout }}>
      {children}
    </UserContext.Provider>
  );
}
