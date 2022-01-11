import React from "preact/compat";
import { Link } from "~/components/Link";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <ul>
        <li>Link 1</li>
      </ul>
    </nav>
  );
};
