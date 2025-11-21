import { createContext, useContext, useState, useEffect } from "react";
import { loginUser } from "../api/ApiAuth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
  
    const saved = localStorage.getItem("timelink_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return Boolean(localStorage.getItem("timelink_user"));
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("timelink_user", JSON.stringify(user));
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("timelink_user");
      setIsAuthenticated(false);
    }
  }, [user]);

  async function login(email, password) {
    const response = await loginUser({ email, password });

    setUser({
      id: response.userId,
      email: response.email,
      name: response.email.split("@")[0],
    });

    return response;
  }

  function logout() {
    setUser(null);
  }

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
