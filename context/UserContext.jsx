import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-hot-toast";
import { api_key, baseURL } from "../src/component/apiconfig";

export const UserContext = createContext();
export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(username, password) {
try{
  const tokenResult = await axios.get(
    `${baseURL}/authentication/token/new?api_key=${api_key}`
  );
  const authorize = await axios.post(
    `${baseURL}/authentication/token/validate_with_login?api_key=${api_key}`,
    { username, password, request_token: tokenResult.data.request_token }
  );
}
catch{
  toast.error("username is not correct")
}
    console.log(authorize.data);
  }
  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
}
