import * as React from "preact/compat";
import { Switch } from "@headlessui/react";
import { useThemeContext } from "~/contexts/ThemeContext";

function isDark(theme: string) {
  return theme === "dark";
}

export const LightOrDarkModeSwitch: React.FC = () => {
  const { theme, setTheme } = useThemeContext();
  const isDarkModeEnabled = isDark(theme);
  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4">Dark Mode</Switch.Label>
        <Switch
          checked={isDarkModeEnabled}
          onChange={(checked) => setTheme(checked ? "dark" : "light")}
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
