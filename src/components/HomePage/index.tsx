import { Navbar } from "~/components/Navbar";
import React from "preact/compat";

export const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Preact and TypeScript App!🚀</h1>
    </div>
  );
};
