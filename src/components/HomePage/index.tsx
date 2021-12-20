import { Container } from "~/components/Container";
import { Navbar } from "~/components/Navbar";
import { Alert } from "~/components/Alert";
import React from "preact/compat";

export const HomePage: React.FC = () => {
  return (
    <Container className="mt-4">
      <Navbar />
      <h1>Preact 17 and TypeScript 4 App!🚀</h1>
      <Alert variant="primary">This is an Alert</Alert>
    </Container>
  );
};
