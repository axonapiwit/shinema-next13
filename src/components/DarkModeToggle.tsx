import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, fas } from '@fortawesome/free-solid-svg-icons'
import { Switch } from '@headlessui/react';

type Props = {}

export default function DarkModeToggle({ }: Props) {

  const [darkMode, setDarkMode] = useState(false);
  // const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(systemDarkMode);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          className={`${darkMode ? 'bg-indigo-600' : 'bg-gray-200'
            } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className="sr-only">Toggle Dark Mode</span>
          <span
            className={`${darkMode ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
        <Switch.Label className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          {darkMode ? (
            <span className="flex items-center">
              <FontAwesomeIcon
                icon={faMoon}
                className="h-6 w-6 cursor-pointer"
              />
            </span>
          ) : (
            <span className="flex items-center">
             <FontAwesomeIcon
                icon={faSun}
                className="h-6 w-6 cursor-pointer"
              />
            </span>
          )}
        </Switch.Label>
      </div>
    </Switch.Group>
  );
}




