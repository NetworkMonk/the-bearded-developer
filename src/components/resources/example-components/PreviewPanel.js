"use client";

import PropTypes from "prop-types";
import { useState } from "react";

export default function PreviewPanel({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="bg-white dark:bg-brand-black border border-dashed border-gray-300 rounded-lg p-5">
        {children}
      </div>
    </div>
  );
}

PreviewPanel.propTypes = {
  children: PropTypes.node.isRequired,
};
