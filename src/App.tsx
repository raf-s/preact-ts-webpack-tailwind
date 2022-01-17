import { ThemeContextProvider } from "~/contexts/ThemeContext";
import * as React from "preact/compat";
import "./css/main.css";
import { HomePage } from "~/components/HomePage";
import { routes } from "~/lib/routes";
import { TestPage } from "~/components/TestPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

if (process.env.NODE_ENV === "development") {
  // Must use require here as import statements are only allowed
  // to exist at top-level.
  require("preact/debug");
}

const App: React.FC = () => (
  <React.Suspense fallback={<span>Loading...</span>}>
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path={routes.home} />
          <Route element={<TestPage />} path={routes.test} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  </React.Suspense>
);

// eslint-disable-next-line import/no-default-export
export default App;
