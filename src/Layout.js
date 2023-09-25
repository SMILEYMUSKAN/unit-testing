import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./Router";
const { Link } = require("react-router-dom");

var LayoutComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/login">Login</Link>
        </header>
        <section>
          <RouterComponent />
        </section>
      </BrowserRouter>
    </div>
  );
};

export default LayoutComponent;
