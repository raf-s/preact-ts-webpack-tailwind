import React from "preact/compat";
import { Page } from "~/components/Page";

export const HomePage: React.FC = () => (
  <Page title="Home Page">
    <div className="px-3 mt-5 md:mt-10">
      <h1 className="text-center text-4xl">Preact and TypeScript App!🚀</h1>
    </div>
  </Page>
);
