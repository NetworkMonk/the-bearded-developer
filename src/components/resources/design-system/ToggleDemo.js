"use client";

import { useState } from "react";
import Toggle from "@/components/cookie-consent/Toggle";

export default function ToggleDemo() {
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  const rows = [
    {
      label: "Strictly necessary",
      note: "Always on and cannot be turned off.",
      checked: true,
      disabled: true,
      onChange: () => {},
    },
    {
      label: "Analytics",
      note: "Helps us understand how the site is used.",
      checked: analytics,
      disabled: false,
      onChange: setAnalytics,
    },
    {
      label: "Marketing",
      note: "Used to measure campaign performance.",
      checked: marketing,
      disabled: false,
      onChange: setMarketing,
    },
  ];

  return (
    <div className="divide-y divide-gray-100">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-start justify-between gap-6 py-4 first:pt-0 last:pb-0"
        >
          <div>
            <p className="text-sm font-semibold text-brand-black">{row.label}</p>
            <p className="mt-1 text-xs text-brand-black/50">{row.note}</p>
          </div>
          <Toggle
            checked={row.checked}
            disabled={row.disabled}
            onChange={row.onChange}
          />
        </div>
      ))}
    </div>
  );
}
