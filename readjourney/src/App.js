import { Suspense, lazy, useState } from "react";
import RegisterPage from "./pages/RegisterPage";
import Loader from "./components/Loader/Loader";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage";
import RecommendedPage from "./pages/RecommendedPage";

// const Register = lazy(() => import("./pages/RegisterPage.jsx"));
// const Login = lazy(() => import("./pages/RegisterPage.jsx"));
function App() {
  const [refresh, setRefresh] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/register" />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/recommended" element={<RecommendedPage />} />
        </Route>
      </Routes>
    </>
    // <div className="App">
    //   <RegisterPage />
    //   <LoginPage />
    // </div>
  );
}

export default App;
