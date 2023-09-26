import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./Router";
const { Link } = require("react-router-dom");

var LayoutComponent = () => {
  return (
    <div className="">
      <BrowserRouter>
        <header className="bg-red-400 p-3 flex justify-between text-white italic">
          <h1 className="text-2xl ">User/Profiles</h1>
          <nav className="flex gap-5">
            <Link to="/" className="transition-colors hover:text-slate-400">
              Home
            </Link>
            <Link
              to="/users"
              className="transition-colors hover:text-slate-400"
            >
              Users
            </Link>
            <Link
              to="/login"
              className="transition-colors hover:text-slate-400"
            >
              Login
            </Link>
          </nav>
        </header>
        <section className="">
          <RouterComponent />
        </section>
      </BrowserRouter>
    </div>
  );
};

export default LayoutComponent;
