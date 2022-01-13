import { Navbar } from "~/components/Navbar";
import React from "preact/compat";
import { Helmet } from "react-helmet";

export const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <header>
        <Navbar />
      </header>
      <main className="min-h-full">
        <div className="px-3 mt-5 md:mt-10">
          <h1 className="text-center text-4xl">Preact and TypeScript App!🚀</h1>
        </div>
      </main>
    </>
  );
};
