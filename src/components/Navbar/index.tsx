import React from "preact/compat";
import { Link } from "~/components/Link";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <Link className="navbar-brand" to="/">
        React Bootstrap
      </Link>
      <ul>
        <li>Link 1</li>
      </ul>
    </nav>
  );
};
