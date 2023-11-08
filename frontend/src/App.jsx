import { BrowserRouter, Link, Routes, NavLink } from "react-router-dom";
import { routes } from "./routes/routes";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul className="app-ul">
            <li className="app-li">
              <Link to="/">Home</Link>
            </li>
            <li className="app-li">
              {/* Wrong approach using the react router */}
              <a href="/movies">Movies using a tag</a>
            </li>
            <li className="app-li">
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li className="app-li">
              <Link to="/my-info">My Info</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
