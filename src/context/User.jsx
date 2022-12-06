import { useEffect } from "react";
import { createContext, useState } from "react";

import { onAuthChanges, addAuthToDB } from "../utils/Authentication";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const changes = onAuthChanges((user) => {
      addAuthToDB(user);
      setCurrentUser(user);
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
