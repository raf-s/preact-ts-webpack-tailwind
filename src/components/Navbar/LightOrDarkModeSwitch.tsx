import * as React from "preact/compat";
import { Switch } from "@headlessui/react";

export const LightOrDarkModeSwitch: React.FC = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

  const localStorageKey = "app.theme";

  React.useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem(localStorageKey);
    if (themeFromLocalStorage === "dark") {
      setIsDarkModeEnabled(true);
    }
  }, []);

  React.useEffect(() => {
    if (isDarkModeEnabled) {
      localStorage.setItem(localStorageKey, "dark");
    } else {
      localStorage.setItem(localStorageKey, "light");
    }
  }, [isDarkModeEnabled]);

  React.useEffect(() => {
    const darkClassName = "dark";
    if (isDarkModeEnabled) {
      document.documentElement.classList.add(darkClassName);
    } else {
      document.documentElement.classList.remove(darkClassName);
    }
  }, [isDarkModeEnabled]);

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4">Dark Mode</Switch.Label>
        <Switch
          checked={isDarkModeEnabled}
          onChange={setIsDarkModeEnabled}
          className={`${
            isDarkModeEnabled ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          <span
            className={`${
              isDarkModeEnabled ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};
