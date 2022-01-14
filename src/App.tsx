import React from "preact/compat";
import "./css/main.css";
import { HomePage } from "~/components/HomePage";
import { routes } from "~/lib/routes";
import { TestPage } from "~/components/TestPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => (
  <React.Suspense fallback={<span>Loading...</span>}>
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path={routes.home} />
        <Route element={<TestPage />} path={routes.test} />
      </Routes>
    </BrowserRouter>
  </React.Suspense>
);

// eslint-disable-next-line import/no-default-export
export default App;
