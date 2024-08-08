import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";

export default function Layout() {
  const location = useLocation();
  const headerPath = ["/register", "/login"];
  return (
    <div>
      {headerPath.includes(location.pathname) ? null : <Header />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
