"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";
import CodeBlock from "./CodeBlock";

export default function PreviewPanel({ children, markup, style }) {
  const [theme, setTheme] = useState("light");
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  const disabledButtonTheme = "opacity-40 cursor-pointer";
  const enabledButtonTheme = "bg-white shadow-md";

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      {!isCodeVisible && (
        <>
          <div className="flex">
            <div className="border border-brand-black/15 bg-brand-black/5 rounded-md inline-block mb-2 inset-shadow-sm inset-shadow-brand-black/15 p-[2px] overflow-hidden">
              <button
                className={`w-9 h-9 rounded-sm ${
                  theme === "light" ? enabledButtonTheme : disabledButtonTheme
                }`}
                onClick={() => setTheme("light")}
                title="Switch to light mode"
              >
                <FontAwesomeIcon icon={faSun} />
              </button>
              <button
                className={`w-9 h-9 rounded-sm ${
                  theme === "dark" ? enabledButtonTheme : disabledButtonTheme
                }`}
                onClick={() => setTheme("dark")}
                title="Switch to dark mode"
              >
                <FontAwesomeIcon icon={faMoon} />
              </button>
            </div>
            <div className="ml-auto">
              <button
                onClick={() => setIsCodeVisible(true)}
                className="outline outline-2 outline-white hover:outline-brand-blue bg-brand-blue text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold cursor-pointer"
              >
                View Code
              </button>
            </div>
          </div>
          <div className="bg-white dark:bg-brand-black border border-dashed border-gray-300 rounded-lg p-5">
            {children}
          </div>
        </>
      )}
      {isCodeVisible && (
        <>
          <div className="flex">
            <div className="ml-auto">
              <button
                onClick={() => setIsCodeVisible(false)}
                className="outline outline-2 outline-white hover:outline-brand-blue bg-brand-blue text-white hover:bg-white hover:text-brand-blue px-6 py-2 rounded-full transition-colors duration-500 uppercase font-semibold cursor-pointer"
              >
                View Preview
              </button>
            </div>
          </div>

          <p className="text-sm font-semibold text-gray-600">JSX</p>
          <CodeBlock code={markup} language="jsx" />
          {style && (
            <div className="mt-2">
              <p className="text-sm font-semibold text-gray-600">CSS</p>

              <CodeBlock code={style} language="css" />
            </div>
          )}
        </>
      )}
    </div>
  );
}

PreviewPanel.propTypes = {
  children: PropTypes.node.isRequired,
  markup: PropTypes.string.isRequired,
  style: PropTypes.string,
};
