import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();
export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
