import React from "preact/compat";
import BootstrapNavbar from "react-bootstrap/Navbar";
import { Container } from "~/components/Container";
import { Link } from "~/components/Link";

export const Navbar: React.FC = () => {
  return (
    <BootstrapNavbar expand="md" variant="light" bg="light">
      <Container fluid>
        <Link className="navbar-brand" to="/">
          React Bootstrap
        </Link>
        <BootstrapNavbar.Toggle />
        <BootstrapNavbar.Collapse>
          <ul className="navbar-nav" />
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
