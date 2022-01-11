import React from "preact/compat";
import "./css/app.scss";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "~/components/HomePage";

const App: React.FC = () => (
  <React.Suspense fallback={<span>Loading...</span>}>
    <Routes>
      <Route element={<HomePage />} path="/" />
    </Routes>
  </React.Suspense>
);

// eslint-disable-next-line import/no-default-export
export default App;
