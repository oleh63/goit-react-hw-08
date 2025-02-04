import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import PhoneBook from "./components/PhoneBook/PhoneBook";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUserThunk } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <PhoneBook />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="login"
        element={
          <RestrictedRoute>
            <LoginPage />
          </RestrictedRoute>
        }
      />
      <Route
        path="register"
        element={
          <RestrictedRoute>
            <RegistrationPage />
          </RestrictedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
