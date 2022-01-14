import * as React from "preact/compat";
import { Helmet } from "react-helmet";
import { Navbar } from "~/components/Navbar";

const appTitle = "My Preact App";

type PageProps = {
  title: string;
};

export const Page: React.FC<PageProps> = ({ title, children }) => (
  <>
    <Helmet>
      <title>{`${title} | ${appTitle}`}</title>
    </Helmet>
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
  </>
);
