import React from "preact/compat";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 dark:bg-gray-900 text-white dark:text-gray-100">
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-5 lg:px-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
    </nav>
  );
};
