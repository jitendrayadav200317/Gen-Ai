// import { useContext } from "react";
// import { AuthContext } from "../auth.context.jsx";
// import { login, register, logout, getMe } from "../services/auth.api.js";

// export function useAuth() {
//   const context = useContext(AuthContext);
//   const { user, setUser, loading, setLoading } = context;

//   const handleLogin = async ({ email, password }) => {
//     setLoading(true);
//     try {
//       const data = await login({ email, password });
//       setUser(data.user);
//     } catch (error) {
//     } finally {
//       setLoading(false);
//     }
//   };
//   const handleRegister = async ({ username, email, password }) => {
//     setLoading(true);
//     try {
//       const data = await register({ username, email, password });
//       setUser(data.user);
//     } catch (error) {
//     } finally {
//       setLoading(false);
//     }
//   };
//   const handleLogout = async () => {
//     setLoading(true);
//     try {
//       const data = await logout();
//       setUser(null);
//     } catch (error) {
//     } finally {
//       setLoading(false);
//     }
//   };
//   const getMe = async () => {
//     setLoading(true);
//     try {
//       const data = await getMe();
//       setUser(data.user);
//     } catch (error) {
//     } finally {
//       setLoading(false);
//     }
//   };
//   return { user, loading, handleLogin, handleRegister, handleLogout, getMe };
// }


import { useContext } from "react";
import { AuthContext } from "../auth.context.jsx";
import {
  login,
  register,
  logout,
  getMe as getMeApi,
} from "../services/auth.api.js";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async ({ email, password }) => {
    setLoading(true);

    try {
      const data = await login({ email, password });
      setUser(data.user);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async ({ username, email, password }) => {
    setLoading(true);

    try {
      const data = await register({ username, email, password });
      setUser(data.user);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);

    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleGetMe = async () => {
    setLoading(true);

    try {
      const data = await getMeApi();
      setUser(data.user);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    handleLogin,
    handleRegister,
    handleLogout,
    handleGetMe,
  };
}